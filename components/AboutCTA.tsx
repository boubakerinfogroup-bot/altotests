'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Mail } from 'lucide-react'

export default function AboutCTA() {
    const { t } = useLanguage()

    return (
        <section className="section-padding bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Prêt à Commencer Votre<br />
                            Parcours d&apos;Apprentissage?
                        </h2>

                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                            Rejoignez des milliers d&apos;étudiants qui ont transformé leur avenir avec Alto Tests
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center pt-4">
                            <motion.a
                                href="https://wa.me/21629616525"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/30 transition-all duration-300"
                            >
                                <MessageCircle className="h-6 w-6" />
                                Contactez-Nous sur WhatsApp
                                <ArrowRight className="h-5 w-5" />
                            </motion.a>

                            <motion.a
                                href="mailto:contact@altotests.com"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                            >
                                <Mail className="h-6 w-6" />
                                Envoyez un Email
                            </motion.a>
                        </div>

                        <div className="pt-8 flex flex-wrap gap-8 justify-center text-white/80">
                            <div className="text-center">
                                <p className="text-sm mb-1">Téléphone</p>
                                <p className="font-semibold">+216 29 616 525</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm mb-1">Email</p>
                                <p className="font-semibold">contact@altotests.com</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm mb-1">Localisation</p>
                                <p className="font-semibold">Tunis, Tunisie</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
