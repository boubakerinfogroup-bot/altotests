'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, User, GraduationCap, Star, TrendingUp, Award, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react'

const courses = [
  { id: 'tcf', nameKey: 'test_tcf_france', href: '/courses/tcf-france', flag: '/images/france.png' },
  { id: 'tef', nameKey: 'test_tef_canada', href: '/courses/tef-canada', flag: '/images/france.png' },
  { id: 'delf', nameKey: 'test_delf_dalf', href: '/courses/delf-dalf', flag: '/images/france.png' },
  { id: 'ielts', nameKey: 'test_ielts', href: '/courses/ielts', flag: '/images/uk.png' },
  { id: 'goethe', nameKey: 'test_goethe', href: '/courses/goethe', flag: '/images/germany.png' },
  { id: 'toeic', nameKey: 'test_toeic', href: '/courses/toeic', flag: '/images/uk.png' },
]

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 z-0"></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 -left-10 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-40 -right-10 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute -bottom-10 left-1/3 w-96 h-96 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="block mb-2"
              >
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Réalisez Vos
                </span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              >
                Ambitions
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Préparez-vous aux tests de langue internationaux avec les meilleurs formateurs.
              <span className="font-semibold text-gray-900"> Garantie de résultats exceptionnels.</span>
            </motion.p>

            {/* Course Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto lg:mx-0"
            >
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={course.href}
                    className="group relative flex items-center gap-3 px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 border-2 border-purple-500 hover:border-pink-400 rounded-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Gradient shine on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                    {/* Flag Image */}
                    <div className="relative z-10 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center p-1.5 group-hover:bg-white/20 group-hover:scale-110 transition-all">
                      <img
                        src={course.flag}
                        alt=""
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>

                    {/* Text */}
                    <span className="relative z-10 text-xs md:text-sm font-bold text-white group-hover:text-blue-100 text-left flex-1 leading-tight transition-colors">
                      {t(course.nameKey)}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="https://wa.me/21629616525"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-3 px-6 md:px-8 py-3.5 md:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl md:rounded-2xl font-bold text-sm md:text-base shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
                <span>Commencer Maintenant</span>
              </motion.a>

              <motion.a
                href="/register"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 px-6 md:px-8 py-3.5 md:py-4 bg-white/80 backdrop-blur-sm text-gray-900 rounded-xl md:rounded-2xl font-bold text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-blue-300"
              >
                <User className="w-5 h-5 md:w-6 md:h-6" />
                <span>Créer un Compte</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Card */}
            <div className="relative">
              {/* Hero SVG Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="aspect-square flex items-center justify-center"
              >
                <img
                  src="/images/hero.svg"
                  alt="Alto Tests - Language Learning"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Floating Stats Card - Top Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-4 -right-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-5 border border-white"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Excellence</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">4.9/5</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats Card - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-5 border border-white"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Taux réussite</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">95%</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - Certifié */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute top-44 left-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                Certifié
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

