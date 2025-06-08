//Full solutions page (solutions/page.js)
'use client'

import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { 
  CpuChipIcon, 
  CloudIcon, 
  ChartBarIcon,
  ClockIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'

const solutions = [
  {
    title: "Digital Pathology Service",
    subtitle: "Immediate Revenue Stream",
    description: "Complete diagnostic service where we handle the entire process from sample collection to expert-signed reports.",
    features: [
      "Sample collection and processing",
      "AI-powered image analysis",
      "Expert pathologist validation",
      "Detailed diagnostic reports",
      "24-48 hour turnaround time"
    ],
    pricing: "₹3,600 per test (~$45 USD)",
    status: "Available Now",
    color: "blue"
  },
  {
    title: "SaaS Platform",
    subtitle: "After Regulatory Approval",
    description: "Cloud-based software solution that integrates directly into existing laboratory workflows and hospital systems.",
    features: [
      "Cloud or on-premise deployment",
      "API integration capabilities",
      "Real-time analysis dashboard",
      "Multi-user access controls",
      "Automated reporting system"
    ],
    pricing: "Subscription-based licensing",
    status: "Coming Soon",
    color: "purple"
  }
]

const workflow = [
  {
    step: 1,
    title: "Sample Collection",
    description: "Blood samples are collected and processed for serum extraction",
    icon: BeakerIcon
  },
  {
    step: 2,
    title: "Image Capture",
    description: "High-resolution microscopy images are captured using specialized equipment",
    icon: CpuChipIcon
  },
  {
    step: 3,
    title: "AI Analysis",
    description: "Our AI algorithms analyze cellular patterns and fluorescence intensity in 30 seconds",
    icon: ChartBarIcon
  },
  {
    step: 4,
    title: "Expert Validation",
    description: "Results are reviewed and validated by expert pathologists",
    icon: ShieldCheckIcon
  },
  {
    step: 5,
    title: "Report Generation",
    description: "Comprehensive diagnostic report with confidence scores and recommendations",
    icon: DocumentTextIcon
  }
]

const benefits = [
  {
    title: "5x Faster Processing",
    description: "Reduce diagnosis time from 20 minutes to 30 seconds",
    stat: "5x",
    color: "text-blue-600"
  },
  {
    title: "95% Accuracy Rate",
    description: "Achieve expert-level diagnostic accuracy",
    stat: "95%",
    color: "text-green-600"
  },
  {
    title: "200+ Samples/Day",
    description: "Process significantly more samples per pathologist",
    stat: "200+",
    color: "text-purple-600"
  },
  {
    title: "Early Detection",
    description: "Detect borderline cases often missed manually",
    stat: "Early",
    color: "text-orange-600"
  }
]

export default function Solutions() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Our <span className="text-gradient">Solutions</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered autoimmune disease detection solutions designed to meet 
              the diverse needs of healthcare providers, from immediate diagnostic services to 
              integrated software platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-hover bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {solution.title}
                    </h3>
                    <p className="text-medical-blue dark:text-blue-400 font-medium">
                      {solution.subtitle}
                    </p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    solution.status === 'Available Now' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}>
                    {solution.status}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {solution.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        solution.color === 'blue' ? 'bg-blue-500' : 'bg-purple-500'
                      }`}></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Pricing</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {solution.pricing}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our streamlined workflow ensures accurate, fast, and reliable autoimmune disease detection 
              from sample to diagnosis.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 dark:bg-gray-600 transform -translate-y-1/2"></div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
              {workflow.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative text-center"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 relative z-10">
                    <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-sm font-bold text-medical-blue mb-2">Step {step.step}</div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Key Benefits
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Transform your diagnostic capabilities with our AI-powered solution that delivers 
              unprecedented speed, accuracy, and efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`text-4xl font-bold ${benefit.color} mb-3`}>
                  {benefit.stat}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Transform Your Diagnostic Capabilities?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the revolution in autoimmune disease detection. Contact us today to learn 
                how our AI-powered solutions can benefit your practice or organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-primary">
                  Request Demo
                </a>
                <a href="/contact" className="btn-secondary">
                  Get Pricing
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

