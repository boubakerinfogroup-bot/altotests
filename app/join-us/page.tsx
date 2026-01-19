import type { Metadata } from 'next'
import Link from 'next/link'
import { Users, ArrowLeft, Check, Star, TrendingUp, Award, Heart, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Rejoignez Notre Équipe - Alto Tests',
    description: 'Devenez formateur chez Alto Tests et participez à notre mission d\'excellence éducative.',
}

export default function JoinUsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30 pt-24 pb-16">
            <div className="container-custom px-4 sm:px-6 lg:px-8">
                {/* Back Button - Desktop Only */}
                <div className="hidden md:block mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-gray-700 hover:text-purple-600 hover:border-purple-300 hover:bg-purple-50 transition-all shadow-sm hover:shadow-md group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Retour à l'accueil</span>
                    </Link>
                </div>

                {/* Hero Header */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-2xl mb-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold">
                                    Rejoignez Notre Équipe
                                </h1>
                                <p className="text-xl text-white/90 mt-2">Devenez Formateur chez Alto Tests</p>
                            </div>
                        </div>
                        <p className="text-lg text-white/90 max-w-3xl">
                            Rejoignez une équipe passionnée et contribuez à transformer l'éducation en Tunisie. Participez à notre mission d'excellence et aidez des centaines d'étudiants à réaliser leurs rêves internationaux.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Why Join Us */}
                        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-xl border border-white/50">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Heart className="w-8 h-8 text-red-500" />
                                Pourquoi Nous Rejoindre?
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { icon: TrendingUp, title: 'Évolution de Carrière', desc: 'Développez vos compétences pédagogiques avec notre support continu' },
                                    { icon: Award, title: 'Environnement Dynamique', desc: 'Travaillez dans un cadre moderne et stimulant' },
                                    { icon: Users, title: 'Équipe Solidaire', desc: 'Rejoignez une communauté de formateurs passionnés' },
                                    { icon: Star, title: 'Impact Réel', desc: 'Transformez la vie de vos étudiants au quotidien' }
                                ].map((item, index) => {
                                    const Icon = item.icon
                                    return (
                                        <div key={index} className="flex gap-4 p-4 rounded-2xl hover:bg-blue-50 transition-colors">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                                                <p className="text-sm text-gray-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Profile We're Looking For */}
                        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-xl border border-white/50">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Briefcase className="w-8 h-8 text-blue-600" />
                                Profil Recherché
                            </h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Qualifications Requises</h3>
                            <ul className="space-y-3 mb-8">
                                {[
                                    'Diplôme universitaire (Licence minimum) en langues, linguistique ou domaine connexe',
                                    'Excellente maîtrise de la langue enseignée (niveau C1/C2)',
                                    'Expérience en enseignement ou formation (1 an minimum)',
                                    'Certification en enseignement des langues (DELF, CELTA, etc.) est un plus',
                                    'Connaissance des tests standardisés (TCF, TEF, IELTS, etc.)'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Compétences Souhaitées</h3>
                            <ul className="space-y-3">
                                {[
                                    'Passion pour l\'enseignement et la transmission des connaissances',
                                    'Excellentes compétences en communication',
                                    'Capacité à motiver et inspirer les étudiants',
                                    'Maîtrise des outils pédagogiques numériques',
                                    'Adaptabilité et créativité dans l\'enseignement',
                                    'Sens de l\'organisation et rigueur'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Benefits */}
                        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 md:p-10 shadow-2xl text-white">
                            <h2 className="text-3xl font-bold mb-6">Ce Que Nous Offrons</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    'Rémunération attractive et compétitive',
                                    'Formation continue et développement professionnel',
                                    'Horaires flexibles',
                                    'Environnement de travail moderne',
                                    'Matériel pédagogique fourni',
                                    'Opportunités d\'avancement',
                                    'Assurance santé',
                                    'Primes de performance'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-white flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Process */}
                        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-xl border border-white/50">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Processus de Recrutement</h2>
                            <div className="space-y-6">
                                {[
                                    { step: '1', title: 'Candidature', desc: 'Envoyez votre CV et lettre de motivation' },
                                    { step: '2', title: 'Présélection', desc: 'Examen de votre dossier par notre équipe RH' },
                                    { step: '3', title: 'Entretien', desc: 'Entretien avec le directeur pédagogique' },
                                    { step: '4', title: 'Test Pédagogique', desc: 'Démonstration de vos compétences d\'enseignement' },
                                    { step: '5', title: 'Intégration', desc: 'Formation et intégration dans l\'équipe' }
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Application Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50 sticky top-24">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Postulez Maintenant</h3>

                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nom Complet *</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="Votre nom"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="votre@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone *</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="+216 XX XXX XXX"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Langue à Enseigner *</label>
                                    <select
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    >
                                        <option value="">Sélectionnez...</option>
                                        <option value="francais">Français</option>
                                        <option value="anglais">Anglais</option>
                                        <option value="allemand">Allemand</option>
                                        <option value="autre">Autre</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Années d'Expérience *</label>
                                    <select
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    >
                                        <option value="">Sélectionnez...</option>
                                        <option value="1-2">1-2 ans</option>
                                        <option value="3-5">3-5 ans</option>
                                        <option value="5+">5+ ans</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                        placeholder="Parlez-nous de votre motivation..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
                                >
                                    Envoyer Ma Candidature
                                </button>
                            </form>

                            <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                                <p className="text-sm text-gray-700">
                                    <strong>Note:</strong> Vous pouvez également envoyer votre CV et lettre de motivation à{' '}
                                    <a href="mailto:careers@altotests.tn" className="text-blue-600 hover:underline font-semibold">
                                        careers@altotests.tn
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
