'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Award, Users, Lightbulb, Shield, TrendingUp, Heart } from 'lucide-react'

const values = [
    {
        icon: Award,
        title: 'Excellence',
        desc: 'Nous visons l\u0027excellence dans tout ce que nous faisons',
        gradient: 'from-yellow-400 to-orange-500'
    },
    {
        icon: Users,
        title: 'Collaboration',
        desc: 'Ensemble, nous atteignons plus',
        gradient: 'from-blue-400 to-cyan-500'
    },
    {
        icon: Lightbulb,
        title: 'Innovation',
        desc: 'Toujours à la pointe de l\u0027éducation',
        gradient: 'from-purple-400 to-pink-500'
    },
    {
        icon: Shield,
        title: 'Intégrité',
        desc: 'Honnêteté et transparence en toutes circonstances',
        gradient: 'from-green-400 to-emerald-500'
    },
    {
        icon: TrendingUp,
        title: 'Croissance',
        desc: 'Développement continu pour nos étudiants',
        gradient: 'from-red-400 to-rose-500'
    },
    {
        icon: Heart,
        title: 'Passion',
        desc: 'Amour pour l\u0027enseignement et l\u0027apprentissage',
        gradient: 'from-indigo-400 to-purple-500'
    },
]

export default function CoreValues() {
    const { t } = useLanguage()

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                    >
                        Nos Valeurs Fondamentales
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Les principes qui guident notre mission et façonnent notre culture
                    </motion.p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden">
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                                <div className="relative z-10">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                        <value.icon className="h-8 w-8 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">
                                        {value.title}
                                    </h3>

                                    <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                                        {value.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
