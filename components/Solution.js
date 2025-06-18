'use client'

import { motion } from 'framer-motion'
import { 
  Zap, 
  CheckCircle, 
  Clock,
  BarChart3,
  Cpu,
  Globe,
  Target,
  TrendingUp,
  Shield,
  Sparkles
} from 'lucide-react'

const solutions = [
  {
    icon: Zap,
    title: "30 Second Analysis",
    description: "Reduce diagnosis time from 20 minutes to just 30 seconds with AI-powered image analysis.",
    benefit: "40x Faster",
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10",
    iconBg: "bg-yellow-100 dark:bg-yellow-900/20"
  },
  {
    icon: CheckCircle,
    title: "95% Accuracy",
    description: "Achieve 95% concordance with expert pathologists through advanced AI algorithms.",
    benefit: "Expert Level",
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10",
    iconBg: "bg-green-100 dark:bg-green-900/20"
  },
  {
    icon: BarChart3,
    title: "Objective Results",
    description: "Eliminate subjective interpretation with quantitative, reproducible diagnostic reports.",
    benefit: "Consistent",
    color: "from-blue-500 to-cyan-600",
    bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10",
    iconBg: "bg-blue-100 dark:bg-blue-900/20"
  },
  {
    icon: Cpu,
    title: "AI-Powered Detection",
    description: "Advanced machine learning models trained on extensive ANA-IFA image datasets.",
    benefit: "Intelligent",
    color: "from-purple-500 to-indigo-600",
    bgColor: "from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10",
    iconBg: "bg-purple-100 dark:bg-purple-900/20"
  },
  {
    icon: Target,
    title: "Early Stage Detection",
    description: "Detect borderline cases that are often missed by traditional manual methods.",
    benefit: "Life-Saving",
    color: "from-red-500 to-pink-600",
    bgColor: "from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10",
    iconBg: "bg-red-100 dark:bg-red-900/20"
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Cloud-based SaaS solution accessible from anywhere, democratizing healthcare.",
    benefit: "Universal",
    color: "from-teal-500 to-green-600",
    bgColor: "from-teal-50 to-green-50 dark:from-teal-900/10 dark:to-green-900/10",
    iconBg: "bg-teal-100 dark:bg-teal-900/20"
  }
]

const comparisonMetrics = [
  {
    icon: Clock,
    traditional: "20 minutes",
    aiPowered: "30 seconds",
    improvement: "40x faster",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: BarChart3,
    traditional: "40 samples/day",
    aiPowered: "200+ samples/day",
    improvement: "5x throughput",
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: Shield,
    traditional: "Subjective",
    aiPowered: "95% accuracy",
    improvement: "Objective results",
    color: "from-green-500 to-teal-500"
  }
]

export default function Solution() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%23000000' fill-opacity='0.03'%3e%3cpath d='M20 20.5V18h-.5v2.5H17v.5h2.5V23h.5v-2.5H23v-.5h-2.5zM0 0h20v20H0V0zm22 22h20v20H22V22z'/%3e%3c/g%3e%3c/svg%3e")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold mb-8 shadow-lg"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Revolutionary Technology
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              AI-Powered Solution
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-xl leading-8 text-gray-600 dark:text-gray-300 max-w-4xl mx-auto"
          >
            AInnovia revolutionizes autoimmune disease diagnosis with fast, objective, and efficient 
            AI-powered reporting that can infer diseases in less than 30 seconds.
          </motion.p>
        </motion.div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`relative group bg-gradient-to-br ${solution.bgColor} backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${solution.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />
              
              <div className="flex items-start justify-between mb-6">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`${solution.iconBg} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <solution.icon className={`h-8 w-8 ${solution.color}`} />
                </motion.div>
                <motion.span 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className={`text-xs font-bold bg-gradient-to-r ${solution.color} text-white px-4 py-2 rounded-full shadow-lg`}
                >
                  {solution.benefit}
                </motion.span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                {solution.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {solution.description}
              </p>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${solution.color} opacity-5 rounded-bl-3xl rounded-tr-3xl`} />
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl p-10 border border-white/20 dark:border-gray-700/30 shadow-2xl"
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl" />
          <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-semibold mb-6 shadow-lg"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Performance Comparison
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Revolutionary Efficiency Gains
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See how AInnovia transforms diagnostic workflows with unprecedented speed and accuracy
              </p>
            </div>

            {/* Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {comparisonMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/50 dark:bg-gray-700/50 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-600/20"
                >
                  <div className="flex flex-col items-center mb-4">
                    <div className={`bg-gradient-to-br ${metric.color} p-3 rounded-xl text-white mb-3`}>
                      <metric.icon className="w-6 h-6" />
                    </div>
                    <span className={`text-sm font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent text-center`}>
                      {metric.improvement}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <span className="text-xs text-gray-600 dark:text-gray-400">Expert pathologist only</span>
                      <span className="font-semibold text-red-600 dark:text-red-400 text-sm">{metric.traditional}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <span className="text-xs text-gray-600 dark:text-gray-400">Expert pathologist + AInnovia</span>
                      <span className="font-semibold text-green-600 dark:text-green-400 text-sm">{metric.aiPowered}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-200/30 dark:border-blue-700/30"
            >
              <h4 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
                Impact on Healthcare Workflow
              </h4>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                  >
                    5x
                  </motion.div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Faster Processing</div>
                </div>
                
                <div className="text-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2"
                  >
                    95%
                  </motion.div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy Rate</div>
                </div>
                
                <div className="text-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2"
                  >
                    200+
                  </motion.div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Samples/Day</div>
                </div>
                
                <div className="text-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2"
                  >
                    24/7
                  </motion.div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Availability</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}