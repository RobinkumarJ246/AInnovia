'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Globe, 
  BarChart3, 
  Target, 
  Users, 
  Zap, 
  Shield, 
  Activity,
  ArrowUpRight,
  MapPin,
  Calendar,
  DollarSign
} from 'lucide-react'

const marketStats = [
  {
    title: "Global Market Size",
    value: "$5.6B",
    growth: "$9.7B by 2030",
    cagr: "8.9% CAGR",
    description: "Autoimmune disease diagnostics market showing strong growth potential",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Asia-Pacific Market",
    value: "$1.6B",
    growth: "$3.2 by 2030",
    cagr: "Fastest growing",
    description: "Asis-Pacific region leading in market with high demand and early adoption",
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Strategic Target",
    value: "India First",
    growth: "Global Scale",
    cagr: "Proven Model",
    description: "Strategic market entry through India before global expansion rollout",
    icon: Target,
    gradient: "from-purple-500 to-pink-500"
  }
]

const regions = [
  { 
    name: "Asia-Pacific", 
    growth: "12.4%", 
    value: "$3.2B (2030)",
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
    darkBgColor: "from-blue-900/20 to-blue-800/20"
  },
  { 
    name: "North America", 
    growth: "7.5%", 
    value: "$2.8B (2030)",
    color: "from-green-500 to-green-600",
    bgColor: "from-green-50 to-green-100",
    darkBgColor: "from-green-900/20 to-green-800/20"
  },
  { 
    name: "Europe", 
    growth: "8.6%", 
    value: "$2.4B (2030)",
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-50 to-purple-100",
    darkBgColor: "from-purple-900/20 to-purple-800/20"
  },
  { 
    name: "Rest of World", 
    growth: "9.2%", 
    value: "$1.4B (2030)",
    color: "from-orange-500 to-orange-600",
    bgColor: "from-orange-50 to-orange-100",
    darkBgColor: "from-orange-900/20 to-orange-800/20"
  }
]

const marketDrivers = [
  {
    title: "Post-COVID Impact",
    description: "60% increase in autoimmune cases following pandemic",
    icon: Activity,
    stat: "+60%"
  },
  {
    title: "Aging Demographics",
    description: "Growing elderly population with 3x higher disease prevalence",
    icon: Users,
    stat: "3x Higher"
  },
  {
    title: "AI Healthcare Adoption",
    description: "Rapid integration of AI technologies in diagnostic workflows",
    icon: Zap,
    stat: "85% Growth"
  },
  {
    title: "Preventive Healthcare",
    description: "Shift towards early detection and preventive care models",
    icon: Shield,
    stat: "70% Focus"
  }
]

export default function MarketOpportunity() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-green-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30 text-blue-800 dark:text-blue-200 text-sm font-semibold shadow-lg mb-6"
          >
            <BarChart3 className="w-5 h-5 mr-2" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Market Analysis
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            <span className="block">Massive Market</span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent block">
              Opportunity
            </span>
          </h2>
          <p className="text-xl leading-8 text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            The autoimmune disease diagnostics market is experiencing unprecedented growth, 
            driven by increasing disease prevalence, technological advancement, and the urgent need for early detection.
          </p>
        </motion.div>

        {/* Market Stats Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-20">
          {marketStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30 overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}>
                    {stat.value}
                  </div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {stat.title}
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <ArrowUpRight className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                      {stat.growth}
                    </span>
                  </div>
                  <div className={`text-xs bg-gradient-to-r ${stat.gradient} text-white px-4 py-2 rounded-full inline-block mb-4 font-semibold`}>
                    {stat.cagr}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Regional Analysis & Market Drivers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Regional Growth */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/30"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Regional Growth Rates
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Market performance by geography
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {regions.map((region, index) => (
                <motion.div 
                  key={region.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative bg-gradient-to-r ${region.bgColor} dark:${region.darkBgColor} rounded-2xl p-5 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-4 h-4 bg-gradient-to-r ${region.color} rounded-full shadow-sm`} />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {region.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Market Value: {region.value}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg text-gray-900 dark:text-white">
                        {region.growth}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Annual Growth
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Market Drivers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/30 overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Market Drivers
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    Key factors accelerating market growth and adoption
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {marketDrivers.map((driver, index) => {
                  const gradientColors = [
                    "from-blue-500/10 to-blue-600/10",
                    "from-purple-500/10 to-purple-600/10",
                    "from-teal-500/10 to-teal-600/10",
                    "from-amber-500/10 to-amber-600/10"
                  ][index % 4];
                  
                  const iconColors = [
                    "text-blue-500",
                    "text-purple-500",
                    "text-teal-500",
                    "text-amber-500"
                  ][index % 4];
                  
                  return (
                    <motion.div 
                      key={driver.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true, margin: "-30px" }}
                      className={`group relative p-4 rounded-2xl bg-gradient-to-br ${gradientColors} hover:shadow-md transition-all duration-300 border border-white/30 dark:border-gray-700/30`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-white/90 dark:bg-gray-800/90 shadow-sm ${iconColors} group-hover:scale-110 transition-transform duration-300`}>
                          <driver.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="font-bold text-gray-900 dark:text-white text-base md:text-lg">
                              {driver.title}
                            </h4>
                            <span className="px-3 py-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                              {driver.stat}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            {driver.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Strategic Approach
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%23ffffff' fill-opacity='0.1'%3e%3cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-16c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm16 16c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-16c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z'/%3e%3c/g%3e%3c/svg%3e")`
              }} />
            </div>

            <div className="relative text-center mb-12">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-6"
              >
                <Globe className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Our Strategic Roadmap
              </h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Starting with India's rapidly growing healthcare market, we plan to expand globally, 
                targeting the $7.2B opportunity with our revolutionary AI diagnostic solution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  phase: "Phase 1",
                  title: "India Market Entry",
                  description: "Establish presence in world's largest democracy",
                  icon: MapPin,
                  timeline: "2024-2025"
                },
                {
                  phase: "Phase 2",
                  title: "Asia-Pacific Scale",
                  description: "Expand to high-growth APAC markets",
                  icon: TrendingUp,
                  timeline: "2025-2026"
                },
                {
                  phase: "Phase 3",
                  title: "Global Deployment",
                  description: "Worldwide market penetration",
                  icon: Globe,
                  timeline: "2026+"
                }
              ].map((phase, index) => {
                const IconComponent = phase.icon
                return (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold mb-2">{phase.phase}</div>
                      <div className="text-lg font-semibold mb-2">{phase.title}</div>
                      <div className="text-sm opacity-80 mb-3">{phase.description}</div>
                      <div className="inline-flex items-center gap-2 text-xs bg-white/20 px-3 py-1 rounded-full">
                        <Calendar className="w-3 h-3" />
                        {phase.timeline}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
         */}
      </div>
    </section>
  )
}