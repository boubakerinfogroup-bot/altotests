'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'

const teamMembers = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Lead Instructor',
    image: '/team/1.jpg',
    bio: 'Expert in French language testing with 15+ years of experience.',
  },
  {
    id: 2,
    name: 'Prof. Ahmed Ben Ali',
    role: 'IELTS Specialist',
    image: '/team/2.jpg',
    bio: 'Certified IELTS examiner and English language expert.',
  },
  {
    id: 3,
    name: 'Marie Dubois',
    role: 'TCF/TCF Coordinator',
    image: '/team/3.jpg',
    bio: 'Specialized in TCF and TEF preparation programs.',
  },
]

export default function Team() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Expert Team</h2>
          <p className="text-xl text-gray-600">
            Meet the experienced professionals dedicated to your success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-primary-600 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600 mb-6">{member.bio}</p>
              <div className="flex items-center justify-center space-x-4">
                <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-primary-100 transition-colors">
                  <Linkedin className="h-5 w-5 text-gray-600" />
                </a>
                <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-primary-100 transition-colors">
                  <Mail className="h-5 w-5 text-gray-600" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


