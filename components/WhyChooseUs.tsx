'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Clock, Award, TrendingUp, Users } from 'lucide-react'

const features = [
    {
        id: 1,
        title: 'Flexibilité Totale',
        titleEn: 'Total Flexibility',
        description: 'Apprenez quand vous voulez, où vous voulez. Cours disponibles 24/7 pour s\'adapter à votre emploi du temps.',
        descriptionEn: 'Learn when you want, where you want. Courses available 24/7 to fit your schedule.',
        icon: Clock,
        gradient: 'from-blue-500 to-cyan-500',
        image: '/images/features/flexibility.jpg'
    },
    {
        id: 2,
        title: 'Instructeurs Experts',
        titleEn: 'Expert Instructors',
        description: 'Plus de 50 instructeurs certifiés avec une moyenne de 8 ans d\'expérience dans la préparation aux tests.',
        descriptionEn: 'Over 50 certified instructors with an average of 8 years of experience in test preparation.',
        icon: Users,
        gradient: 'from-purple-500 to-pink-500',
        image: '/images/features/instructors.jpg'
    },
    {
        id: 3,
        title: 'Résultats Prouvés',
        titleEn: 'Proven Results',
        description: '95% de taux de réussite. Plus de 10,000 étudiants ont atteint leurs objectifs avec Alto Tests.',
        descriptionEn: '95% success rate. Over 10,000 students have achieved their goals with Alto Tests.',
        icon: TrendingUp,
        gradient: 'from-orange-500 to-red-500',
        image: '/images/features/results.jpg'
    },
    {
        id: 4,
        title: 'Support Continu',
        titleEn: 'Continuous Support',
        description: 'Assistance personnalisée 24/7, corrections détaillées et suivi de progression en temps réel.',
        descriptionEn: 'Personalized 24/7 assistance, detailed corrections, and real-time progress tracking.',
        icon: Award,
        gradient: 'from-green-500 to-teal-500',
        image: '/images/features/support.jpg'
    }
]

export default function WhyChooseUs() {
    const { language } = useLanguage()

    return (
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>

            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                    >
                        <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                            {language === 'fr' ? 'Ce Qui Nous Distingue' : 'What Sets Us Apart'}
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
                            ? 'Découvrez les avantages qui font d\'Alto Tests le meilleur choix pour votre préparation'
                            : 'Discover the advantages that make Alto Tests the best choice for your preparation'}
                    </motion.p>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group h-full"
                        >
                            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-gray-100 flex flex-col">
                                {/* Image Container */}
                                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                    {/* Placeholder with gradient and icon */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-90 flex items-center justify-center`}>
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <feature.icon className="w-16 h-16 text-white/80" strokeWidth={1.5} />
                                        </motion.div>
                                    </div>

                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                        {language === 'fr' ? feature.title : feature.titleEn}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {language === 'fr' ? feature.description : feature.descriptionEn}
                                    </p>
                                </div>

                                {/* Decorative corner */}
                                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-bl-full`}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
