'use client'

import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { 
  AcademicCapIcon, 
  BeakerIcon, 
  BriefcaseIcon, 
  ChartBarIcon,
  SparklesIcon,
  GlobeAltIcon,
  UserGroupIcon,
  LightBulbIcon,
  ArrowRightIcon,
  HeartIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

const teamMembers = [
  {
    name: "Dr. Sanchita Mukherjee",
    role: "Chief Operating Officer (COO)",
    education: "PhD",
    expertise: "Computational Biophysicist and AI expert",
    description: "Currently with the team as COO, developing our unique databank and AI platform.",
    image: '/sachita.jpg',
    specialties: ["AI/ML Algorithms", "Computational Biology", "Data Science"],
    achievements: "Led development of 3 AI diagnostic platforms",
    linkedin: "#",
    email: "sanchita@ainnovia.ai"
  },
  {
    name: "Dr. Arpita Ghosh Mitra",
    role: "Research & Operations",
    education: "PhD, Harvard Alumni",
    expertise: "Immunologist, autoimmunity and organ transplant expert",
    description: "Currently with the team to head research and IFA-image annotation.",
    image: "/arpita.jpg",
    specialties: ["Immunology", "Autoimmune Diseases", "Clinical Research"],
    achievements: "Published 25+ research papers in top-tier journals",
    linkedin: "#",
    email: "arpita@ainnovia.ai"
  },
  {
    name: "Dr. Sudipta Roy",
    role: "Research & Operations",
    education: "PhD, MD",
    expertise: "Pioneer in immunopathology, autoimmune disease diagnostics and rheumatology",
    description: "Leading expert in autoimmune disease diagnostics with extensive clinical experience.",
    image: "/sudipta.jpg",
    specialties: ["Immunopathology", "Rheumatology", "Clinical Diagnostics"],
    achievements: "30+ years clinical experience, 100+ publications",
    linkedin: "#",
    email: "sudipta@ainnovia.ai"
  },
  {
    name: "Dr. Saikat Barik",
    role: "Dr. Barik",
    education: "MD",
    expertise: "Rheumatologist and clinical immunologist",
    description: "Expert in immunology and autoimmune diseases with extensive clinical research experience.",
    image: "/saikat.jpg",
    specialties: ["Immunology", "Autoimmune Diseases", "Clinical Research"],
    achievements: "Built partnerships with several healthcare institutions",
    linkedin: "#",
    email: "saikat@ainnovia.ai"
  }
]

const advisors = [
  {
    name: "Dr. Devanathan Raghunathan",
    role: "Finance & Strategy",
    expertise: "Corporate Finance, HealthTech, MedTech",
    description: "A Biophysicist with experience in Corporate Finance, HealthTech, MedTech.",
    initials: "DR"
  },
  {
    name: "Dr. Shounak Ghosh",
    role: "Rheumatologist and Clinical Immunologist",
    expertise: "Clinical Medicine",
    description: "Leading clinician with expertise in autoimmune disease treatment and research.",
    initials: "SG"
  },
  {
    name: "Dr. Goutam Dalapati",
    role: "Expert in healthcare and technology",
    expertise: "Healthcare Technology",
    description: "Professional with expertise in healthcare technology and innovation.",
    initials: "GD",
    linkedin: "https://www.linkedin.com/in/goutam-kumar-dalapati-4416a3170/"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function Team() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
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
        </div>

        <div className="relative z-10 container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 dark:border-gray-700/30 shadow-lg mb-8"
            >
              <UserGroupIcon className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Meet Our World-Class Team
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
              The <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Minds</span> Behind
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Innovation</span>
            </h1>
            {/* Enhanced Team Impact Stats */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-20 h-20 bg-white/20 rounded-2xl mx-auto mb-6 flex items-center justify-center backdrop-blur-sm"
                  >
                    <SparklesIcon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Collective Impact</h2>
                  <p className="text-xl opacity-90 max-w-2xl mx-auto">
                    Together, we're building the future of healthcare diagnostics
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { value: "4", label: "Core Team Members", description: "Expert professionals" },
                    { value: "3", label: "Advisory Board", description: "Industry leaders" },
                    { value: "80+", label: "Years Combined Experience", description: "Decades of expertise" },
                    { value: "3", label: "Countries Represented", description: "Global perspective" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center group"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300"
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-lg font-semibold opacity-90 mb-1">
                        {stat.label}
                      </div>
                      <div className="text-sm opacity-70">
                        {stat.description}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Core Team */}
      <section className="section-padding bg-white dark:bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-900/10" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full mb-6">
              <HeartIcon className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                Core Team
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our leadership team brings together decades of experience in AI, medical research, 
              and business development to drive innovation in healthcare diagnostics.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Card Background with Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 group-hover:border-purple-200 dark:group-hover:border-purple-700 overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-y-16 translate-x-16 transition-transform duration-500 group-hover:scale-150"></div>
                  
                  <div className="relative z-10">
                    {/* Profile Avatar */}
                    <div className="text-center mb-6">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="relative inline-block"
                      >
                        <div className="w-28 h-28 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to initials if image fails to load
                              e.target.onerror = null;
                              e.target.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='112' height='112' viewBox='0 0 100 100'><rect width='100%' height='100%' fill='%239C92AC'/><text x='50%' y='55%' font-size='40' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-weight='bold'>${member.name.split(' ').map(n => n[0]).join('')}</text></svg>`;
                            }}
                          />
                        </div>
                        {/* Status Indicator */}
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        </div>
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                        {member.role}
                      </p>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <AcademicCapIcon className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {member.education}
                        </span>
                      </div>
                    </div>
                    
                    {/* Expertise & Specialties */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 flex items-center gap-2">
                          <BeakerIcon className="w-4 h-4 text-purple-600" />
                          Expertise
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {member.expertise}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 flex items-center gap-2">
                          <SparklesIcon className="w-4 h-4 text-pink-600" />
                          Specialties
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full font-medium border border-purple-200 dark:border-purple-700">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 flex items-center gap-2">
                          <ChartBarIcon className="w-4 h-4 text-blue-600" />
                          Key Achievement
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {member.achievements}
                        </p>
                      </div>
                    </div>
                    
                    {/* Contact Actions */}
                    <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        Connect
                      </a>
                      <a 
                        href={`mailto:${member.email}`} 
                        className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <EnvelopeIcon className="w-4 h-4" />
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Advisory Board */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-purple-50/50 to-pink-50/50 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-4 py-2 rounded-full mb-6">
              <LightBulbIcon className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                Advisory Board
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Strategic <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Guidance</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our distinguished advisory board provides strategic guidance and industry expertise 
              to help us navigate the complex healthcare and technology landscape.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:border-purple-200 dark:group-hover:border-purple-700 relative overflow-hidden">
                  {/* Decorative Background */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-4">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg"
                      >
                        <span className="text-white text-2xl font-bold">
                          {advisor.initials}
                        </span>
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {advisor.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                        {advisor.role}
                      </p>
                      <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-xs font-semibold border border-purple-200 dark:border-purple-700">
                        {advisor.expertise}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm text-center leading-relaxed">
                      {advisor.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
      </main>
  )
}