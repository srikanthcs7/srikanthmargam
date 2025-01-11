'use client'

import '../dist/output.css'
import { Analytics } from "@vercel/analytics/react"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDark, setIsDark] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-zinc-50 text-zinc-900 dark:bg-[#0a192f] dark:text-zinc-100 transition-colors duration-300">
        <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-[#0a192f] [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#0a192f_40%,#63e_100%)]">
          <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        </div>
        
        <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-[#0a192f]/80 backdrop-blur-sm">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.a 
                href="/" 
                className="text-2xl font-bold tracking-tighter"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
              
              </motion.a>

              <div className="hidden md:flex items-center space-x-8">
                <motion.div 
                  className="flex space-x-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <a href="#about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</a>
                  <a href="#experience" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Experience</a>
                  <a href="#projects" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Projects</a>
                  <a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a>
                </motion.div>
                
                <motion.button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </motion.button>
              </div>

              <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t dark:border-zinc-800"
              >
                <div className="flex flex-col space-y-4 p-6">
                  <a href="#about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</a>
                  <a href="#experience" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Experience</a>
                  <a href="#projects" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Projects</a>
                  <a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a>
                  <button
                    onClick={() => setIsDark(!isDark)}
                    className="flex items-center space-x-2 text-left hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {isDark ? (
                      <>
                        <Sun size={20} />
                        <span>Light Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon size={20} />
                        <span>Dark Mode</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main className="pt-20">{children}</main>

        <footer className="mt-32 border-t dark:border-zinc-800">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                &copy; {new Date().getFullYear()} Srikanth Margam. No rights reserved (except my info 🥴). Clone it—just don’t sue me if it breaks 🤝
              </p>
              <div className="flex space-x-6">
                <a 
                  href="https://github.com/srikanth000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-400 transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/srikanth-margam/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-400 transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="mailto:margamsrikanth.cs7@gmail.com"
                  className="text-zinc-600 hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-400 transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}

