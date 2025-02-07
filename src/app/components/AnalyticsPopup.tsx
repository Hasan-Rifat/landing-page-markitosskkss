"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const generateData = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    name: i.toString(),
    value: Math.floor(Math.random() * 500) + 100,
  }));
};

const COLORS = ["#00FFFF", "#FF00FF", "#FFFF00", "#00FF00"];

export default function AnalyticsPopup({
  type,
  className,
}: {
  type: "line" | "bar" | "pie";
  className?: string;
}) {
  const data = generateData();

  const chartContent = {
    line: (
      <ResponsiveContainer width="100%" height={100}>
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#00FFFF"
            strokeWidth={3}
            dot={false}
            animationDuration={2000}
          />
        </LineChart>
      </ResponsiveContainer>
    ),
    bar: (
      <ResponsiveContainer width="100%" height={100}>
        <BarChart data={data.slice(0, 6)}>
          <Bar dataKey="value" fill="#FF00FF" animationDuration={2000} />
        </BarChart>
      </ResponsiveContainer>
    ),
    pie: (
      <ResponsiveContainer width="100%" height={100}>
        <PieChart>
          <Pie
            data={data.slice(0, 4)}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={40}
            animationDuration={2000}
          >
            {data.slice(0, 4).map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    ),
  };

  return (
    <motion.div
      className={`absolute bg-black/80 backdrop-blur-md rounded-2xl shadow-lg p-4 ${className}`}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)" }}
    >
      <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 backdrop-blur-sm">
        {chartContent[type]}
      </div>
    </motion.div>
  );
}
