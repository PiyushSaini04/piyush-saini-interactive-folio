'use client';

import React from "react";
import { Globe, Terminal, Database, Cloud, Code, Brain, Cpu, Layout, Layers, HardDrive, GitBranch } from "lucide-react";

const skillCategories = [
  {
    name: "Frontend",
    icon: Globe,
    color: "from-blue-500 to-cyan-400",
    skills: ["HTML5", "CSS3", "React", "Next.js", "JavaScript", "Tailwind"]
  },
  {
    name: "Backend",
    icon: Terminal,
    color: "from-emerald-500 to-teal-400",
    skills: ["Node.js", "Express", "Python", "C++"]
  },
  {
    name: "Database",
    icon: Database,
    color: "from-purple-500 to-indigo-400",
    skills: ["MongoDB", "PostgreSQL", "Redis"]
  },
  {
    name: "DevOps",
    icon: Cloud,
    color: "from-orange-500 to-amber-400",
    skills: ["Docker", "AWS/GCP", "Git"]
  }
];

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0c] text-white">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Technical Arsenal
        </h2>
        <p className="text-slate-400 max-w-2xl text-lg">
          A collection of technologies I use to build modern, scalable applications.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {skillCategories.map((category, index) => {
          const Icon = category.icon;

          return (
            <div
              key={index}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition duration-300"
            >
              {/* Icon */}
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                <Icon className="text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">
                {category.name}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-white/10 text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}