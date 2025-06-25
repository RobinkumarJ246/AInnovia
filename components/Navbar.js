'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bars3Icon, 
  XMarkIcon, 
  SunIcon, 
  MoonIcon, 
  ChevronDownIcon,
  UserCircleIcon,
  BookOpenIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Explore', 
    href: '#',
    dropdown: [
      { name: 'About', href: '/about', icon: UserCircleIcon },
      { name: 'Blog', href: '/blog', icon: BookOpenIcon },
      { name: 'Team', href: '/team', icon: UserGroupIcon },
    ]
  },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Technology', href: '/technology' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return;
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, [mounted]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  if (!mounted) return null;
  return (
    <header className="bg-gradient-to-r from-green-50/80 to-teal-50/80 dark:from-blue-900/80 dark:to-purple-900/80 backdrop-blur-xl border-b border-white/10 dark:border-gray-800/20 sticky top-0 z-50 shadow-lg shadow-blue-500/5 dark:shadow-purple-900/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 h-16" aria-label="Global">
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="block h-16 w-auto -mb-1">
          
            <img 
              src="/logo.svg" 
              alt="AInnovia Logo" 
              className="h-full w-auto scale-110"
            />
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative" ref={item.dropdown ? dropdownRef : null}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                    className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                  >
                    {item.name}
                    <ChevronDownIcon 
                      className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} 
                      aria-hidden="true" 
                    />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-900/5 dark:ring-white/10 overflow-hidden z-50"
                      >
                        <div className="p-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="group flex items-center gap-x-3 rounded-lg p-2 text-sm leading-6 text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700/50"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <subItem.icon className="h-5 w-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-white/20 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <SunIcon className="h-5 w-5 text-yellow-500" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-600" />
            )}
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2.5 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 dark:shadow-purple-900/20"
          >
            Get Started
          </Link>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg">
        <div className="relative">
          {/* Scroll indicator */}
          <div className="absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrollable navigation */}
          <div className="overflow-x-auto py-3 px-4 hide-scrollbar">
            <div className="flex space-x-2 min-w-max">
              {navigation.map((item) => (
                <div key={item.name} className="flex-shrink-0">
                  {item.dropdown ? (
                    <div className="flex space-x-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="inline-flex flex-col items-center justify-center px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 min-w-[80px]"
                        >
                          <subItem.icon className="h-5 w-5 text-gray-600 dark:text-gray-300 mb-1" />
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-200">{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="inline-flex flex-col items-center justify-center px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 min-w-[80px]"
                    >
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-200">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className="flex-shrink-0 flex flex-col items-center justify-center px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 min-w-[80px]"
              >
                {darkMode ? (
                  <SunIcon className="h-5 w-5 text-yellow-500 mb-1" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-gray-600 mb-1" />
                )}
                <span className="text-xs font-medium text-gray-700 dark:text-gray-200">
                  {darkMode ? 'Light' : 'Dark'}
                </span>
              </button>
              
              {/* Get Started Button */}
              <Link
                href="/contact"
                className="flex-shrink-0 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-green-600 to-teal-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 dark:shadow-purple-900/20 text-sm"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
        
        {/* Add some styles for the scrollbar */}
        <style jsx>{`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </header>
  )
}

