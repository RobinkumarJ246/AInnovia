'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { HomeIcon, ArrowPathIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col">
      <Navbar />
      <main className="mt-4 flex-grow flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Animated background elements */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-green-100 dark:bg-green-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 -right-20 w-64 h-64 bg-teal-100 dark:bg-teal-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/4 w-64 h-64 bg-emerald-100 dark:bg-emerald-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">404</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Oops! Page Not Found
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-700 to-teal-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center">
                <HomeIcon className="w-5 h-5 mr-2" />
                Go Back Home
              </span>
            </Link>
            
            <button 
              onClick={() => window.location.reload()}
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-200 dark:border-gray-700"
            >
              <ArrowPathIcon className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-300 group-hover:rotate-180 transition-transform duration-300" />
              Refresh Page
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
          >
            <p className="text-gray-500 dark:text-gray-400 mb-4">Still can't find what you're looking for?</p>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors"
            >
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
          </motion.div>
        </motion.div>
      </div>
      </main>
      <Footer />
    </div>
  )
}

