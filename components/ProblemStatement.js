'use client'

import { motion } from 'framer-motion'
import { 
  AlertTriangle, 
  Clock, 
  Users,
  Heart,
  TrendingUp,
  Globe,
  Activity
} from 'lucide-react'
import React from 'react'

const problems = [
  {
    icon: Users,
    title: "1 in 10 People Affected",
    description: "Autoimmune diseases affect around one in ten people globally, making it the third most common disease after cancer and heart disease.",
    stat: "10%",
    color: "from-red-500 to-pink-600",
    bgColor: "from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10",
    iconBg: "bg-red-100 dark:bg-red-900/20",
    gradient: "bg-gradient-to-r from-red-500/20 to-pink-600/20"
  },
  {
    icon: AlertTriangle,
    title: "80+ Disease Types",
    description: "Over 80 types of autoimmune diseases exist, with complex symptoms that are difficult to diagnose accurately.",
    stat: "80+",
    color: "from-orange-500 to-amber-600",
    bgColor: "from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10",
    iconBg: "bg-orange-100 dark:bg-orange-900/20",
    gradient: "bg-gradient-to-r from-orange-500/20 to-amber-600/20"
  },
  {
    icon: Clock,
    title: "~20 minutes",
    description: "Current manual diagnosis takes ~20 minutes per sample, with subjective and non-reproducible results.",
    stat: "20min",
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10",
    iconBg: "bg-yellow-100 dark:bg-yellow-900/20"
  },
  {
    icon: Heart,
    title: "Early Detection Critical",
    description: "Only early detection can save lives, but current methods often miss borderline cases in early stages.",
    stat: "Critical",
    color: "from-purple-500 to-indigo-600",
    bgColor: "from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10",
    iconBg: "bg-purple-100 dark:bg-purple-900/20",
    gradient: "bg-gradient-to-r from-purple-500/20 to-indigo-600/20"
  }
]

const covidStats = [
  {
    icon: TrendingUp,
    value: "45%",
    label: "Increase Post-COVID",
    description: "Significant rise in autoimmune cases",
    color: "from-orange-500 to-amber-500",
    bgColor: "from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10",
    iconBg: "bg-orange-100 dark:bg-orange-900/20"
  },
  {
    icon: Users,
    value: "75%",
    label: "Women Affected",
    description: "Higher prevalence in females",
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-50 to-rose-50 dark:from-pink-900/10 dark:to-rose-900/10",
    iconBg: "bg-pink-100 dark:bg-pink-900/20"
  },
  {
    icon: Globe,
    value: "Asia",
    label: "Highest Growth Rate",
    description: "Leading region in new cases",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10",
    iconBg: "bg-blue-100 dark:bg-blue-900/20"
  }
]

export default function ProblemStatement() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000000' fill-opacity='0.05'%3e%3cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 text-sm font-medium mb-6"
          >
            <AlertTriangle className="w-4 h-4 mr-2" />
            Healthcare Crisis Alert
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            The Growing Challenge of{' '}
            <span className="bg-gradient-to-r from-red-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Autoimmune Diseases
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-xl leading-8 text-gray-600 dark:text-gray-300 max-w-4xl mx-auto"
          >
            Autoimmune diseases have become significantly more prevalent after COVID-19, 
            yet healthcare channels are not available for these diseases in semi-urban and rural areas.
          </motion.p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`relative group bg-gradient-to-br ${problem.bgColor} backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 ${problem.gradient} rounded-3xl opacity-50 -z-10`} />
              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${problem.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
              
              <div className="flex items-start justify-between mb-6">
                <div className={`${problem.iconBg} p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                  <problem.icon className={`h-7 w-7 ${problem.color}`} />
                </div>
                <motion.span 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className={`text-3xl font-bold bg-gradient-to-r ${problem.color} bg-clip-text text-transparent`}
                >
                  {problem.stat}
                </motion.span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                {problem.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* COVID Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-red-500/5 via-orange-500/5 to-pink-500/5 dark:from-red-900/10 dark:via-orange-900/10 dark:to-pink-900/10 rounded-3xl p-10 border border-red-200/30 dark:border-red-800/30 backdrop-blur-sm"
        >
          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-red-400/10 to-orange-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-pink-400/10 to-red-400/10 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm font-semibold mb-6 shadow-lg"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                COVID-19 Impact Analysis
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Pandemic-Driven Health Crisis
              </h3>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Strong correlation with cancer and cardiovascular diseases. Long COVID has catalyzed 
                increased cases, with Asia witnessing the highest onset rates globally.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {covidStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="relative overflow-hidden bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 group-hover:bg-white/70 dark:group-hover:bg-gray-800/70 transition-all duration-300">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 ${stat.gradient} opacity-50 -z-10`} />
                    <div className="relative z-10">
                      <div className="flex flex-col items-center text-center">
                        <div className={`w-16 h-16 ${stat.iconBg} rounded-2xl flex items-center justify-center mb-4`}>
                          <stat.icon className={`w-8 h-8 ${stat.color.split(' ')[0].replace('from-', 'text-')}`} />
                        </div>
                        <h3 className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                          {stat.value}
                        </h3>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {stat.label}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}