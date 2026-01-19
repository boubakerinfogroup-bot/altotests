'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { GraduationCap, Users, Award, School } from 'lucide-react'

const features = [
    {
        icon: GraduationCap,
        titleKey: 'feature_scholarship',
        descKey: 'feature_scholarship_desc',
        title: 'Bourses d\u0027Études',
        desc: 'Les bourses offrent une aide financière aux étudiants méritants'
    },
    {
        icon: Users,
        titleKey: 'feature_instructors',
        descKey: 'feature_instructors_desc',
        title: 'Instructeurs Experts',
        desc: 'Nos instructeurs sont des professionnels expérimentés dans leur domaine'
    },
    {
        icon: Award,
        titleKey: 'feature_certificate',
        descKey: 'feature_certificate_desc',
        title: 'Programme de Certification',
        desc: 'Obtenez des certificats reconnus à la fin de votre formation'
    },
    {
        icon: School,
        titleKey: 'feature_admission',
        descKey: 'feature_admission_desc',
        title: 'Admissions Diplômées',
        desc: 'Assistance complète pour vos admissions universitaires'
    },
]

export default function FeatureCards() {
    const { t } = useLanguage()

    return (
        <div className="section-padding bg-white">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-primary-300 hover:shadow-xl transition-all duration-300">
                                <div className="mb-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="h-8 w-8 text-primary-600" />
                                    </div>
                                </div>
                                <h5 className="text-xl font-bold text-gray-900 mb-3">
                                    {feature.title}
                                </h5>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
