/**
 * generateHeatmap.js
 *
 * Fetches LeetCode submission calendar via GraphQL and emits a responsive
 * SVG heatmap similar to LeetCode / GitHub contribution graphs.
 *
 * Environment variables required:
 *  - LEETCODE_SESSION
 *  - LEETCODE_CSRF_TOKEN
 *  - LEETCODE_USERNAME (optional; defaults to 'piyushsaini2004')
 */

const fs = require('fs');
const path = require('path');
const axios = require('axios');

const OUTPUT_FILE = path.join(process.cwd(), 'heatmap.svg');
const USERNAME = process.env.LEETCODE_USERNAME || 'piyushsaini2004';
const SESSION = process.env.LEETCODE_SESSION;
const CSRF = process.env.LEETCODE_CSRF_TOKEN;

function log(...args) { console.log('[heatmap]', ...args); }
function err(...args) { console.error('[heatmap][ERROR]', ...args); }

if (!SESSION || !CSRF) {
  err('Missing LEETCODE_SESSION and/or LEETCODE_CSRF_TOKEN environment variables.');
  err('Set them as repository secrets in GitHub Actions or environment variables locally.');
  process.exitCode = 2;
  process.exit(2);
}

const GRAPHQL_URL = 'https://leetcode.com/graphql';

const QUERY = `
query userCalendar($username: String!) {
  userCalendar(username: $username) {
    year
    totalActiveDays
    totalSubmission
    currentStreak
    longestStreak
    calendar
  }
}
`;

async function fetchCalendar(username) {
  try {
    const res = await axios.post(GRAPHQL_URL, { query: QUERY, variables: { username } }, {
      headers: {
        'Content-Type': 'application/json',
        'x-csrftoken': CSRF,
        'Referer': 'https://leetcode.com',
        'Cookie': `LEETCODE_SESSION=${SESSION};`,
        'User-Agent': 'node.js'
      },
      timeout: 15000
    });

    if (res.status !== 200) {
      throw new Error(`Unexpected status ${res.status}`);
    }

    if (res.data.errors) {
      throw new Error('GraphQL errors: ' + JSON.stringify(res.data.errors));
    }

    const payload = res.data && res.data.data && res.data.data.userCalendar;
    if (!payload) {
      throw new Error('Missing userCalendar in response.');
    }

    return payload;
  } catch (e) {
    // Graceful failure with meaningful logs
    err('Failed to fetch calendar:', e.message || e);
    if (e.response) {
      err('Response status:', e.response.status);
      if (e.response.data) err('Response data:', JSON.stringify(e.response.data));
    }
    throw e;
  }
}

function parseCalendarField(calendarField) {
  // LeetCode API can return either:
  // - an object mapping dates (YYYY-MM-DD) -> number
  // - an array of { date: 'YYYY-MM-DD', count: N }
  // - a compact format string (unlikely)

  const map = new Map();

  if (!calendarField) return map;

  if (Array.isArray(calendarField)) {
    for (const item of calendarField) {
      if (item && item.date) map.set(item.date, Number(item.count || 0));
    }
    return map;
  }

  if (typeof calendarField === 'object') {
    // If it's an object with date keys
    for (const [k, v] of Object.entries(calendarField)) {
      // sometimes nested objects
      if (/^\d{4}-\d{2}-\d{2}$/.test(k)) {
        map.set(k, Number(v || 0));
      }
    }
    return map;
  }

  // Unknown format — return empty
  return map;
}

function buildHeatmapData(year, dateCounts) {
  // Start from the first day of the year and align to previous Sunday
  const start = new Date(Date.UTC(year, 0, 1));
  const end = new Date(Date.UTC(year, 11, 31));

  // find previous Sunday
  const startDay = start.getUTCDay();
  const offset = startDay; // 0=Sunday
  const gridStart = new Date(start);
  gridStart.setUTCDate(start.getUTCDate() - offset);

  const days = [];
  for (let d = new Date(gridStart); d <= end || d.getUTCDay() !== 0; d.setUTCDate(d.getUTCDate() + 1)) {
    const iso = d.toISOString().slice(0, 10);
    const count = dateCounts.has(iso) ? dateCounts.get(iso) : 0;
    days.push({ date: iso, count, day: d.getUTCDay() });
    // stop if we've passed end and landed on Sunday (new week)
    if (d > end && d.getUTCDay() === 0) break;
  }

  // arrange into weeks columns
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return { weeks, year };
}

function levelForCount(count, maxCount) {
  if (count === 0) return 0;
  // static thresholds for visually similar result
  if (count >= 7) return 4; // very high
  if (count >= 4) return 3; // high
  if (count >= 2) return 2; // medium
  return 1; // low
}

function colorForLevel(level) {
  // Dark theme palette per requirement
  switch (level) {
    case 0: return '#1f2937';
    case 1: return '#0e4429';
    case 2: return '#006d32';
    case 3: return '#26a641';
    case 4: return '#39d353';
    default: return '#1f2937';
  }
}

function renderSVG(payload) {
  const { year, totalActiveDays, totalSubmission, currentStreak, longestStreak, calendar } = payload;
  const dateMap = parseCalendarField(calendar);
  const targetYear = Number(year) || new Date().getFullYear();
  const { weeks } = buildHeatmapData(targetYear, dateMap);

  const cell = 12; // square size
  const gap = 4;
  const rows = 7;
  const cols = weeks.length;
  const leftPad = 140; // space for labels
  const topPad = 40;

  const width = leftPad + cols * (cell + gap);
  const height = topPad + rows * (cell + gap) + 40;

  // Stats text
  const stats = [
    { label: 'Active days', value: totalActiveDays ?? 0 },
    { label: 'Current streak', value: currentStreak ?? 0 },
    { label: 'Longest streak', value: longestStreak ?? 0 },
    { label: 'Total submissions', value: totalSubmission ?? 0 }
  ];

  // Build rects
  let rects = '';
  for (let x = 0; x < cols; x++) {
    const week = weeks[x] || [];
    for (let y = 0; y < rows; y++) {
      const day = week[y];
      const date = day ? day.date : null;
      const count = day ? day.count : 0;
      const level = levelForCount(count);
      const color = colorForLevel(level);
      const rx = leftPad + x * (cell + gap);
      const ry = topPad + y * (cell + gap);
      const title = date ? `${date}: ${count} submissions` : `No data`;
      rects += `<rect x="${rx}" y="${ry}" width="${cell}" height="${cell}" rx="3" ry="3" fill="${color}"><title>${title}</title></rect>`;
    }
  }

  // Header and stats SVG
  const statsText = stats.map((s, i) => {
    const sx = 10;
    const sy = 20 + i * 16;
    return `<text x="${sx}" y="${sy}" font-family="Inter, Arial, Helvetica, sans-serif" font-size="12" fill="#cbd5e1">${s.label}: <tspan font-weight="700" fill="#fff">${s.value}</tspan></text>`;
  }).join('');

  const title = `<text x="10" y="14" font-family="Inter, Arial, Helvetica, sans-serif" font-size="14" fill="#fff">LeetCode Heatmap — ${targetYear}</text>`;

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="auto" preserveAspectRatio="xMinYMin meet">
  <rect width="100%" height="100%" fill="#0b1220" />
  ${title}
  ${statsText}
  <g>
    ${rects}
  </g>
  <g>
    <text x="${leftPad}" y="${topPad - 10}" font-family="Inter, Arial, Helvetica, sans-serif" font-size="11" fill="#94a3b8">Sun</text>
  </g>
</svg>`;

  return svg;
}

async function main() {
  try {
    log('Fetching calendar for', USERNAME);
    const payload = await fetchCalendar(USERNAME);
    log('Rendering SVG');
    const svg = renderSVG(payload);
    fs.writeFileSync(OUTPUT_FILE, svg, 'utf8');
    log('Wrote', OUTPUT_FILE);
  } catch (e) {
    err('Generation failed:', e.message || e);
    process.exitCode = 1;
    // fail gracefully — allow CI logs to show the reason
  }
}

main();
