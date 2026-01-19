'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
    {
        questionFr: "Quels tests de langue proposez-vous ?",
        questionEn: "What language tests do you offer?",
        answerFr: "Nous proposons une préparation complète pour TCF France, TEF Canada, DELF/DALF, IELTS, Goethe et TOEIC. Chaque programme est conçu spécifiquement pour maximiser vos chances de réussite.",
        answerEn: "We offer comprehensive preparation for TCF France, TEF Canada, DELF/DALF, IELTS, Goethe, and TOEIC. Each program is specifically designed to maximize your chances of success."
    },
    {
        questionFr: "Combien de temps dure la préparation ?",
        questionEn: "How long does the preparation take?",
        answerFr: "La durée varie selon votre niveau actuel et vos objectifs. En moyenne, nos étudiants suivent un programme de 2 à 6 mois. Nous proposons des plans personnalisés adaptés à votre emploi du temps.",
        answerEn: "Duration varies based on your current level and goals. On average, our students follow a 2 to 6 month program. We offer personalized plans adapted to your schedule."
    },
    {
        questionFr: "Les cours sont-ils en ligne ou en présentiel ?",
        questionEn: "Are classes online or in-person?",
        answerFr: "Nous proposons les deux formats ! Nos cours en ligne sont disponibles 24/7 avec des sessions en direct programmées. Nous avons également un centre à Tunis pour les cours en présentiel.",
        answerEn: "We offer both formats! Our online courses are available 24/7 with scheduled live sessions. We also have a center in Tunis for in-person classes."
    },
    {
        questionFr: "Quel est votre taux de réussite ?",
        questionEn: "What is your success rate?",
        answerFr: "Nous sommes fiers d'afficher un taux de réussite de 95%. Plus de 10,000 étudiants ont atteint leurs objectifs avec Alto Tests grâce à nos méthodes éprouvées et notre accompagnement personnalisé.",
        answerEn: "We are proud to have a 95% success rate. Over 10,000 students have achieved their goals with Alto Tests thanks to our proven methods and personalized support."
    },
    {
        questionFr: "Proposez-vous des tests blancs ?",
        questionEn: "Do you offer practice tests?",
        answerFr: "Oui ! Nos plans Pro et Premium incluent des tests pratiques illimités dans des conditions d'examen réelles. Vous recevrez également des corrections détaillées et un suivi de progression.",
        answerEn: "Yes! Our Pro and Premium plans include unlimited practice tests under real exam conditions. You'll also receive detailed corrections and progress tracking."
    },
    {
        questionFr: "Comment puis-je m'inscrire ?",
        questionEn: "How can I enroll?",
        answerFr: "Vous pouvez vous inscrire directement sur notre site web, nous contacter via WhatsApp au +216 29 616 525, ou visiter notre centre à Tunis. Nous offrons une consultation gratuite pour vous aider à choisir le bon programme.",
        answerEn: "You can enroll directly on our website, contact us via WhatsApp at +216 29 616 525, or visit our center in Tunis. We offer a free consultation to help you choose the right program."
    }
]

export default function FAQ() {
    const { language } = useLanguage()
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>

            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="text-center mb-10 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                    >
                        <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                            {language === 'fr' ? 'Questions Fréquentes' : 'Frequently Asked Questions'}
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
                            ? 'Trouvez les réponses aux questions les plus courantes'
                            : 'Find answers to the most common questions'}
                    </motion.p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                        >
                            {/* Question Button */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                            >
                                <span className="text-lg md:text-xl font-bold text-gray-900 pr-4">
                                    {language === 'fr' ? faq.questionFr : faq.questionEn}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0"
                                >
                                    {openIndex === index ? (
                                        <Minus className="w-6 h-6 text-purple-600" />
                                    ) : (
                                        <Plus className="w-6 h-6 text-gray-400" />
                                    )}
                                </motion.div>
                            </button>

                            {/* Answer */}
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 md:px-8 pb-6 pt-2">
                                            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4"></div>
                                            <p className="text-gray-600 leading-relaxed">
                                                {language === 'fr' ? faq.answerFr : faq.answerEn}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 mb-4">
                        {language === 'fr'
                            ? "Vous avez d'autres questions ?"
                            : "Have more questions?"}
                    </p>
                    <a
                        href="https://wa.me/21629616525"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        {language === 'fr' ? 'Contactez-nous' : 'Contact Us'}
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
