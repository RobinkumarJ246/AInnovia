'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
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
  EnvelopeIcon,
  XMarkIcon,
  ExclamationTriangleIcon,
  CheckIcon
} from '@heroicons/react/24/outline'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

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
    email: "sanchita@ainnovia.ai",
    social: {
      linkedin: "https://linkedin.com/in/sanchita-mukherjee",
      twitter: null,
      instagram: null,
      facebook: null
    }
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
    email: "sudipta@ainnovia.ai",
    social: {
      linkedin: "https://linkedin.com/in/sudipta-roy-md",
      twitter: null,
      instagram: null,
      facebook: "https://facebook.com/sudipta.roy.research"
    }
  },
  {
    name: "Dr. Saikat Barik",
    role: "Dr. Barik",
    education: "MD",
    expertise: "Rheumatologist and clinical immunologist",
    description: "Expert in immunology and autoimmune diseases with extensive clinical research experience.",
    image: "/barik.png",
    specialties: ["Immunology", "Autoimmune Diseases", "Clinical Research"],
    achievements: "Built partnerships with several healthcare institutions",
    email: "saikat@ainnovia.ai",
    social: {
      linkedin: "https://linkedin.com/in/saikat-barik",
      twitter: null,
      instagram: "https://instagram.com/dr.saikat.barik",
      facebook: null
    }
  }
]

const advisors = [
  {
    name: "Dr. Devanathan Raghunathan",
    role: "Finance & Strategy",
    expertise: "Corporate Finance, HealthTech, MedTech",
    description: "A Biophysicist with experience in Corporate Finance, HealthTech, MedTech.",
    initials: "DR",
    email: "devanathan@ainnovia.ai",
    social: {
      linkedin: "https://linkedin.com/in/devanathan-raghunathan",
      twitter: null,
      instagram: null,
      facebook: null
    }
  },
  {
    name: "Dr. Shounak Ghosh",
    role: "Rheumatologist and Clinical Immunologist",
    expertise: "Clinical Medicine",
    description: "Leading clinician with expertise in autoimmune disease treatment and research.",
    initials: "SG",
    email: "shounak@ainnovia.ai",
    social: {
      linkedin: "https://linkedin.com/in/shounak-ghosh",
      twitter: null,
      instagram: null,
      facebook: "https://facebook.com/shounak.ghosh.clinic"
    }
  },
  {
    name: "Dr. Goutam Dalapati",
    role: "Expert in healthcare and technology",
    expertise: "Healthcare Technology",
    description: "Professional with expertise in healthcare technology and innovation.",
    initials: "GD",
    email: "goutam@ainnovia.ai",
    social: {
      linkedin: "https://www.linkedin.com/in/goutam-kumar-dalapati-4416a3170/",
      twitter: null,
      instagram: null,
      facebook: null
    }
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

// Social Media Icons Components
const LinkedInIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)

const TwitterIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.017 0C8.396 0 7.929.013 6.71.072 5.493.131 4.679.333 3.982.63c-.723.31-1.262.735-1.85 1.323C1.544 2.541 1.119 3.08.809 3.803c-.297.697-.499 1.511-.558 2.728C.192 7.75.179 8.217.179 11.838s.013 4.088.072 5.307c.059 1.217.261 2.031.558 2.728.31.723.735 1.262 1.323 1.85.588.588 1.127 1.013 1.85 1.323.697.297 1.511.499 2.728.558 1.219.059 1.686.072 5.307.072s4.088-.013 5.307-.072c1.217-.059 2.031-.261 2.728-.558.723-.31 1.262-.735 1.85-1.323.588-.588 1.013-1.127 1.323-1.85.297-.697.499-1.511.558-2.728.059-1.219.072-1.686.072-5.307s-.013-4.088-.072-5.307c-.059-1.217-.261-2.031-.558-2.728-.31-.723-.735-1.262-1.323-1.85C19.229 1.544 18.69 1.119 17.967.809c-.697-.297-1.511-.499-2.728-.558C14.02.192 13.553.179 11.932.179zm0 2.137c3.585 0 4.01.014 5.425.072 1.308.06 2.018.282 2.49.468.626.244 1.073.535 1.544 1.006.471.471.762.918 1.006 1.544.186.472.408 1.182.468 2.49.058 1.415.072 1.84.072 5.425s-.014 4.01-.072 5.425c-.06 1.308-.282 2.018-.468 2.49-.244.626-.535 1.073-1.006 1.544-.471.471-.918.762-1.544 1.006-.472.186-1.182.408-2.49.468-1.415.058-1.84.072-5.425.072s-4.01-.014-5.425-.072c-1.308-.06-2.018-.282-2.49-.468-.626-.244-1.073-.535-1.544-1.006-.471-.471-.762-.918-1.006-1.544-.186-.472-.408-1.182-.468-2.49-.058-1.415-.072-1.84-.072-5.425s.014-4.01.072-5.425c.06-1.308.282-2.018.468-2.49.244-.626.535-1.073 1.006-1.544.471-.471.918-.762 1.544-1.006.472-.186 1.182-.408 2.49-.468 1.415-.058 1.84-.072 5.425-.072z"/>
    <path d="M12.017 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12.017 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
)

const FacebookIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
  </svg>
)

// Dialog Components
const ExternalLinkDialog = ({ isOpen, onClose, onConfirm, url, platform }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
            <GlobeAltIcon className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              External Link
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              You're about to visit {platform}
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-300 break-all">
            {url}
          </p>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
          This will take you to an external website. Please verify the URL before proceeding.
        </p>
        
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
          >
            <CheckIcon className="w-4 h-4" />
            Continue
          </button>
        </div>
      </motion.div>
    </div>
  )
}

const LinkNotFoundDialog = ({ isOpen, onClose, platform }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !isClient) return null;

  return (
    <Portal>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={handleBackdropClick}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full shadow-2xl border border-gray-200 dark:border-gray-700 mx-auto my-auto"
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
              <ExclamationTriangleIcon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Link Not Available
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {platform} profile not found
              </p>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            The {platform} link is not available or has been modified. Please try contacting through email or other available channels.
          </p>
          
          <button
            onClick={onClose}
            className="w-full px-4 py-2.5 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition-colors font-medium"
          >
            Got it
          </button>
        </motion.div>
      </div>
    </Portal>
  )
}

// Portal component for rendering modals
const Portal = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (typeof window === 'undefined' || !mounted) return null;
  
  return createPortal(
    <div className="fixed inset-0 z-[9999]" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}>
      {children}
    </div>,
    document.body
  );
};

// Social Button Component
const SocialButton = ({ platform, url, icon, label, colorClass }) => {
  const [showExternalDialog, setShowExternalDialog] = useState(false);
  const [showNotFoundDialog, setShowNotFoundDialog] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
      setShowExternalDialog(false);
      setShowNotFoundDialog(false);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!url) {
      setShowNotFoundDialog(true);
    } else {
      setShowExternalDialog(true);
    }
  }

  // Don't render anything during SSR to prevent hydration mismatch
  if (!isMounted) {
    return (
      <button className={`flex items-center justify-center gap-2 px-3 py-2 ${colorClass} text-white rounded-lg text-sm font-medium opacity-50 cursor-not-allowed`}>
        {icon}
        {label}
      </button>
    )
  }

  const handleConfirm = (e) => {
    e?.stopPropagation()
    setShowExternalDialog(false)
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  if (!url) {
    return (
      <>
        <button
          onClick={handleClick}
          className={`flex items-center justify-center gap-2 px-3 py-2 ${colorClass} text-white rounded-lg text-sm font-medium hover:opacity-80 transition-opacity opacity-50 cursor-not-allowed`}
          title={`${platform} not available`}
        >
          {icon}
          {label}
        </button>
        <LinkNotFoundDialog
          isOpen={showNotFoundDialog}
          onClose={() => setShowNotFoundDialog(false)}
          platform={platform}
        />
      </>
    )
  }

  return (
    <>
      <button
        onClick={handleClick}
        className={`flex items-center justify-center gap-2 px-3 py-2 ${colorClass} text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}
      >
        {icon}
        {label}
      </button>
      <ExternalLinkDialog
        isOpen={showExternalDialog}
        onClose={() => setShowExternalDialog(false)}
        onConfirm={handleConfirm}
        url={url}
        platform={platform}
      />
    </>
  )
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

        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
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

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
              The <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Minds</span> Behind
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Innovation</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Team Impact Stats */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
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
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Collective Impact</h2>
                  <p className="text-xl opacity-90 max-w-2xl mx-auto">
                    Together, we're building the future of healthcare diagnostics
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { value: "3", label: "Core Team Members", description: "Expert professionals" },
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
                        className="text-3xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300"
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

      {/* Enhanced Core Team */}
      <section className="py-16 bg-white dark:bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-900/10" />
        
        <div className="container mx-auto px-4 relative z-10">
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
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
                    
                    {/* Enhanced Contact & Social Actions */}
                    <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                      {/* Email Button */}
                      <a 
                        href={`mailto:${member.email}`} 
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <EnvelopeIcon className="w-4 h-4" />
                        Email
                      </a>
                      
                      {/* Social Media Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <SocialButton
                          platform="LinkedIn"
                          url={member.social.linkedin}
                          icon={<LinkedInIcon className="w-4 h-4" />}
                          label="LinkedIn"
                          colorClass="bg-blue-600 hover:bg-blue-700"
                        />
                        <SocialButton
                          url={member.social.twitter}
                          icon={<TwitterIcon className="w-4 h-4" />}
                          label="Visit profile"
                          colorClass="bg-gray-900 hover:bg-black"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Advisory Board */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-purple-50/50 to-pink-50/50 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10">
        <div className="container mx-auto px-4">
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
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
                      <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-xs font-semibold border border-purple-200 dark:border-purple-700 mb-4">
                        {advisor.expertise}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm text-center leading-relaxed mb-6">
                      {advisor.description}
                    </p>
                    
                    {/* Enhanced Contact & Social Actions for Advisors */}
                    <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                      {/* Email Button */}
                      <a 
                        href={`mailto:${advisor.email}`} 
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <EnvelopeIcon className="w-4 h-4" />
                        Email
                      </a>
                      
                      {/* Social Media Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <SocialButton
                          platform="LinkedIn"
                          url={advisor.social.linkedin}
                          icon={<LinkedInIcon className="w-4 h-4" />}
                          label="LinkedIn"
                          colorClass="bg-blue-600 hover:bg-blue-700"
                        />
                       <SocialButton
                          url={advisor.social.twitter}
                          icon={<TwitterIcon className="w-4 h-4" />}
                          label="Visit profile"
                          colorClass="bg-gray-900 hover:bg-black"
                        />
                      </div>
                    </div>
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