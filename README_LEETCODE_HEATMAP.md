# LeetCode Heatmap Generator

This repository contains a GitHub Action and Node.js script to generate a LeetCode-style contribution heatmap SVG for the user `piyushsaini2004` and commit it to the repository as `heatmap.svg`.

Files added:
- `.github/workflows/leetcode.yml` — GitHub Action that runs every 6 hours and on manual dispatch.
- `generateHeatmap.js` — Node.js script that queries LeetCode GraphQL and writes `heatmap.svg`.
- `package.json` — Minimal package manifest (depends on `axios`).

Required repository secrets (add via GitHub Settings → Secrets → Actions):
- `LEETCODE_SESSION` — your `LEETCODE_SESSION` cookie value from the LeetCode website.
- `LEETCODE_CSRF_TOKEN` — the `csrftoken` cookie value.

How to obtain `LEETCODE_SESSION` and `LEETCODE_CSRF_TOKEN` from your browser:
1. Open your browser and go to https://leetcode.com and sign in.
2. Open Developer Tools (F12), then go to the `Application` (Chrome) or `Storage` (Firefox) tab.
3. Under `Cookies` select `https://leetcode.com`.
4. Copy the value for the cookie named `LEETCODE_SESSION` (exact name, case-sensitive).
5. Copy the value for the cookie named `csrftoken` and use it as `LEETCODE_CSRF_TOKEN`.

Note: Cookies may expire. If the action fails with authentication errors, repeat the steps above to refresh the secrets.

Local testing

1. Install dependencies:

```bash
npm install
```

2. Run locally (set environment variables first):

On macOS / Linux:

```bash
LEETCODE_SESSION=your_session LEETCODE_CSRF_TOKEN=your_csrf LEETCODE_USERNAME=piyushsaini2004 node generateHeatmap.js
```

On Windows (PowerShell):

```powershell
$env:LEETCODE_SESSION = 'your_session'
$env:LEETCODE_CSRF_TOKEN = 'your_csrf'
$env:LEETCODE_USERNAME = 'piyushsaini2004'
node generateHeatmap.js
```

Output

After running, `heatmap.svg` will be created at the repository root. Embed it in your portfolio using:

```html
<img src="https://raw.githubusercontent.com/<github_username>/<repository>/main/heatmap.svg" />
```

Security

- Keep your cookies secret. Treat them like passwords.
- Rotate them if they are leaked or after changing your LeetCode password.

Troubleshooting

- If LeetCode rate-limits the GraphQL API or returns authentication errors, the script prints clear logs and exits with a non-zero code so the Action shows failure.
- If the output looks visually off, adjust color thresholds inside `generateHeatmap.js`.
