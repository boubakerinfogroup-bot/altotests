'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Facebook, Instagram, Youtube, Music2 } from 'lucide-react'

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/assets/img/register-bg.png')" }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <div className="mb-6">
              <span className="text-lg font-semibold text-white/90">{t('reg_contact_alto')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t('reg_stay_touch')}
            </h2>
            <p className="text-xl text-white/90 mb-10">
              {t('reg_desc')}
            </p>

            {/* Contact Items */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary-400 flex-shrink-0" style={{ color: '#2563eb', fontSize: '24px', width: '25px' }} />
                <span className="text-xl text-white">
                  <strong>{t('reg_email_label')}</strong>{' '}
                  <a href="mailto:contact@altotests.com" className="text-white hover:text-primary-300 transition-colors">
                    contact@altotests.com
                  </a>
                </span>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center space-x-4">
                <MessageCircle className="h-6 w-6 flex-shrink-0" style={{ color: '#25D366', fontSize: '24px', width: '25px' }} />
                <span className="text-xl text-white">
                  <strong>{t('reg_whatsapp_label')}</strong>{' '}
                  <a href="https://wa.me/21629616525" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 transition-colors">
                    +216 29616525
                  </a>
                </span>
              </div>

              {/* Social Media */}
              <div className="flex items-center space-x-4 pt-4">
                <div className="h-6 w-6 flex items-center justify-center flex-shrink-0" style={{ color: '#dc2626', fontSize: '24px', width: '25px' }}>
                  <span className="text-2xl font-bold" style={{ color: '#dc2626' }}>#</span>
                </div>
                <div className="flex items-center space-x-5">
                  <a href="#" className="text-white hover:text-primary-300 transition-colors" style={{ fontSize: '28px' }}>
                    <Facebook className="h-7 w-7" />
                  </a>
                  <a href="#" className="text-white hover:text-primary-300 transition-colors" style={{ fontSize: '28px' }}>
                    <Instagram className="h-7 w-7" />
                  </a>
                  <a href="#" className="text-white hover:text-primary-300 transition-colors" style={{ fontSize: '28px' }}>
                    <Youtube className="h-7 w-7" />
                  </a>
                  <a href="#" className="text-white hover:text-primary-300 transition-colors" style={{ fontSize: '28px' }}>
                    <Music2 className="h-7 w-7" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t('reg_create_account')}
            </h2>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder={t('form_name_ph')}
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-white text-gray-900"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder={t('form_email_ph')}
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-white text-gray-900"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder={t('form_phone_ph')}
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-white text-gray-900"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-accent to-accent-light text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t('btn_start_now')}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
