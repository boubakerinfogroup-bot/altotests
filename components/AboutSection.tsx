'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { BookOpen, Users, Award, Target } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    titleKey: 'about_flexible',
    description: 'Flexible learning schedules that fit your lifestyle and commitments.',
  },
  {
    icon: Users,
    titleKey: 'about_support',
    description: 'Dedicated support team available to help you succeed in your language journey.',
  },
  {
    icon: Award,
    titleKey: 'about_quality',
    description: 'High-quality course materials and experienced instructors.',
  },
  {
    icon: Target,
    titleKey: 'about_results',
    description: 'Proven track record of helping students achieve their test goals.',
  },
]

export default function AboutSection() {
  const { t } = useLanguage()

  return (
    <section className="section-padding bg-white pt-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            {t('about_know_us')}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('about_title')}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('about_desc')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-primary-50 transition-colors"
              >
                <div className="inline-flex p-4 bg-primary-100 rounded-xl mb-4">
                  <Icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl shadow-2xl flex items-center justify-center">
              <Users className="h-32 w-32 text-white opacity-50" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <Award className="h-8 w-8 text-primary-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">3k+</p>
                  <p className="text-sm text-gray-600">Full Time Employees</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Alto Tests, we are committed to providing the highest quality language test preparation services. Our mission is to empower students with the knowledge, skills, and confidence they need to succeed in their international language examinations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over 10 years of experience, we have helped thousands of students achieve their goals and open doors to new opportunities through language certification.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <p className="text-4xl font-bold text-primary-600 mb-2">500+</p>
                <p className="text-gray-600">Students Trained</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary-600 mb-2">95%</p>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


