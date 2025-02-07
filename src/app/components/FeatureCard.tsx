"use client";

import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  features: Array<{
    icon: string;
    text: string;
  }>;
  description: string;
  index: number;
}

export default function FeatureCard({
  title,
  features,
  description,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-pink-600/90 backdrop-blur-xl border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg">
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-green-300 to-blue-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        />

        <div className="p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            className="mb-6"
          >
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
          </motion.div>

          <ul className="space-y-6 mb-8">
            {features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + idx * 0.1 + 0.4,
                }}
                className="flex items-start space-x-4 group"
              >
                <motion.span
                  className="text-2xl"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {feature.icon}
                </motion.span>
                <span className="text-white/90 leading-tight">
                  {feature.text}
                </span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
            className="relative"
          >
            {/* <div className="absolute top-[] inset-0 " /> */}
            <p className="relative text-sm text-white/80 italic leading-relaxed bg-white/10 rounded-lg p-2">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
