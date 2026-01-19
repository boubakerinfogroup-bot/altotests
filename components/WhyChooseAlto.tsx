'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { CheckCircle2, Target, Users, Award } from 'lucide-react'

export default function WhyChooseAlto() {
    const { language } = useLanguage()

    const benefits = [
        {
            iconFr: Target,
            iconEn: Target,
            titleFr: 'Chemin vers la maîtrise',
            titleEn: 'Path to fluency',
            descFr: 'Avec au moins deux ans d\'expérience d\'enseignement professionnel, nos instructeurs vous guideront dans un parcours d\'apprentissage personnalisé et vous aideront à parler avec confiance sur votre chemin vers la maîtrise.',
            descEn: 'With at least two years of professional teaching experience, our teachers will guide you on a customized language learning journey and help you to speak confidently on your path to fluency.'
        },
        {
            iconFr: Users,
            iconEn: Users,
            titleFr: 'Flexibilité maximale',
            titleEn: 'Maximum flexibility',
            descFr: 'Nos cours en petits groupes en ligne et nos cours privés sont disponibles 24/7, ce qui vous offre une flexibilité maximale et vous permet d\'étudier quand vous le souhaitez, économisant ainsi une quantité importante de votre temps.',
            descEn: 'Our small, online group and private classes are available 24/7, which provides you with maximum flexibility and allows you to study when you want to, saving a significant amount of your time.'
        },
        {
            iconFr: Award,
            iconEn: Award,
            titleFr: 'Confiance totale',
            titleEn: 'Total trust',
            descFr: 'Nous obtenons 4.5 sur Trustpilot et Google Reviews. 92% de nos étudiants sont satisfaits d\'Alto Tests. Notre programme spécialement conçu et nos activités extracurriculaires garantissent que vous atteignez toujours vos objectifs.',
            descEn: 'We score 4.5 in both Trustpilot and Google Reviews. 92% of our students are happy with Alto Tests. Our specially designed, CEFR-based structured curriculum and extracurricular activities ensure you always meet your goals.'
        }
    ]

    return (
        <section className="py-12 md:py-16 bg-white relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                {language === 'fr' ? 'Pourquoi choisir Alto Tests ?' : 'Why choose Alto Tests?'}
                            </span>
                        </h2>

                        <div className="space-y-6">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="flex gap-4"
                                >
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                                            <CheckCircle2 className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {language === 'fr' ? benefit.titleFr : benefit.titleEn}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {language === 'fr' ? benefit.descFr : benefit.descEn}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            {/* Image Placeholder */}
                            <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                                {/* Placeholder with icon */}
                                <div className="text-center">
                                    <Users className="w-24 h-24 text-blue-400 mx-auto mb-4" strokeWidth={1} />
                                    <p className="text-gray-500 font-medium">
                                        {language === 'fr' ? 'Instructeur professionnel' : 'Professional Instructor'}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-bl-full"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400/30 to-purple-400/30 rounded-tr-full"></div>
                        </div>

                        {/* Floating badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">95%</p>
                                    <p className="text-sm text-gray-600">
                                        {language === 'fr' ? 'Taux de réussite' : 'Success Rate'}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
