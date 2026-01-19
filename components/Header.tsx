'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { Menu, X, Phone, ChevronDown, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const { t, language, setLanguage } = useLanguage()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr')
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100'
        : 'bg-white/95 backdrop-blur-md'
        }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src="/images/logo.svg"
              alt="Alto Tests Logo"
              className="h-12 w-auto relative z-10 group-hover:scale-110 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="/about"
              className="px-4 py-2 text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium rounded-lg hover:bg-primary-50 relative group"
            >
              <span className="relative z-10">{t('nav_about')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <div className="relative group">
              <button className="px-4 py-2 text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium flex items-center space-x-1 rounded-lg hover:bg-primary-50">
                <span>{t('nav_courses')}</span>
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="py-2">
                  <Link
                    href="/courses/tcf-france"
                    className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-primary-600 transition-all duration-300"
                  >
                    TCF France
                  </Link>
                  <Link
                    href="/courses/tef-canada"
                    className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-primary-600 transition-all duration-300"
                  >
                    TEF Canada
                  </Link>
                  <Link
                    href="/courses/ielts"
                    className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-primary-600 transition-all duration-300"
                  >
                    IELTS
                  </Link>
                  <Link
                    href="/courses/goethe"
                    className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-primary-600 transition-all duration-300"
                  >
                    Goethe
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/#pricing"
              className="px-4 py-2 text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium rounded-lg hover:bg-primary-50 relative group"
            >
              <span className="relative z-10">{t('nav_pricing')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/simulation"
              className="px-4 py-2 text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium rounded-lg hover:bg-primary-50 relative group"
            >
              <span className="relative z-10">Simulation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Phone */}
            <a
              href="tel:+21629616525"
              className="hidden md:flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10 pointer-events-none"
              >
                <Phone className="h-5 w-5" />
              </motion.div>
              <span className="relative z-10">+216 29616525</span>
            </a>

            {/* Enroll Button */}
            <Link
              href="/register"
              className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">{t('btn_enroll')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2.5 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-primary-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Globe className="h-4 w-4" />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-primary-50 rounded-lg transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col space-y-2 py-4">
                <Link
                  href="/about"
                  className="px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 font-medium rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav_about')}
                </Link>
                <Link
                  href="/courses"
                  className="px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 font-medium rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav_courses')}
                </Link>
                <Link
                  href="/#pricing"
                  className="px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 font-medium rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav_pricing')}
                </Link>
                <Link
                  href="#contact"
                  className="px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 font-medium rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav_contact')}
                </Link>
                <Link
                  href="/register"
                  className="mx-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-center shadow-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('btn_enroll')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
