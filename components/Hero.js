'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRightIcon, PlayIcon, CheckCircleIcon, SparklesIcon, BeakerIcon, MagnifyingGlassIcon, ChartBarIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <div className="mt-4 relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Primary gradient orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 dark:from-blue-600/20 dark:to-cyan-600/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-pink-400/30 dark:from-purple-600/20 dark:to-pink-600/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/2 right-10 w-64 h-64 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 dark:from-indigo-600/20 dark:to-purple-600/20 rounded-full blur-3xl"
        />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000000' fill-opacity='0.1'%3e%3cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`
          }} 
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, -60, -20],
              x: [-10, 10, -10],
              rotate: [0, 360, 0]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
            className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20`}
            style={{
              left: `${20 + (i * 12)}%`,
              top: `${30 + (i * 8)}%`
            }}
          />
        ))}
      </div>
      
      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:gap-y-20 items-center">
            {/* Left Content */}
            <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-5xl xl:text-7xl leading-tight">
                  <span className="block">Transform</span>
                  <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent block">
                    Autoimmune
                  </span>
                  <span className="block">Diagnostics</span>
                </h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-8 text-xl leading-8 text-gray-600 dark:text-gray-300 max-w-2xl"
                >
                  Revolutionize healthcare with AI-powered autoimmune disease detection. 
                  <span className="inline-flex items-center gap-4">
                    <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 text-2xl font-bold">
                      30s
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">analysis time</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 text-2xl font-bold">
                      95%
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">accuracy</span>
                  </span>
                  <span className="ml-0">making advanced diagnostics accessible globally.</span>
                </motion.p>
              </motion.div>
              
              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                <Link href="/contact" className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-400 to-teal-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center">
                    Get Started Free
                    <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                
                <button className="group inline-flex items-center px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white font-semibold rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white dark:hover:bg-gray-800">
                  <PlayIcon className="mr-3 h-5 w-5 text-blue-600" />
                  Watch Demo
                </button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-12 flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>FDA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>HIPAA Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>Cloud-based SaaS</span>
                </div>
              </motion.div>
              
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-16 grid grid-cols-3 gap-8"
              >
                {[
                  { value: "30s", label: "Analysis Time", color: "from-blue-600 to-cyan-600" },
                  { value: "95%", label: "Accuracy Rate", color: "from-green-600 to-emerald-600" },
                  { value: "$7.2B", label: "Market Size", color: "from-purple-600 to-pink-600" }
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center group">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                      className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Right Side - Enhanced Demo Interface */}
            <div className="relative mt-16 sm:mt-24 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="relative perspective-1000"
              >
                {/* Multiple Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl scale-110" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-purple-400/10 rounded-3xl blur-2xl scale-105" />
                
                {/* Main Interface */}
                <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 dark:border-gray-700/30 overflow-hidden">
                  {/* Header with Microscope Visual */}
                  <div className="bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 px-8 py-6 border-b border-gray-200/50 dark:border-gray-700/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <motion.div 
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg"
                          >
                            <BeakerIcon className="w-7 h-7 text-white" />
                          </motion.div>
                          <motion.div 
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center"
                          >
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </motion.div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            AI Microscopy Analysis
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            ANA-IFA Pattern Recognition
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <motion.div 
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="w-2 h-2 bg-green-400 rounded-full"
                        />
                        <span className="text-sm font-medium text-green-600 dark:text-green-400">
                          Live Analysis
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-6">
                    {/* Microscope View Simulation */}
                    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900/50 to-purple-900/50 rounded-2xl p-6 border border-gray-600/30 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
                      
                      {/* Simulated Cell Patterns */}
                      <div className="relative h-32 flex items-center justify-center">
                        <motion.div 
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 rounded-2xl"
                        >
                          {/* Cell nuclei simulation */}
                          {[...Array(12)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{
                                scale: [0.8, 1.2, 0.8],
                                opacity: [0.4, 0.8, 0.4]
                              }}
                              transition={{
                                duration: 3 + (i * 0.2),
                                repeat: Infinity,
                                delay: i * 0.3
                              }}
                              className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-sm"
                              style={{
                                left: `${15 + (i % 4) * 20}%`,
                                top: `${20 + Math.floor(i / 4) * 25}%`,
                                boxShadow: '0 0 8px rgba(34, 211, 238, 0.6)'
                              }}
                            />
                          ))}
                        </motion.div>
                        
                        <div className="relative z-10 text-center">
                          <motion.div 
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-cyan-100 font-bold text-lg mb-1"
                          >
                            Analyzing Patterns...
                          </motion.div>
                          <div className="text-gray-100 text-sm">
                            HEp-2 Cell Substrate
                          </div>
                        </div>
                      </div>
                      
                      {/* Detection Overlay */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-2"
                      >
                        <div className="flex items-center gap-2 text-xs text-cyan-400">
                          <MagnifyingGlassIcon className="w-4 h-4" />
                          <span>400x Magnification</span>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Real-time Processing Indicators */}
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-4 border border-blue-200/30 dark:border-blue-700/30"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <ChartBarIcon className="w-5 h-5 text-blue-600" />
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Pattern Detection
                          </span>
                        </div>
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.6, delay: 1 }}
                          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                        >
                          Homogeneous
                        </motion.div>
                        <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                          High Confidence
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 border border-purple-200/30 dark:border-purple-700/30"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <SparklesIcon className="w-5 h-5 text-purple-600" />
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            AI Score
                          </span>
                        </div>
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.6, delay: 1.2 }}
                          className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                        >
                          97.3%
                        </motion.div>
                        <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                          Positive Match
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Analysis Progress */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Analysis Progress
                        </span>
                        <motion.span 
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="text-sm font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                        >
                          28.7s elapsed
                        </motion.span>
                      </div>
                      <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '96%' }}
                          transition={{ duration: 4, ease: "easeOut", delay: 0.5 }}
                          className="bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-500 h-2 rounded-full shadow-sm"
                        />
                      </div>
                    </div>
                    
                    {/* Final Result */}
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 2 }}
                      className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-6 border border-green-200/50 dark:border-green-700/30 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5" />
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-3">
                          <motion.div 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                          >
                            <CheckCircleIcon className="w-4 h-4 text-white" />
                          </motion.div>
                          <span className="font-bold text-green-800 dark:text-green-300 text-lg">
                            Autoimmune Markers Detected
                          </span>
                        </div>
                        <div className="text-sm text-green-700 dark:text-green-400 space-y-1">
                          <p className="font-medium">Pattern: Homogeneous Nuclear</p>
                          <p>Titer: 1:320 (Significant)</p>
                          <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.5 }}
                            className="text-xs bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full inline-block mt-2"
                          >
                            Recommend: Further clinical correlation
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}