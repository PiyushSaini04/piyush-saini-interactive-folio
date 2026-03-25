'use client';

import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function TrainingPage() {
  return (
    <section className="min-h-screen px-6 text-white relative overflow-hidden">

      {/* Background Glow (same UI style) */}
      {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div> */}

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-mono text-blue-400 tracking-[0.3em] uppercase mb-4">
            Learning
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Training 
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A journey of continuous learning through structured training and real-world problem solving.
          </p>
        </motion.div>

        {/* Training Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 rounded-2xl bg-white/5 border border-white/10"
        >
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-blue-500/20">
              <BookOpen className="w-6 h-6 text-blue-400" />
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                DSA With C++
              </h3>
              <p className="text-sm text-gray-400">
                Splen Technology & Education Pvt. Ltd
              </p>
              <p className="text-xs text-gray-500">
                Jun 2025 – Jul 2025
              </p>
            </div>
          </div>

          <ul className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <li>
              • Covered core data structures including arrays, linked lists, trees, and graphs through structured lessons and continuous hands-on coding practice.
            </li>
            <li>
              • Applied BFS, DFS, Dijkstra, and A* algorithms in mini-projects to solve pathfinding and real-world logical scenarios.
            </li>
            <li>
              • Improved algorithmic reasoning by completing daily coding challenges and performance-based evaluations focused on optimization and accuracy.
            </li>
          </ul>

        </motion.div>

      </div>
    </section>
  );
}