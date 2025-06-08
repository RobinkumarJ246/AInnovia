'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import toast from 'react-hot-toast'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  LightBulbIcon,
  CurrencyDollarIcon,
  PencilSquareIcon
} from '@heroicons/react/24/outline'

const contactInfo = [
  {
    icon: EnvelopeIcon,
    title: "Email",
    details: ["ainnovia24@gmail.com", "sanchita@ainnovia.com"],
    description: "Send us an email anytime",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    borderColor: "border-blue-200/50 dark:border-blue-700/30",
    labelBg: "bg-blue-100/70 dark:bg-blue-800/30"
  },
  {
    icon: PhoneIcon,
    title: "Phone",
    details: ["+91-9836967368", "+65-83162535"],
    description: "Call us during business hours",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    borderColor: "border-green-200/50 dark:border-green-700/30",
    labelBg: "bg-green-100/70 dark:bg-green-800/30"
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "AI Chatbot",
    details: ["Coming Soon", "24/7 Support"],
    description: "Instant responses powered by AI",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
    borderColor: "border-orange-200/50 dark:border-orange-700/30",
    labelBg: "bg-orange-100/70 dark:bg-orange-800/30"
  },
  {
    icon: MapPinIcon,
    title: "Location",
    details: ["India", "Singapore"],
    description: "Our primary markets",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    borderColor: "border-purple-200/50 dark:border-purple-700/30",
    labelBg: "bg-purple-100/70 dark:bg-purple-800/30"
  }
]

const inquiryTypes = [
  {
    icon: UserGroupIcon,
    title: "Healthcare Providers",
    description: "Interested in implementing our AI solution in your practice? Let's discuss how we can improve your diagnostic capabilities.",
    bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    borderColor: "border-blue-200/50 dark:border-blue-700/30",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: LightBulbIcon,
    title: "Researchers",
    description: "Collaborate with us on advancing autoimmune disease research and AI-powered diagnostic technologies.",
    bgColor: "from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20",
    borderColor: "border-purple-200/50 dark:border-purple-700/30",
    iconColor: "text-purple-600 dark:text-purple-400"
  },
  {
    icon: CurrencyDollarIcon,
    title: "Investors",
    description: "Join us in revolutionizing healthcare. Learn about our investment opportunities and growth potential.",
    bgColor: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    borderColor: "border-green-200/50 dark:border-green-700/30",
    iconColor: "text-green-600 dark:text-green-400"
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Here you would typically make an API call to your backend
      // Simulating API call with delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success('Thank you for your message! We\'ll get back to you soon.')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        organization: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      })
    } catch (error) {
      toast.error('Something went wrong. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
      {/* Toast notifications container */}
      <div className="fixed top-4 right-4 z-50">
        <div className="space-y-2" />
      </div>
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        {/* Background Effects */}
        <div className="absolute inset-0">
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

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [-20, -60, -20],
                x: [-10, 10, -10],
                rotate: [0, 360, 0]
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5
              }}
              className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20`}
              style={{
                left: `${15 + (i * 10)}%`,
                top: `${20 + (i * 8)}%`
              }}
            />
          ))}
        </div>
        
        <div className="relative min-h-[70vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200/50 dark:border-gray-700/50 mb-8"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Let's Start a Conversation
                </span>
              </motion.div>
              
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl leading-tight mb-6">
                <span className="block">Get in</span>
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
                  Touch
                </span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              >
                Ready to revolutionize autoimmune disease detection? Let's discuss how AInnovia 
                can transform your healthcare practice or research.
              </motion.p>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
              >
                {[
                  { value: "24h", label: "Response Time", color: "from-blue-600 to-cyan-600" },
                  { value: "95%", label: "Client Satisfaction", color: "from-green-600 to-emerald-600" },
                  { value: "50+", label: "Healthcare Partners", color: "from-purple-600 to-pink-600" }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="text-center group"
                  >
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Info */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000000' fill-opacity='0.1'%3e%3cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`
            }} 
          />
        </div>
        
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Multiple Ways to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose the most convenient way to reach out to our team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className={`group relative bg-gradient-to-br ${info.bgColor} rounded-2xl p-6 border ${info.borderColor} hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden`}
              >
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className={`inline-flex p-3 bg-gradient-to-r ${info.color} rounded-2xl shadow-lg mb-4`}>
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {info.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, idx) => (
                      <div 
                        key={idx}
                        className={`text-gray-700 dark:text-gray-300 font-semibold text-sm ${info.labelBg} px-3 py-1 rounded-full inline-block mr-2`}
                      >
                        {detail}
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {info.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            {/* Left Side - Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-5 mb-12 lg:mb-0"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Send us a <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Message</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Whether you're a healthcare provider, researcher, potential partner, 
                or simply curious about our AI-driven solutions, we'd love to hear from you. 
                Fill out the form and we'll get back to you within 24-48 hours.
              </p>
              
              <div className="space-y-6">
                {inquiryTypes.map((type, index) => (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className={`bg-gradient-to-br ${type.bgColor} rounded-2xl p-6 border ${type.borderColor} group cursor-pointer transition-all duration-300`}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`flex-shrink-0 p-2 bg-white/50 dark:bg-gray-800/50 rounded-xl`}
                      >
                        <type.icon className={`w-6 h-6 ${type.iconColor}`} />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                          {type.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Enhanced Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 dark:border-gray-700/30 p-4 sm:p-6 lg:p-8 overflow-hidden">
                {/* Form glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl" />
                
                <div className="relative">
                  {/* Form Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg mb-4">
                      <PencilSquareIcon className="w-6 h-6 text-white" />
                      <span className="ml-2 text-white font-bold">Quick form</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Start Your Journey
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Let's discuss how we can help transform your practice
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        className="group"
                      >
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 group-hover:border-purple-300 dark:group-hover:border-purple-700"
                          placeholder="Enter your full name"
                        />
                      </motion.div>
                      
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        className="group"
                      >
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 group-hover:border-purple-300 dark:group-hover:border-purple-700"
                          placeholder="your@email.com"
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        className="group"
                      >
                        <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Organization
                        </label>
                        <input
                          type="text"
                          name="organization"
                          id="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 group-hover:border-purple-300 dark:group-hover:border-purple-700"
                          placeholder="Your organization"
                        />
                      </motion.div>
                      
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        className="group"
                      >
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 group-hover:border-purple-300 dark:group-hover:border-purple-700"
                          placeholder="+1 (555) 123-4567"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="group"
                    >
                      <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Inquiry Type
                      </label>
                      <select
                        name="inquiryType"
                        id="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white transition-all duration-300 group-hover:border-purple-300 dark:group-hover:border-purple-700"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="healthcare">Healthcare Provider</option>
                        <option value="research">Research Collaboration</option>
                        <option value="investment">Investment Opportunity</option>
                        <option value="partnership">Partnership</option>
                        <option value="media">Media & Press</option>
                        <option value="curious">Just Curious</option>
                      </select>
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="group"
                    >
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 group-hover:border-purple-300 dark:group-hover:border-purple-700"
                        placeholder="Brief subject of your inquiry"
                      />
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="group"
                    >
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 group-hover:border-purple-300 dark:group-hover:border-purple-700 resize-none"
                        placeholder="Tell us more about your inquiry and how we can help..."
                      />
                    </motion.div>

                    {/* reCAPTCHA */}
                    <div className="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative flex items-center">
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                            />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </span>
                    </motion.button>
                  </form>

                  {/* Success/Error Messages */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 text-center"
                  >
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 dark:text-green-400" />
                      <span>We typically respond within 24-48 hours</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
          />
        </div>

        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex p-4 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-3xl mb-8">
              <SparklesIcon className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-6 sm:text-5xl">
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Transform</span> Healthcare?
            </h2>
            
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join the revolution in autoimmune disease detection. Let's discuss how AInnovia 
              can enhance your diagnostic capabilities and improve patient outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center px-8 py-4 bg-white text-purple-900 font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                Schedule a Demo
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Download Brochure
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              {[
                { icon: UserGroupIcon, text: "Trusted by Healthcare Leaders" },
                { icon: CheckCircleIcon, text: "ISO 27001 Certified" },
                { icon: SparklesIcon, text: "Award-Winning Technology" }
              ].map((item, index) => (
                <motion.div 
                  key={item.text}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-3 group-hover:bg-white/30 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-purple-100 font-medium">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}