'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { GraduationCap, Clock, Users, ArrowRight } from 'lucide-react'

const allCourses = [
  {
    id: 'tcf-france',
    nameKey: 'test_tcf_france',
    description: 'Complete preparation for TCF France exam with expert instructors.',
    duration: '3 months',
    students: 120,
    level: 'All Levels',
    href: '/courses/tcf-france',
  },
  {
    id: 'tef-canada',
    nameKey: 'test_tef_canada',
    description: 'Comprehensive TEF Canada preparation course for immigration.',
    duration: '3 months',
    students: 95,
    level: 'Intermediate+',
    href: '/courses/tef-canada',
  },
  {
    id: 'delf-dalf',
    nameKey: 'test_delf_dalf',
    description: 'Master French with DELF/DALF certification preparation.',
    duration: '4 months',
    students: 150,
    level: 'All Levels',
    href: '/courses/delf-dalf',
  },
  {
    id: 'ielts',
    nameKey: 'test_ielts',
    description: 'IELTS Academic and General training with proven strategies.',
    duration: '3 months',
    students: 200,
    level: 'Intermediate+',
    href: '/courses/ielts',
  },
  {
    id: 'goethe',
    nameKey: 'test_goethe',
    description: 'German language certification with Goethe exam preparation.',
    duration: '3 months',
    students: 80,
    level: 'All Levels',
    href: '/courses/goethe',
  },
  {
    id: 'toeic',
    nameKey: 'test_toeic',
    description: 'TOEIC test preparation for professional English certification.',
    duration: '2 months',
    students: 110,
    level: 'Intermediate+',
    href: '/courses/toeic',
  },
]

export default function CoursesList() {
  const { t } = useLanguage()

  const courseColors = [
    { bg: 'from-blue-500 to-blue-700', accent: 'blue', icon: '🇫🇷' },
    { bg: 'from-red-500 to-red-700', accent: 'red', icon: '🇨🇦' },
    { bg: 'from-purple-500 to-purple-700', accent: 'purple', icon: '🇫🇷' },
    { bg: 'from-green-500 to-green-700', accent: 'green', icon: '🇬🇧' },
    { bg: 'from-yellow-500 to-yellow-700', accent: 'yellow', icon: '🇩🇪' },
    { bg: 'from-orange-500 to-orange-700', accent: 'orange', icon: '🇬🇧' },
  ]

  return (
    <section className="section-padding relative overflow-hidden pt-32">
      {/* Colorful Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-purple-50 via-accent-50 to-blue-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full text-sm font-bold mb-6 shadow-lg">
            ⭐ {t('courses_live')}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent">
            All Our Courses
          </h1>
          <p className="text-xl text-gray-700 font-medium">
            Choose the perfect course for your language test preparation journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCourses.map((course, index) => {
            const colors = courseColors[index % courseColors.length]
            return (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-primary-300 hover:-translate-y-2"
            >
              {/* Course Header with Gradient */}
              <div className={`relative h-56 bg-gradient-to-br ${colors.bg} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }}></div>
                
                {/* Icon Badge */}
                <div className="absolute top-6 left-6 text-4xl">{colors.icon}</div>
                
                {/* Level Badge */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-bold text-gray-900 shadow-lg">
                  {course.level}
                </div>
                
                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <GraduationCap className="h-20 w-20 text-white/30 group-hover:text-white/50 transition-all duration-300 group-hover:scale-110" />
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Course Content */}
              <div className="p-6 space-y-5 bg-gradient-to-b from-white to-gray-50">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                    {t(course.nameKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm pt-4 border-t-2 border-gray-100">
                  <div className="flex items-center space-x-2 px-3 py-2 bg-primary-50 rounded-lg">
                    <Clock className="h-4 w-4 text-primary-600" />
                    <span className="font-semibold text-gray-700">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-2 bg-accent-50 rounded-lg">
                    <Users className="h-4 w-4 text-accent-600" />
                    <span className="font-semibold text-gray-700">{course.students}+</span>
                  </div>
                </div>

                <Link
                  href={course.href}
                  className={`flex items-center justify-between w-full px-6 py-4 bg-gradient-to-r ${colors.bg} text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300 group hover:scale-105`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  )
}

