import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AInnovia - AI-Powered Autoimmune Disease Detection',
  description: 'Accurate, efficient and affordable detection of autoimmune diseases using AI technology. Democratizing access to autoimmune disease diagnosis globally.',
  keywords: 'AI, autoimmune diseases, medical diagnosis, healthcare, ANA-IFA test, medical technology',
  authors: [{ name: 'AInnovia' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              theme: {
                primary: '#10B981',
                secondary: 'black',
              },
            },
          }}
        />
      </body>
    </html>
  )
}

