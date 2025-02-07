"use client";

import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wand2, Sparkles, Calendar, Clock } from "lucide-react";

export default function BookAWizard() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 max-w-md w-full"
      >
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.h1
                className="text-3xl font-bold text-white mb-6 flex items-center"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
              >
                <Wand2 className="mr-2" />
                Book a Wizard
              </motion.h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-purple-200 mb-1"
                  >
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 bg-purple-900 bg-opacity-50 border border-purple-500 rounded-md text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-purple-200 mb-1"
                  >
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 bg-purple-900 bg-opacity-50 border border-purple-500 rounded-md text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-purple-200 mb-1"
                  >
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300" />
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="date"
                      id="date"
                      name="date"
                      required
                      className="w-full pl-10 pr-3 py-2 bg-purple-900 bg-opacity-50 border border-purple-500 rounded-md text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-purple-200 mb-1"
                  >
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300" />
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="time"
                      id="time"
                      name="time"
                      required
                      className="w-full pl-10 pr-3 py-2 bg-purple-900 bg-opacity-50 border border-purple-500 rounded-md text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-md shadow-lg hover:from-purple-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300"
                >
                  <span className="flex items-center justify-center">
                    <Sparkles className="mr-2" />
                    Summon Wizard
                  </span>
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <Sparkles className="mx-auto text-yellow-300 w-16 h-16 mb-4" />
              </motion.div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Wizard Summoned!
              </h2>
              <p className="text-purple-200">
                Your magical appointment has been booked. Prepare for wonder!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
