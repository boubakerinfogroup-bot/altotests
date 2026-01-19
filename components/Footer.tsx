'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Youtube, Linkedin, User, GraduationCap, ArrowRight } from 'lucide-react'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Footer Banners */}
      <div className="container-custom pt-12 md:pt-16 pb-6 md:pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Become Instructor Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl md:rounded-2xl p-6 md:p-8 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{t('footer_instr_title')}</h3>
                  <p className="text-white/90 mb-4 md:mb-6 text-sm md:text-base">{t('footer_instr_desc')}</p>
                  <Link
                    href="/join-us"
                    className="inline-flex items-center space-x-2 px-4 md:px-6 py-2.5 md:py-3 bg-white text-primary-600 rounded-lg md:rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
                  >
                    <span>{t('btn_get_started')}</span>
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                  </Link>
                </div>
                <div className="hidden md:block ml-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <User className="h-10 w-10 md:h-12 md:w-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Become Student Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-gradient-to-br from-accent to-accent-dark rounded-xl md:rounded-2xl p-6 md:p-8 overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{t('footer_stud_title')}</h3>
                  <p className="text-white/90 mb-4 md:mb-6 text-sm md:text-base">{t('footer_stud_desc')}</p>
                  <Link
                    href="/register"
                    className="inline-flex items-center space-x-2 px-4 md:px-6 py-2.5 md:py-3 bg-white text-accent rounded-lg md:rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
                  >
                    <span>{t('btn_get_started')}</span>
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                  </Link>
                </div>
                <div className="hidden md:block ml-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <GraduationCap className="h-10 w-10 md:h-12 md:w-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Widgets */}
      <div className="container-custom pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/images/white-logo.svg" alt="Alto Tests Logo" width={120} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              {t('footer_desc')}
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors" aria-label="Youtube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Our Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Formations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/tcf-france" className="text-gray-400 hover:text-white transition-colors">
                  TCF France
                </Link>
              </li>
              <li>
                <Link href="/courses/tef-canada" className="text-gray-400 hover:text-white transition-colors">
                  TEF Canada
                </Link>
              </li>
              <li>
                <Link href="/courses/ielts" className="text-gray-400 hover:text-white transition-colors">
                  IELTS
                </Link>
              </li>
              <li>
                <Link href="/courses/goethe" className="text-gray-400 hover:text-white transition-colors">
                  Goethe
                </Link>
              </li>
              <li>
                <Link href="/simulation" className="text-gray-400 hover:text-white transition-colors">
                  Simulation d'Examen
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer_quick_link')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav_about')}
                </Link>
              </li>
              <li>
                <Link href="/join-us" className="text-gray-400 hover:text-white transition-colors">
                  Devenir Formateur
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <a href="https://altoeducationgroup.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Alto Education Group
                </a>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('nav_contact')}</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <a href="mailto:contact@altotests.com" className="hover:text-white transition-colors">
                  contact@altotests.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <a href="tel:+21629616525" className="hover:text-white transition-colors">
                  +216 29616525
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Tunis, Tunisia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left">
              {t('footer_copyright')} © {new Date().getFullYear()} <Link href="/" className="hover:text-white transition-colors">Alto Tests</Link>. {t('footer_rights')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400 text-sm">
              <Link href="/terms" className="hover:text-white transition-colors">
                Conditions Générales
              </Link>
              <span className="hidden md:inline">•</span>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

