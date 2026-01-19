'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'

export default function MissionVision() {
    const { language } = useLanguage()

    return (
        <section className="py-12 md:py-16 bg-white relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50"></div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.03, y: -8 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                    >
                        <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-10 text-white shadow-2xl hover:shadow-blue-500/50 transition-shadow duration-300">
                            {/* Icon */}
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                                <Target className="w-8 h-8" />
                            </div>

                            {/* Title */}
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                {language === 'fr' ? 'Notre Mission' : 'Our Mission'}
                            </h3>

                            {/* Description */}
                            <p className="text-lg text-white/90 leading-relaxed mb-6">
                                {language === 'fr'
                                    ? "Fournir une éducation de classe mondiale accessible à tous, en équipant les étudiants des compétences et de la confiance nécessaires pour réussir leurs tests de langue et réaliser leurs ambitions internationales."
                                    : "Provide world-class education accessible to all, equipping students with the skills and confidence needed to succeed in their language tests and achieve their international ambitions."}
                            </p>

                            {/* Values list */}
                            <div className="space-y-3">
                                {['Passion', 'Excellence', 'Impact'].map((value, i) => (
                                    <motion.div
                                        key={value}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (i * 0.1) }}
                                        className="flex items-center gap-2"
                                    >
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span className="text-white/90 font-medium">{value}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
                        </div>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.03, y: -8 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                    >
                        <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 md:p-10 text-white shadow-2xl hover:shadow-purple-500/50 transition-shadow duration-300">
                            {/* Icon */}
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                                <Eye className="w-8 h-8" />
                            </div>

                            {/* Title */}
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                {language === 'fr' ? 'Notre Vision' : 'Our Vision'}
                            </h3>

                            {/* Description */}
                            <p className="text-lg text-white/90 leading-relaxed mb-6">
                                {language === 'fr'
                                    ? "Devenir le centre de référence en Tunisie et en Afrique du Nord pour la préparation aux tests de langue, reconnu pour notre innovation pédagogique et nos résultats exceptionnels."
                                    : "Become the reference center in Tunisia and North Africa for language test preparation, recognized for our pedagogical innovation and exceptional results."}
                            </p>

                            {/* Values list */}
                            <div className="space-y-3">
                                {['Innovation', language === 'fr' ? 'Croissance' : 'Growth', 'Leadership'].map((value, i) => (
                                    <motion.div
                                        key={value}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (i * 0.1) }}
                                        className="flex items-center gap-2"
                                    >
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span className="text-white/90 font-medium">{value}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
