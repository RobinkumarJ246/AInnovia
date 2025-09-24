import { motion } from 'framer-motion'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Navbar from './Navbar'
import Footer from './Footer'

export default function RestrictedPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 text-center">
            <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <ExclamationTriangleIcon className="w-8 h-8 text-amber-600 dark:text-amber-500" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              404 - Page Unavailable
            </h1>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
                Either this page does not exist or there are some technical difficulties that prevent reaching this page.
            </p>

            <div className="flex justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Return to Homepage
              </a>
            </div>
          </div>

          {/* Error Code - Makes it look more technical */}
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Error Code: ERR_PAGE_UNAVAILABLE
            </span>
            </div>
            <div className="mt-4 text-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              If you are an administrator, please check the backend configuration to fix this issue.
            </span>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}