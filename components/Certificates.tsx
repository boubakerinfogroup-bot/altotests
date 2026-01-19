'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

export default function Certificates() {
    const { language } = useLanguage()

    const certificates = [
        {
            id: 1,
            title: language === 'fr' ? 'Certification Qualité' : 'Quality Certification',
            image: '/images/certificates/cert1.jpg'
        },
        {
            id: 2,
            title: language === 'fr' ? 'Accréditation Internationale' : 'International Accreditation',
            image: '/images/certificates/cert2.jpg'
        },
        {
            id: 3,
            title: language === 'fr' ? 'Excellence Pédagogique' : 'Educational Excellence',
            image: '/images/certificates/cert3.jpg'
        }
    ]

    return (
        <section className="py-12 md:py-16 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>

            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="text-center mb-10 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                    >
                        <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                            {language === 'fr' ? 'Nos Certifications' : 'Our Certifications'}
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        {language === 'fr'
                            ? 'Reconnus pour notre excellence et notre engagement envers la qualité'
                            : 'Recognized for our excellence and commitment to quality'}
                    </motion.p>
                </div>

                {/* Certificates Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group"
                        >
                            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 p-6">
                                {/* Certificate Image Placeholder */}
                                <div className="relative aspect-[3/4] mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                    {/* Placeholder with icon */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                                        <Award className="w-24 h-24 text-gray-400" strokeWidth={1} />
                                    </div>

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>

                                {/* Title */}
                                <h3 className="text-center text-lg font-bold text-gray-900">
                                    {cert.title}
                                </h3>

                                {/* Decorative border */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
