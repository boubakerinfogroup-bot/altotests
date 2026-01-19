'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Play, Clock, Users, GraduationCap } from 'lucide-react'
import Link from 'next/link'

const courses = [
  {
    id: 1,
    title: 'TCF France Preparation',
    subtitle: 'Complete TCF Exam Mastery',
    instructor: 'Expert Instructor',
    duration: '3 months',
    students: 50,
    icon: GraduationCap,
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    id: 2,
    title: 'IELTS Mastery Course',
    subtitle: 'Academic & General Training',
    instructor: 'Expert Instructor',
    duration: '3 months',
    students: 50,
    icon: GraduationCap,
    gradient: 'from-green-400 to-green-600',
  },
  {
    id: 3,
    title: 'DELF/DALF Complete',
    subtitle: 'French Proficiency Excellence',
    instructor: 'Expert Instructor',
    duration: '3 months',
    students: 50,
    icon: GraduationCap,
    gradient: 'from-purple-400 to-purple-600',
  },
  {
    id: 4,
    title: 'TEF Canada',
    subtitle: 'Immigration Preparation',
    instructor: 'Expert Instructor',
    duration: '3 months',
    students: 45,
    icon: GraduationCap,
    gradient: 'from-red-400 to-red-600',
  },
  {
    id: 5,
    title: 'TCF Canada',
    subtitle: 'Canadian Immigration Test',
    instructor: 'Expert Instructor',
    duration: '3 months',
    students: 60,
    icon: GraduationCap,
    gradient: 'from-orange-400 to-orange-600',
  },
  {
    id: 6,
    title: 'DELF B1/B2',
    subtitle: 'Intermediate French',
    instructor: 'Expert Instructor',
    duration: '3 months',
    students: 42,
    icon: GraduationCap,
    gradient: 'from-pink-400 to-pink-600',
  },
  {
    id: 7,
    title: 'TCF Québec',
    subtitle: 'Quebec Immigration',
    instructor: 'Expert Instructor',
    duration: '3 months',
    students: 38,
    icon: GraduationCap,
    gradient: 'from-indigo-400 to-indigo-600',
  },
  {
    id: 8,
    title: 'IELTS Academic',
    subtitle: 'University Preparation',
    instructor: 'Expert Instructor',
    duration: '3 months',
    students: 55,
    icon: GraduationCap,
    gradient: 'from-teal-400 to-teal-600',
  },
]

export default function Courses() {
  const { t } = useLanguage()

  return (
    <section id="courses" className="section-padding relative overflow-hidden">
      {/* Colorful Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-100/30 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-100/30 to-transparent"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Courses
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('courses_title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => {
            const Icon = course.icon
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
              >
                {/* Course Header */}
                <div className={`relative h-40 bg-gradient-to-br ${course.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600">{course.subtitle}</p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600 pt-3 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-3 w-3" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-3 w-3" />
                      <span>{course.students}+</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Link
                      href="/courses"
                      className="block w-full text-center px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-primary-600 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Explorer
                    </Link>

                    <a
                      href="https://wa.me/21629616525"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Start
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
