import Link from 'next/link'
import { 
  HeartIcon, 
  ShieldCheckIcon, 
  GlobeAltIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

const footerNavigation = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Technology', href: '/technology' },
    { name: 'Team', href: '/team' },
  ],
  support: [
    { name: 'Contact', href: '/contact' },
    { name: 'Documentation', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
  connect: [
    { name: 'LinkedIn', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Research Papers', href: '#' },
    { name: 'News', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <span className="text-3xl font-bold text-gradient">AInnovia</span>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Democratizing access to AI-powered autoimmune disease detection. 
                Accurate, efficient, and affordable healthcare solutions for everyone.
              </p>
            </div>
            <div className="flex space-x-6">
              <div className="flex items-center space-x-2 text-gray-300">
                <EnvelopeIcon className="h-5 w-5" />
                <span className="text-sm">ainnovia24@gmail.com</span>
              </div>
            </div>
            <div className="flex space-x-6">
              <div className="flex items-center space-x-2 text-gray-300">
                <PhoneIcon className="h-5 w-5" />
                <span className="text-sm">+91-9836967368</span>
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Connect</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.connect.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Mission</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <HeartIcon className="h-5 w-5 text-red-400" />
                    <span className="text-sm">Saving Lives</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <ShieldCheckIcon className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Accurate Diagnosis</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <GlobeAltIcon className="h-5 w-5 text-blue-400" />
                    <span className="text-sm">Global Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-gray-400">
              &copy; 2024 AInnovia. All rights reserved. Early detection leads to healthy life.
            </p>
            <p className="mt-4 sm:mt-0 text-xs leading-5 text-gray-400">
              Made with ❤️ for better healthcare
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

