"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const generateData = (points: number) => {
  return Array.from({ length: points }, (_, i) => ({
    name: i.toString(),
    value: Math.floor(Math.random() * 1000) + 500,
    engagement: Math.floor(Math.random() * 100) + 50,
  }));
};

export default function AnalyticsWidget({ className }: { className?: string }) {
  const data = generateData(7);

  return (
    <motion.div
      className={`absolute bg-black/80 backdrop-blur-md rounded-2xl shadow-lg p-4 ${className}`}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)" }}
    >
      <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-4 backdrop-blur-sm">
        <motion.h3
          className="text-white text-lg font-semibold mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Weekly Performance
        </motion.h3>
        <ResponsiveContainer width="100%" height={150}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                border: "none",
              }}
              itemStyle={{ color: "#fff" }}
            />
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <Area
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </motion.g>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
