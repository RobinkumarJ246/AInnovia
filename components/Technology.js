'use client'

import { motion } from 'framer-motion'
import { 
  CpuChipIcon, 
  CloudIcon, 
  ChartBarIcon,
  DocumentTextIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const techFeatures = [
  {
    icon: CpuChipIcon,
    title: "Advanced AI Algorithms",
    description: "Deep learning models trained on extensive ANA-IFA image datasets from Indian population, annotated by multiple expert pathologists."
  },
  {
    icon: CpuChipIcon,
    title: "ANA-IFA Analysis",
    description: "Indirect immunofluorescence analysis of antinuclear antibodies for accurate autoimmune disease pattern recognition."
  },
  {
    icon: ChartBarIcon,
    title: "Detailed Statistics",
    description: "Comprehensive reporting including cell counts, pattern statistics, confidence indices, and disease stage predictions."
  },
  {
    icon: CloudIcon,
    title: "Cloud & On-Premise",
    description: "Flexible deployment options with SaaS cloud solution or on-premise installation for maximum accessibility."
  },
  {
    icon: DocumentTextIcon,
    title: "Expert Validation",
    description: "All results are validated by expert pathologists ensuring clinical accuracy and regulatory compliance."
  },
  {
    icon: ShieldCheckIcon,
    title: "Regulatory Compliant",
    description: "Software as Medical Device (SaMD) designed to meet CDSCO and international regulatory standards."
  }
]

export default function Technology() {
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Cutting-Edge <span className="text-gradient">Technology</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our proprietary AI technology combines advanced machine learning with medical expertise 
            to deliver accurate, fast, and reliable autoimmune disease detection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <feature.icon className="h-8 w-8 text-medical-blue dark:text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  How Our AI Works
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Image Capture</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">High-resolution microscopy images are captured from patient samples</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">AI Analysis</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Advanced algorithms analyze cellular patterns and fluorescence intensity</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Expert Validation</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Results are validated by expert pathologists for clinical accuracy</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Detailed Report</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Comprehensive diagnostic report with confidence scores and recommendations</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Technical Specifications
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Processing Time</span>
                      <span className="font-medium text-gray-900 dark:text-white">30 seconds</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Accuracy Rate</span>
                      <span className="font-medium text-gray-900 dark:text-white">95%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Image Resolution</span>
                      <span className="font-medium text-gray-900 dark:text-white">High-res</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Deployment</span>
                      <span className="font-medium text-gray-900 dark:text-white">Cloud/On-premise</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Compliance</span>
                      <span className="font-medium text-gray-900 dark:text-white">SaMD/CDSCO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

