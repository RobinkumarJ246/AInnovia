'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail as Clock, Bell, Star, Sparkles } from 'lucide-react';

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 42,
    seconds: 30
  });

  // Simulate countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: Star, text: "Curated premium content" },
    { icon: Bell, text: "Weekly insights & updates" },
    { icon: Sparkles, text: "Exclusive subscriber perks" }
  ];

  return (
    <section className="w-full py-20 md:py-32 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-800/20 dark:to-purple-800/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-200 to-indigo-200 dark:from-blue-800/20 dark:to-indigo-800/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon with animated glow */}
          <motion.div
            className="inline-flex mb-8 p-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 relative"
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(99, 102, 241, 0.3)",
                "0 0 40px rgba(139, 92, 246, 0.4)",
                "0 0 20px rgba(99, 102, 241, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Clock className="h-12 w-12 text-white" />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-300 bg-clip-text text-transparent mb-6">
            Want some cool feed
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl">directly in your inbox?</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We're crafting an extraordinary newsletter experience that will deliver premium insights, 
            exclusive content, and valuable resources directly to your inbox.
          </p>
        </motion.div>

        {/* Countdown Timer 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-4 gap-4 sm:gap-6 max-w-lg mx-auto mb-16"
        >
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <motion.div
              key={unit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100 dark:border-gray-700"
            >
              <motion.div
                key={value}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400"
              >
                {value.toString().padStart(2, '0')}
              </motion.div>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide mt-1">
                {unit}
              </div>
            </motion.div>
          ))}
        </motion.div>
        */}

        {/* Features Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300"
            >
              <feature.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-3" />
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Status Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full border border-indigo-200 dark:border-indigo-700"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-3 h-3 bg-green-500 rounded-full"
          ></motion.div>
          <span className="text-indigo-700 dark:text-indigo-300 font-medium">
            Currently in development
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Our team is working hard to bring you an exceptional newsletter experience. 
          Until then, follow our social media channels to stay updated.
        </motion.p>
      </div>
    </section>
  );
};

export default ComingSoon;