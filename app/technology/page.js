'use client'

import { motion } from 'framer-motion'
import { 
  Cpu, 
  BarChart3,
  Cloud,
  Shield,
  Microscope,
  FileText,
  Clock,
  Zap,
  Brain,
  Eye,
  Database,
  Layers,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Activity,
  Settings,
  Lock,
  Download,
  Play,
  Phone
} from 'lucide-react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const techSpecs = [
  {
    category: "AI & Machine Learning",
    icon: Brain,
    color: "from-purple-600 to-pink-600",
    items: [
      "Deep learning neural networks",
      "Computer vision algorithms", 
      "Pattern recognition systems",
      "Automated feature extraction",
      "Ensemble learning methods"
    ]
  },
  {
    category: "Medical Imaging",
    icon: Microscope,
    color: "from-blue-600 to-cyan-600",
    items: [
      "High-resolution microscopy",
      "Fluorescence image analysis", 
      "ANA-IFA pattern detection",
      "Cellular morphology analysis",
      "Multi-channel imaging support"
    ]
  },
  {
    category: "Data & Analytics",
    icon: Database,
    color: "from-green-600 to-emerald-600",
    items: [
      "Country-specific data banking",
      "Expert pathologist annotations",
      "Statistical analysis tools", 
      "Confidence scoring algorithms",
      "Predictive modeling"
    ]
  },
  {
    category: "Platform & Deployment",
    icon: Cloud,
    color: "from-orange-600 to-red-600",
    items: [
      "Cloud-native architecture",
      "On-premise installation options",
      "RESTful API integration",
      "Real-time processing",
      "Scalable infrastructure"
    ]
  }
]

const workflow = [
  {
    step: 1,
    title: "Image Acquisition",
    description: "High-resolution microscopy images are captured from patient samples using specialized equipment",
    technical: "Resolution: 1024x1024 pixels minimum, Multiple fluorescence channels supported",
    icon: Eye,
    color: "from-blue-500 to-cyan-500"
  },
  {
    step: 2,
    title: "Preprocessing",
    description: "Images undergo quality assessment, normalization, and enhancement for optimal analysis",
    technical: "Noise reduction, Contrast enhancement, Standardization protocols",
    icon: Settings,
    color: "from-purple-500 to-pink-500"
  },
  {
    step: 3,
    title: "AI Analysis",
    description: "Advanced deep learning models analyze cellular patterns and fluorescence intensity",
    technical: "CNN-based architecture, Multi-scale feature extraction, Pattern classification",
    icon: Cpu,
    color: "from-green-500 to-emerald-500"
  },
  {
    step: 4,
    title: "Pattern Recognition",
    description: "AI identifies specific ANA patterns associated with different autoimmune diseases",
    technical: "80+ disease pattern recognition, Confidence scoring, Borderline detection",
    icon: Target,
    color: "from-orange-500 to-red-500"
  },
  {
    step: 5,
    title: "Validation",
    description: "Results are cross-validated with expert pathologist knowledge base",
    technical: "Expert consensus algorithms, Quality assurance protocols, Error detection",
    icon: Shield,
    color: "from-indigo-500 to-purple-500"
  },
  {
    step: 6,
    title: "Report Generation",
    description: "Comprehensive diagnostic report with detailed statistics and recommendations",
    technical: "Automated reporting, PDF generation, Integration with LIMS systems",
    icon: FileText,
    color: "from-teal-500 to-cyan-500"
  }
]

const performance = [
  {
    metric: "Processing Time",
    value: "30s",
    description: "From image upload to final report",
    improvement: "40x faster than manual",
    icon: Clock,
    color: "from-blue-600 to-cyan-600"
  },
  {
    metric: "Accuracy Rate", 
    value: "95%",
    description: "Concordance with expert pathologists",
    improvement: "Matches expert level",
    icon: Target,
    color: "from-green-600 to-emerald-600"
  },
  {
    metric: "Throughput",
    value: "200+",
    description: "Samples per day per pathologist",
    improvement: "5x increase in capacity",
    icon: Zap,
    color: "from-purple-600 to-pink-600"
  },
  {
    metric: "Detection",
    value: "Early",
    description: "Detects borderline cases",
    improvement: "Superior to manual",
    icon: Activity,
    color: "from-orange-600 to-red-600"
  }
]

const features = [
  {
    icon: Cloud,
    title: "Cloud & On-Premise",
    description: "Flexible deployment options to meet your infrastructure requirements and data security needs.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Regulatory Compliant", 
    description: "Software as Medical Device (SaMD) designed to meet CDSCO and international standards.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description: "Comprehensive statistics including cell counts, pattern analysis, and confidence scores.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Clock,
    title: "Real-time Processing",
    description: "Instant analysis and reporting for immediate clinical decision-making support.",
    color: "from-orange-500 to-red-500"
  }
]

export default function Technology() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
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
          className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
      </div>
      
      {/* Hero Section */}
      <Navbar />
      <section className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-gray-200/50 dark:border-gray-700/50"
              >
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Cutting-edge AI Technology
                </span>
              </motion.div>
              
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl leading-tight mb-8">
                <span className="block">Revolutionary</span>
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
                  AI Technology
                </span>
                <span className="block">for Healthcare</span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
              >
                Discover the cutting-edge AI technology that powers our revolutionary 
                autoimmune disease detection platform. Built on advanced machine learning 
                and decades of medical expertise.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <span className="relative flex items-center">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </span>
                </button>
                
                <button className="group inline-flex items-center px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white font-semibold rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white dark:hover:bg-gray-800">
                  <Phone className="mr-3 h-5 w-5 text-blue-600" />
                  Contact us
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our platform combines state-of-the-art AI algorithms with medical imaging expertise 
              to deliver unparalleled diagnostic accuracy and speed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {techSpecs.map((spec, index) => (
              <motion.div
                key={spec.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300" style={{backgroundImage: `linear-gradient(135deg, ${spec.color.replace('from-', '').replace('to-', ', ')})`}} />
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${spec.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                      <spec.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {spec.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {spec.items.map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * idx }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 group/item"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${spec.color} rounded-full transition-transform group-hover/item:scale-125`} />
                        <span className="text-gray-700 dark:text-gray-300 transition-colors group-hover/item:text-gray-900 dark:group-hover/item:text-white">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Processing Workflow */}
      <section className="relative py-24 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              AI Processing Workflow
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our sophisticated AI pipeline processes medical images through multiple stages 
              to ensure accurate and reliable diagnostic results.
            </p>
          </motion.div>

          <div className="space-y-12">
            {workflow.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 group"
                  >
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <div className={`text-sm font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-1`}>
                          Step {step.step}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className={`bg-gradient-to-r ${step.color.replace('-500', '-50')} dark:from-gray-700/50 dark:to-gray-600/50 rounded-2xl p-6 border border-gray-200/30 dark:border-gray-600/30`}>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                        <Settings className="w-5 h-5 mr-2" />
                        Technical Details
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        {step.technical}
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="flex-shrink-0">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-32 h-32 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-2xl`}
                  >
                    <span className="text-white text-3xl font-bold">{step.step}</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Performance Metrics
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our AI technology delivers exceptional performance across all key metrics, 
              setting new standards for autoimmune disease detection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {performance.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group text-center"
              >
                <div className={`bg-gradient-to-r ${metric.color} rounded-3xl p-8 text-white mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="relative mb-4"
                  >
                    <metric.icon className="w-8 h-8 mx-auto mb-4" />
                  </motion.div>
                  
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-2 relative"
                  >
                    {metric.value}
                  </motion.div>
                  
                  <div className="text-xl font-semibold opacity-90 relative">
                    {metric.metric}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {metric.description}
                </p>
                
                <div className="inline-flex items-center gap-2 text-sm bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4" />
                  {metric.improvement}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="relative py-24 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Platform Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built for healthcare professionals, our platform offers enterprise-grade features 
              with medical-grade security and compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl" />
            
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
              
              <div className="relative text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
                >
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-semibold">Ready to Transform Healthcare?</span>
                </motion.div>
                
                <h2 className="text-4xl font-bold mb-6">
                  Experience the Future of Medical Diagnostics
                </h2>
                
                <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
                  Ready to see our AI technology in action? Request a demo to experience 
                  how our platform can transform your diagnostic capabilities.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center justify-center">
                      Request Demo
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-2xl transition-all duration-300"
                  >
                    <span className="flex items-center justify-center">
                      <Layers className="mr-2 h-5 w-5" />
                      View Solutions
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
        <Footer />
    </main>
  )
}