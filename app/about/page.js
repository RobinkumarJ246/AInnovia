'use client'

import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { 
  HeartIcon, 
  GlobeAltIcon, 
  LightBulbIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  TrophyIcon
} from '@heroicons/react/24/outline'

const values = [
  {
    icon: HeartIcon,
    title: "Patient-Centric",
    description: "Every decision we make is guided by our commitment to improving patient outcomes and saving lives through early detection."
  },
  {
    icon: LightBulbIcon,
    title: "Innovation",
    description: "We continuously push the boundaries of AI and medical technology to create breakthrough solutions for healthcare challenges."
  },
  {
    icon: ShieldCheckIcon,
    title: "Accuracy",
    description: "We maintain the highest standards of diagnostic accuracy, ensuring reliable results that healthcare professionals can trust."
  },
  {
    icon: GlobeAltIcon,
    title: "Accessibility",
    description: "We believe healthcare should be accessible to everyone, regardless of geographic location or economic status."
  }
]

const milestones = [
  {
    year: "2023",
    title: "Company Formation",
    description: "AInnovia was founded with a mission to democratize autoimmune disease detection"
  },
  {
    year: "2024",
    title: "Product Prototype",
    description: "Developed AI-powered prototype achieving 95% concordance with expert pathologists"
  },
  {
    year: "2024",
    title: "Data Banking",
    description: "Built comprehensive ANA-IFA image database with expert annotations"
  },
  {
    year: "2025",
    title: "Market Ready",
    description: "Preparing for regulatory approval and commercial deployment"
  }
]

export default function About() {
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
              About <span className="text-gradient">AInnovia</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We are pioneering the future of autoimmune disease detection through artificial intelligence, 
              making accurate diagnosis accessible to everyone, everywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                To democratize access to AI-powered autoimmune disease diagnostic tools across the globe, 
                enabling early detection that saves lives and improves patient outcomes.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Autoimmune diseases affect 1 in 10 people worldwide and have become significantly more 
                prevalent after COVID-19. Yet, healthcare channels for these diseases are not available 
                in semi-urban and rural areas, creating a critical gap in healthcare access.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Our Vision</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  A world where autoimmune diseases are detected early and accurately, 
                  regardless of geographic location or economic status, through the power of AI.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-10 lg:mt-0"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <UserGroupIcon className="h-8 w-8 text-medical-blue mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">1 in 10</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">People Affected</div>
                </div>
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <TrophyIcon className="h-8 w-8 text-medical-blue mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">3rd</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Most Common Disease</div>
                </div>
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <ShieldCheckIcon className="h-8 w-8 text-medical-blue mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">95%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">AI Accuracy</div>
                </div>
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <HeartIcon className="h-8 w-8 text-medical-blue mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">30s</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Diagnosis Time</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These values guide everything we do, from product development to patient care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-hover bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <value.icon className="h-8 w-8 text-medical-blue dark:text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From inception to market-ready solution, here's how we're revolutionizing autoimmune disease detection.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                      <div className="text-medical-blue font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-medical-blue rounded-full border-4 border-white dark:border-gray-900"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

