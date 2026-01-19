'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Richard C. Andre',
    role: 'Web Designer',
    rating: 5,
    text: 'The course content was easy to follow and instructors were available to answer questions',
    quality: 'Best Quality',
    image: '/assets/img/testimonial/new/01.jpg',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Student',
    rating: 5,
    text: 'Excellent preparation course that helped me pass my TCF exam with flying colors!',
    quality: 'Best Quality',
    image: '/assets/img/testimonial/new/02.jpg',
  },
  {
    id: 3,
    name: 'Ahmed Ben Ali',
    role: 'Professional',
    rating: 5,
    text: 'The instructors are very knowledgeable and the material is comprehensive.',
    quality: 'Best Quality',
    image: '/assets/img/testimonial/new/03.jpg',
  },
  {
    id: 4,
    name: 'Marie Dubois',
    role: 'Engineer',
    rating: 5,
    text: 'Outstanding support and excellent course materials. Highly recommended!',
    quality: 'Best Quality',
    image: '/assets/img/testimonial/new/04.jpg',
  },
  {
    id: 5,
    name: 'Jean-Pierre Martin',
    role: 'Business Professional',
    rating: 5,
    text: 'The TEF Canada preparation exceeded my expectations. Great value!',
    quality: 'Best Quality',
    image: '/assets/img/testimonial/new/05.jpg',
  },
]

const clientImages = [
  '/assets/img/testimonial/new/01.jpg',
  '/assets/img/testimonial/new/02.jpg',
  '/assets/img/testimonial/new/03.jpg',
  '/assets/img/testimonial/new/04.jpg',
  '/assets/img/testimonial/new/05.jpg',
  '/assets/img/testimonial/new/06.jpg',
]

export default function Testimonials() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-primary-50 relative overflow-hidden" style={{ paddingTop: '40px', paddingBottom: '100px' }}>
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent-200/20 to-primary-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-200/20 to-accent-300/20 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Testimonials Swiper */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-accent/10 to-accent-light/10 text-accent rounded-full text-sm font-bold mb-6 border border-accent/20">
                ⭐ {t('testi_reviews')}
              </div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
                dangerouslySetInnerHTML={{ __html: t('testi_title') }}
              />
            </div>

            {/* Swiper Container */}
            <div className="relative">
              {/* Testimonial Card */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white rounded-3xl p-8 shadow-2xl border-2 border-accent/20"
              >
                {/* Decorative Quote */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="h-20 w-20 text-accent" />
                </div>

                {/* Rating Badge */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-lg">
                    <span className="text-white font-bold text-sm">{t('testi_best_quality')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-8 leading-relaxed text-lg relative z-10 font-medium italic">
                  &quot;{currentTestimonial.text}&quot;
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-5 pt-6 border-t-2 border-gray-100">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-primary-100 shadow-lg">
                    <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-1">{currentTestimonial.name}</h4>
                    <p className="text-sm text-accent font-semibold">{currentTestimonial.role}</p>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={goToPrevious}
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-primary-50 transition-all duration-300 border-2 border-gray-200 hover:border-primary-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-700 hover:text-primary-600" />
                </button>

                {/* Pagination Dots */}
                <div className="flex items-center space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex
                        ? 'w-8 bg-gradient-to-r from-accent to-accent-light'
                        : 'w-3 bg-gray-300 hover:bg-gray-400'
                        }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNext}
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-primary-50 transition-all duration-300 border-2 border-gray-200 hover:border-primary-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-6 w-6 text-gray-700 hover:text-primary-600" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right - Testimonial Images Grid - Matching Original Layout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block relative"
          >
            {/* Box Shape Decoration */}
            <div className="absolute -top-10 -right-10 w-32 h-32 opacity-20">
              <div className="w-full h-full border-4 border-primary-300 rounded-lg rotate-12"></div>
            </div>

            {/* 2-Column Grid Layout matching original */}
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {/* Left Column */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="relative h-48 rounded-xl overflow-hidden shadow-lg bg-cover bg-center"
                  style={{ backgroundImage: "url('/assets/img/testimonial/new/01.jpg')" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative h-48 rounded-xl overflow-hidden shadow-lg bg-cover bg-center"
                  style={{ backgroundImage: "url('/assets/img/testimonial/new/02.jpg')" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="relative h-48 rounded-xl overflow-hidden shadow-lg bg-cover bg-center"
                  style={{ backgroundImage: "url('/assets/img/testimonial/new/03.jpg')" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-4 pt-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="relative h-48 rounded-xl overflow-hidden shadow-lg bg-cover bg-center"
                  style={{ backgroundImage: "url('/assets/img/testimonial/new/04.jpg')" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="relative h-48 rounded-xl overflow-hidden shadow-lg bg-cover bg-center"
                  style={{ backgroundImage: "url('/assets/img/testimonial/new/05.jpg')" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="relative h-48 rounded-xl overflow-hidden shadow-lg bg-cover bg-center"
                  style={{ backgroundImage: "url('/assets/img/testimonial/new/06.jpg')" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
