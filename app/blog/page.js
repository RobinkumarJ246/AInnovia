'use client';

import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { SparklesIcon, BookOpenIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function BlogComingSoon() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:bg-purple-800/30 dark:mix-blend-screen"></div>
          <div className="absolute top-1/2 -right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:bg-blue-800/30 dark:mix-blend-screen"></div>
          <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:bg-pink-800/30 dark:mix-blend-screen"></div>
        </div>

        <div className="relative z-10 container-custom px-4 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center p-4 mb-8 rounded-2xl bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg"
          >
            <BookOpenIcon className="w-10 h-10 text-green-600 dark:text-purple-400" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Our <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Blog</span> Is Coming Soon
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We're working hard to bring you insightful articles about AI in healthcare, 
            medical technology, and the future of diagnostics. Stay tuned for updates!
          </motion.p>
          
          <div className="max-w-md mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="flex items-center p-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="flex-1 flex items-center px-4 py-3">
                  <EnvelopeIcon className="w-5 h-5 text-gray-400 mr-3" />
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-transparent border-0 focus:ring-0 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none"
                  />
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-green-400 to-teal-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                  Notify Me
                </button>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 text-sm text-gray-500 dark:text-gray-400"
            >
              Get notified when we launch. No spam, we promise!
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-4"
          >
            {['AI in Healthcare', 'Medical Technology', 'Case Studies', 'Company News'].map((tag, index) => (
              <span 
                key={tag}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
