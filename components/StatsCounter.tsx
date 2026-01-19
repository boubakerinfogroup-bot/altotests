'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Users, GraduationCap, Award, Globe } from 'lucide-react'

const stats = [
    {
        icon: Users,
        number: '5000',
        suffix: '+',
        label: 'Étudiants Formés',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        icon: GraduationCap,
        number: '95',
        suffix: '%',
        label: 'Taux de Réussite',
        color: 'from-purple-500 to-pink-500'
    },
    {
        icon: Award,
        number: '15',
        suffix: '+',
        label: 'Années d\u0027Expérience',
        color: 'from-green-500 to-emerald-500'
    },
    {
        icon: Globe,
        number: '30',
        suffix: '+',
        label: 'Pays Représentés',
        color: 'from-orange-500 to-red-500'
    },
]

export default function StatsCounter() {
    const { t } = useLanguage()

    return (
        <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Notre Impact en Chiffres
                    </h2>
                    <p className="text-xl text-gray-300">
                        Des résultats qui parlent d\u0027eux-mêmes
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="relative inline-block mb-6">
                                <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl`}>
                                    <stat.icon className="h-10 w-10 text-white" />
                                </div>
                            </div>

                            <div className="mb-2">
                                <span className="text-5xl md:text-6xl font-bold text-white">
                                    {stat.number}
                                </span>
                                <span className="text-4xl md:text-5xl font-bold text-white/80">
                                    {stat.suffix}
                                </span>
                            </div>

                            <p className="text-lg text-gray-300 font-semibold">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
