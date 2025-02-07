"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SocialMediaWidget({
  className,
}: {
  className?: string;
}) {
  return (
    <motion.div
      className={`absolute bg-black/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(29, 161, 242, 0.5)",
      }}
    >
      <div className="relative w-full h-full">
        <Image
          src="/placeholder.svg?height=200&width=200"
          alt="Social Media Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-purple-500/40 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.h3
            className="text-white text-lg font-semibold mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Social Pulse
          </motion.h3>
          <div className="flex justify-between text-white">
            {[
              { label: "Followers", value: "1.2M" },
              { label: "Engagement", value: "87%" },
              { label: "Rating", value: "4.8★" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-xs">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
