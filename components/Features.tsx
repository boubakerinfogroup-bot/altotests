'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Clock, Users, BookOpen, Trophy } from 'lucide-react'

const features = [
  {
    icon: GraduationCap,
    title: 'Expert Instructors',
    description: 'Learn from certified language professionals with years of experience',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Award,
    title: 'Certified Programs',
    description: 'Internationally recognized certifications for all major language tests',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Study at your own pace with 24/7 access to course materials',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Users,
    title: 'Interactive Learning',
    description: 'Engage with peers and instructors in live sessions and forums',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Materials',
    description: 'Access to extensive library of practice tests and study resources',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Trophy,
    title: 'High Success Rate',
    description: 'Join thousands of successful students who passed their exams',
    color: 'from-yellow-500 to-yellow-600',
    bgColor: 'bg-yellow-50',
  },
]

export default function Features() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-purple-50 to-accent-50"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full text-sm font-bold mb-6 shadow-lg">
            ✨ Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent">
            Features That Set Us Apart
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Everything you need for successful language test preparation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <div className={`relative p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-primary-300 hover:-translate-y-2 ${feature.bgColor}`}>
                  {/* Icon */}
                  <div className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


