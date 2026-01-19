'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Check, Clock, Users, BookOpen, Award, Download,
  ChevronDown, ChevronUp, Play, FileText, Zap,
  Target, Star, TrendingUp, Shield, Headphones, Globe,
  Calendar, Video, MessageCircle
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const courseData: Record<string, any> = {
  'tcf-france': {
    nameKey: 'TCF France',
    fullTitle: 'Préparation Complète TCF France',
    subtitle: 'Maîtrisez le Test de Connaissance du Français',
    description: 'Programme intensif et personnalisé pour réussir votre TCF avec excellence. Préparez-vous avec nos experts et atteignez vos objectifs d\'immigration, d\'études ou de carrière en France.',
    duration: '6 Semaines',
    lessons: 24,
    students: '150+',
    level: 'Tous Niveaux',
    language: 'Français',
    price: '299',
    originalPrice: '399',
    discount: '25',
    rating: 4.9,
    reviews: 127,
    color: 'blue',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-cyan-500',
    badges: [
      { text: 'Test Officiel', color: 'bg-blue-500', icon: Shield },
      { text: 'Compréhension & Expression', color: 'bg-green-500', icon: MessageCircle },
      { text: 'Préparation Intensive', color: 'bg-cyan-500', icon: Zap },
      { text: '6 Semaines', color: 'bg-yellow-500', icon: Calendar }
    ],
    highlights: [
      { icon: Star, text: 'Taux de réussite 95%', color: 'text-yellow-500' },
      { icon: Users, text: 'Classes limitées à 12', color: 'text-blue-500' },
      { icon: Headphones, text: 'Support 24/7', color: 'text-green-500' },
      { icon: Award, text: 'Certification incluse', color: 'text-purple-500' }
    ],
    modules: [
      {
        title: 'Module 1 : Découverte du TCF',
        week: 'Semaine 1',
        subtitle: 'Comprendre les enjeux et maîtriser la structure de l\'examen',
        duration: '185 min',
        lessons: [
          { title: 'Présentation détaillée du TCF - Les 4 épreuves', duration: '45 min', type: 'PDF + Quiz', icon: 'FileText', color: 'bg-blue-50 text-blue-600' },
          { title: 'Système de notation et scores requis', duration: '60 min', type: 'Exercice', icon: 'Target', color: 'bg-green-50 text-green-600' },
          { title: 'Test diagnostic et analyse de niveau', duration: '80 min', type: 'Évaluation', icon: 'Zap', color: 'bg-yellow-50 text-yellow-600' }
        ]
      },
      {
        title: 'Module 2 : Compréhension Orale',
        week: 'Semaines 2-3',
        subtitle: 'Développer vos compétences d\'écoute et de compréhension',
        duration: '285 min',
        lessons: [
          { title: 'Techniques d\'écoute active', duration: '55 min', type: 'Vidéo + Exercice', icon: 'Play', color: 'bg-purple-50 text-purple-600' },
          { title: 'Exercices de compréhension - Niveau A2-B1', duration: '70 min', type: 'Exercice', icon: 'Target', color: 'bg-green-50 text-green-600' },
          { title: 'Exercices de compréhension - Niveau B2-C1', duration: '70 min', type: 'Exercice', icon: 'Target', color: 'bg-green-50 text-green-600' },
          { title: 'Mock test compréhension orale', duration: '90 min', type: 'Test', icon: 'Zap', color: 'bg-yellow-50 text-yellow-600' }
        ]
      },
      {
        title: 'Module 3 : Compréhension Écrite',
        week: 'Semaines 3-4',
        subtitle: 'Maîtriser la lecture et l\'analyse de textes français',
        duration: '280 min',
        lessons: [
          { title: 'Stratégies de lecture efficace', duration: '50 min', type: 'PDF + Quiz', icon: 'FileText', color: 'bg-blue-50 text-blue-600' },
          { title: 'Vocabulaire et expressions idiomatiques', duration: '65 min', type: 'Exercice', icon: 'BookOpen', color: 'bg-pink-50 text-pink-600' },
          { title: 'Pratique avec textes authentiques', duration: '75 min', type: 'Exercice', icon: 'Target', color: 'bg-green-50 text-green-600' },
          { title: 'Mock test compréhension écrite', duration: '90 min', type: 'Test', icon: 'Zap', color: 'bg-yellow-50 text-yellow-600' }
        ]
      },
      {
        title: 'Module 4 : Expression Orale',
        week: 'Semaine 5',
        subtitle: 'S\'exprimer avec aisance et confiance',
        duration: '230 min',
        lessons: [
          { title: 'Préparation à l\'entretien', duration: '60 min', type: 'Vidéo', icon: 'Play', color: 'bg-purple-50 text-purple-600' },
          { title: 'Pratique avec exercices types', duration: '80 min', type: 'Exercice', icon: 'Target', color: 'bg-green-50 text-green-600' },
          { title: 'Simulations d\'examen oral', duration: '90 min', type: 'Test', icon: 'Zap', color: 'bg-yellow-50 text-yellow-600' }
        ]
      },
      {
        title: 'Module 5 : Expression Écrite',
        week: 'Semaine 5',
        subtitle: 'Rédiger avec précision et style',
        duration: '190 min',
        lessons: [
          { title: 'Méthodologie de rédaction', duration: '55 min', type: 'PDF', icon: 'FileText', color: 'bg-blue-50 text-blue-600' },
          { title: 'Exercices de rédaction guidée', duration: '75 min', type: 'Exercice', icon: 'BookOpen', color: 'bg-pink-50 text-pink-600' },
          { title: 'Correction personnalisée', duration: '60 min', type: 'Feedback', icon: 'Check', color: 'bg-green-50 text-green-600' }
        ]
      },
      {
        title: 'Module 6 : Examens Blancs et Révisions',
        week: 'Semaine 6',
        subtitle: 'Mise en pratique et consolidation',
        duration: '465 min',
        lessons: [
          { title: 'Examen blanc complet - Session 1', duration: '180 min', type: 'Test', icon: 'Zap', color: 'bg-yellow-50 text-yellow-600' },
          { title: 'Analyse des résultats et points à améliorer', duration: '60 min', type: 'Feedback', icon: 'Target', color: 'bg-green-50 text-green-600' },
          { title: 'Examen blanc complet - Session 2', duration: '180 min', type: 'Test', icon: 'Zap', color: 'bg-yellow-50 text-yellow-600' },
          { title: 'Conseils finaux et gestion du stress', duration: '45 min', type: 'PDF + Vidéo', icon: 'Play', color: 'bg-purple-50 text-purple-600' }
        ]
      }
    ],
    features: [
      'Préparation complète aux 4 épreuves du TCF',
      '24 leçons structurées et progressives',
      'Examens blancs en conditions réelles',
      'Correction personnalisée de vos productions',
      'Accès aux ressources en ligne 24/7',
      'Support pédagogique illimité',
      'Certificat de formation',
      'Garantie de progression de niveau'
    ]
  },
  'tef-canada': {
    nameKey: 'TEF Canada',
    fullTitle: 'Préparation Complète TEF Canada',
    subtitle: 'Votre passeport pour l\'immigration canadienne',
    description: 'Programme spécialisé pour maximiser vos points d\'immigration au Canada. Maîtrisez le TEF avec nos stratégies éprouvées.',
    duration: '8 Semaines',
    lessons: 32,
    students: '120+',
    level: 'Intermédiaire+',
    language: 'Français',
    price: '329',
    originalPrice: '449',
    discount: '27',
    rating: 4.8,
    reviews: 98,
    color: 'red',
    gradientFrom: 'from-red-500',
    gradientTo: 'to-orange-500',
    badges: [
      { text: '🇨🇦 Canada', color: 'bg-red-500', icon: Globe },
      { text: 'Immigration', color: 'bg-green-500', icon: TrendingUp },
      { text: '4 Compétences', color: 'bg-blue-500', icon: Award },
      { text: '8 Semaines', color: 'bg-yellow-500', icon: Calendar }
    ],
    highlights: [
      { icon: Star, text: 'Stratégie immigration', color: 'text-red-500' },
      { icon: Target, text: 'Maximisation points', color: 'text-orange-500' },
      { icon: Shield, text: 'Format TEF officiel', color: 'text-green-500' },
      { icon: Award, text: 'Certificat reconnu', color: 'text-blue-500' }
    ],
    modules: [
      {
        title: 'Module 1 : Introduction au TEF Canada',
        week: 'Semaine 1',
        subtitle: 'Comprendre le test et ses enjeux pour l\'immigration',
        duration: '105 min',
        lessons: [
          { title: 'Structure du TEF Canada', duration: '45 min', type: 'PDF + Quiz', icon: 'FileText', color: 'bg-blue-50 text-blue-600' },
          { title: 'Système de points pour l\'immigration', duration: '60 min', type: 'Cours', icon: 'Target', color: 'bg-green-50 text-green-600' }
        ]
      }
    ],
    features: [
      'Focus immigration Canada',
      'Simulations d\'examen TEF',
      'Stratégies de maximisation des points',
      'Pratique intensive des 4 compétences',
      'Ressources officielles TEF',
      'Support personnalisé'
    ]
  },
  'ielts': {
    nameKey: 'IELTS',
    fullTitle: 'IELTS Academic & General Preparation',
    subtitle: 'Your gateway to international opportunities',
    description: 'Complete preparation for IELTS Academic and General Training. Achieve your target band score with proven strategies.',
    duration: '10 Weeks',
    lessons: 40,
    students: '200+',
    level: 'Intermediate+',
    language: 'English',
    price: '349',
    originalPrice: '499',
    discount: '30',
    rating: 4.9,
    reviews: 215,
    color: 'purple',
    gradientFrom: 'from-blue-600',
    gradientTo: 'to-purple-600',
    badges: [
      { text: '🌍 International', color: 'bg-blue-600', icon: Globe },
      { text: 'Academic + General', color: 'bg-purple-500', icon: BookOpen },
      { text: 'Band 7+', color: 'bg-green-500', icon: TrendingUp },
      { text: '10 Weeks', color: 'bg-yellow-500', icon: Calendar }
    ],
    highlights: [
      { icon: Star, text: '97% success rate', color: 'text-blue-600' },
      { icon: Award, text: 'Band score guarantee', color: 'text-purple-500' },
      { icon: Users, text: 'Small group classes', color: 'text-green-500' },
      { icon: Headphones, text: '24/7 support', color: 'text-orange-500' }
    ],
    modules: [
      {
        title: 'Module 1: Introduction to IELTS',
        week: 'Week 1',
        subtitle: 'Understanding the test format and scoring',
        duration: '170 min',
        lessons: [
          { title: 'IELTS Overview - All sections', duration: '50 min', type: 'Video', icon: 'Play', color: 'bg-purple-50 text-purple-600' },
          { title: 'Diagnostic test', duration: '120 min', type: 'Test', icon: 'Zap', color: 'bg-yellow-50 text-yellow-600' }
        ]
      }
    ],
    features: [
      'Academic & General Training tracks',
      'Full mock exams',
      'Speaking practice with feedback',
      'Writing correction service',
      'Vocabulary building modules',
      'Score guarantee program'
    ]
  },
  'goethe': {
    nameKey: 'Goethe German',
    fullTitle: 'Goethe-Zertifikat Preparation',
    subtitle: 'Master German Language Certification',
    description: 'Comprehensive German certification preparation for all levels. From A1 to C2, achieve your certification goals.',
    duration: '12 Weeks',
    lessons: 48,
    students: '80+',
    level: 'All Levels',
    language: 'German',
    price: '379',
    originalPrice: '529',
    discount: '28',
    rating: 4.7,
    reviews: 63,
    color: 'gray',
    gradientFrom: 'from-gray-700',
    gradientTo: 'to-gray-900',
    badges: [
      { text: '🇩🇪 Deutschland', color: 'bg-gray-800', icon: Globe },
      { text: 'A1-C2', color: 'bg-blue-500', icon: TrendingUp },
      { text: 'Zertifikat', color: 'bg-green-500', icon: Award },
      { text: '12 Wochen', color: 'bg-yellow-500', icon: Calendar }
    ],
    highlights: [
      { icon: Star, text: 'All CEFR levels', color: 'text-gray-700' },
      { icon: Shield, text: 'Official Goethe prep', color: 'text-blue-600' },
      { icon: Users, text: 'Native instructors', color: 'text-green-500' },
      { icon: Award, text: 'Certificate ready', color: 'text-yellow-600' }
    ],
    modules: [
      {
        title: 'Module 1: German Basics & Exam Structure',
        week: 'Woche 1',
        subtitle: 'Foundation and test overview',
        duration: '105 min',
        lessons: [
          { title: 'Goethe exam structure', duration: '45 min', type: 'PDF', icon: 'FileText', color: 'bg-blue-50 text-blue-600' },
          { title: 'Level assessment', duration: '60 min', type: 'Test', icon: 'Zap', color: 'bg-yellow-50 text-yellow-600' }
        ]
      }
    ],
    features: [
      'All levels (A1 to C2)',
      'Grammar mastery',
      'Conversation practice',
      'Cultural immersion',
      'Mock exams',
      'Certificate preparation'
    ]
  }
}

const relatedCourses = [
  {
    id: 'tef-canada',
    badge: '🇨🇦 Canada',
    badgeColor: 'bg-red-500',
    title: 'TEF Canada',
    description: 'Préparation immigration Canada',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    id: 'delf-dalf',
    badge: '🎓 Diplôme',
    badgeColor: 'bg-yellow-500',
    title: 'DELF/DALF',
    description: 'Certification officielle français',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'ielts',
    badge: '🌍 International',
    badgeColor: 'bg-blue-600',
    title: 'IELTS',
    description: 'Test anglais reconnu mondialement',
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    id: 'goethe',
    badge: '🇩🇪 Allemagne',
    badgeColor: 'bg-gray-700',
    title: 'Goethe German',
    description: 'Certification allemand Goethe',
    gradient: 'from-gray-700 to-gray-900'
  }
]

export default function CourseDetail({ slug }: { slug: string }) {
  const { language } = useLanguage()
  const course = courseData[slug]
  const [expandedModules, setExpandedModules] = useState<number[]>([0])

  if (!course) {
    return <div>Course not found</div>
  }

  const toggleModule = (index: number) => {
    setExpandedModules(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const getIcon = (iconName: string) => {
    const icons: any = {
      FileText,
      Target,
      Zap,
      Play,
      BookOpen,
      Check
    }
    const Icon = icons[iconName] || FileText
    return <Icon className="w-4 h-4" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 pt-20 md:pt-24 pb-8 md:pb-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            {/* Course Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl border border-white/50"
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
                <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
                <span>/</span>
                <Link href="/courses" className="hover:text-blue-600 transition-colors">Cours</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">{course.nameKey}</span>
              </div>

              <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 md:w-5 md:h-5 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-gray-700 font-semibold text-sm md:text-base">{course.rating}</span>
                <span className="text-gray-500 text-sm md:text-base">({course.reviews} avis)</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-2 md:mb-3 leading-tight">
                {course.fullTitle}
              </h1>
              <p className="text-lg md:text-xl text-blue-600 font-semibold mb-3 md:mb-4">{course.subtitle}</p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">{course.description}</p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                {course.badges.map((badge: any, index: number) => {
                  const IconComponent = badge.icon
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`${badge.color} text-white px-3 py-2 md:px-4 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold shadow-lg flex items-center gap-1.5 md:gap-2`}
                    >
                      <IconComponent className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="hidden sm:inline">{badge.text}</span>
                      <span className="sm:hidden">{badge.text.split(' ')[0]}</span>
                    </motion.div>
                  )
                })}
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
                {course.highlights.map((highlight: any, index: number) => {
                  const IconComponent = highlight.icon
                  return (
                    <div key={index} className="flex items-center gap-2 md:gap-3">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br ${course.gradientFrom} ${course.gradientTo} flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <span className="text-sm md:text-base text-gray-700 font-medium">{highlight.text}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* Video Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden aspect-video group shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer shadow-2xl group-hover:bg-white transition-all"
                >
                  <Play className="w-10 h-10 text-blue-600 ml-1" fill="currentColor" />
                </motion.div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <div className="flex items-center gap-2 text-white">
                  <Video className="w-5 h-5" />
                  <span className="font-semibold">Aperçu du cours</span>
                </div>
              </div>
            </motion.div>

            {/* Program Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${course.gradientFrom} ${course.gradientTo} flex items-center justify-center`}>
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Programme Détaillé</h2>
                  <p className="text-gray-600">Notre programme sur {course.duration.toLowerCase()}</p>
                </div>
              </div>

              {/* Modules */}
              <div className="space-y-4">
                {course.modules.map((module: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="group"
                  >
                    <div className="border-2 border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-300 hover:shadow-lg bg-white">
                      {/* Module Header */}
                      <button
                        onClick={() => toggleModule(index)}
                        className="w-full bg-gradient-to-r from-gray-50 to-blue-50/30 hover:from-blue-50 hover:to-purple-50/30 transition-all px-6 py-5 flex items-center justify-between group-hover:shadow-sm"
                      >
                        <div className="flex items-center gap-4 text-left flex-1">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className={`w-12 h-12 bg-gradient-to-br ${course.gradientFrom} ${course.gradientTo} rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg`}
                          >
                            {index + 1}
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                              <h3 className="text-lg font-bold text-gray-900">{module.title}</h3>
                              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-lg">
                                {module.week}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-1">{module.subtitle}</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                <span>{module.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <BookOpen className="w-3 h-3" />
                                <span>{module.lessons.length} leçons</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedModules.includes(index) ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className={`w-6 h-6 ${course.gradientFrom.replace('from-', 'text-')} flex-shrink-0`} />
                        </motion.div>
                      </button>

                      {/* Module Content */}
                      <AnimatePresence>
                        {expandedModules.includes(index) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 py-4 space-y-3 bg-gradient-to-br from-white to-gray-50/50">
                              {module.lessons.map((lesson: any, lessonIndex: number) => (
                                <motion.div
                                  key={lessonIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: lessonIndex * 0.05 }}
                                  className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-all group/lesson border border-gray-100 hover:border-blue-200"
                                >
                                  <div className="flex items-center gap-3 flex-1">
                                    <div className={`w-10 h-10 ${lesson.color} rounded-xl flex items-center justify-center group-hover/lesson:scale-110 transition-transform shadow-sm`}>
                                      {getIcon(lesson.icon)}
                                    </div>
                                    <div className="flex-1">
                                      <p className="font-semibold text-gray-900 group-hover/lesson:text-blue-600 transition-colors">
                                        {lesson.title}
                                      </p>
                                      <div className="flex items-center gap-3 mt-1">
                                        <span className="text-sm text-gray-500 flex items-center gap-1">
                                          <Clock className="w-3 h-3" />
                                          {lesson.duration}
                                        </span>
                                        <span className="px-2 py-0.5 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 text-xs font-semibold rounded-md">
                                          {lesson.type}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <motion.div
                                    whileHover={{ x: 5 }}
                                    className="opacity-0 group-hover/lesson:opacity-100 transition-opacity"
                                  >
                                    <Play className="w-5 h-5 text-blue-600" />
                                  </motion.div>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Brochure Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-gradient-to-r ${course.gradientFrom} ${course.gradientTo} rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group cursor-pointer`}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
                    <FileText className="w-8 h-8" />
                    Brochure Du Cours {course.nameKey}
                  </h3>
                  <p className="text-white/90 text-lg">Téléchargez le programme complet avec tous les modules et détails...</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all flex items-center gap-3 group-hover:bg-yellow-400"
                >
                  <Download className="w-6 h-6" />
                  Télécharger PDF
                </motion.button>
              </div>
            </motion.div>

            {/* Related Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
                Découvrez Nos Autres Préparations
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Choisissez le test qui correspond à vos objectifs
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedCourses.filter(c => c.id !== slug).slice(0, 3).map((relatedCourse, idx) => (
                  <Link
                    key={relatedCourse.id}
                    href={`/courses/${relatedCourse.id}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-gray-100 hover:border-blue-300"
                    >
                      <div className={`w-full h-32 bg-gradient-to-br ${relatedCourse.gradient} rounded-xl mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                        <span className="text-4xl">{relatedCourse.badge.split(' ')[0]}</span>
                      </div>
                      <span className={`${relatedCourse.badgeColor} text-white px-3 py-1 rounded-lg text-xs font-semibold inline-block mb-3`}>
                        {relatedCourse.badge}
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {relatedCourse.title}
                      </h4>
                      <p className="text-sm text-gray-600">{relatedCourse.description}</p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:sticky lg:top-24 space-y-6"
            >
              {/* Pricing Card */}
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-gray-100 hover:border-blue-300 transition-all">
                {/* Price Section */}
                <div className="mb-6 pb-6 border-b-2 border-gray-100">
                  <div className="flex flex-wrap items-baseline gap-2 md:gap-3 mb-2">
                    <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${course.gradientFrom} ${course.gradientTo} bg-clip-text text-transparent`}>
                      {course.price} DT
                    </span>
                    <span className="text-xl md:text-2xl text-gray-400 line-through">{course.originalPrice} DT</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                    <span className="text-green-600 font-bold text-base md:text-lg">Promo spéciale -{course.discount}%</span>
                  </div>
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-3 md:p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-red-700">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span className="text-xs md:text-sm font-semibold">Offre limitée - Plus que 3 places !</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 mb-6 md:mb-8">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${course.gradientFrom} ${course.gradientTo} text-white py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold hover:shadow-2xl transition-all flex items-center justify-center gap-2 md:gap-3 group text-sm md:text-base`}
                  >
                    <Award className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform flex-shrink-0" />
                    <span>S'inscrire Maintenant</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-green-600 text-white py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold hover:shadow-2xl hover:bg-green-700 transition-all flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base"
                  >
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                    <span>Demander des Infos</span>
                  </motion.button>
                </div>

                {/* Course Details */}
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 pb-6 md:pb-8 border-b-2 border-gray-100">
                  <h3 className="font-bold text-gray-900 text-base md:text-lg mb-3 md:mb-4">Détails Du Cours</h3>

                  {[
                    { icon: Clock, label: 'Durée', value: course.duration, color: 'blue' },
                    { icon: BookOpen, label: 'Leçons', value: `${course.lessons} Leçons`, color: 'purple' },
                    { icon: Users, label: 'Étudiants', value: course.students, color: 'green' },
                    { icon: TrendingUp, label: 'Niveau', value: course.level, color: 'orange' },
                    { icon: Globe, label: 'Langue', value: course.language, color: 'cyan' }
                  ].map((detail, index) => {
                    const IconComponent = detail.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index }}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl hover:bg-gray-50 transition-all cursor-default"
                      >
                        <div className={`w-10 h-10 md:w-12 md:h-12 bg-${detail.color}-100 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className={`w-5 h-5 md:w-6 md:h-6 text-${detail.color}-600`} />
                        </div>
                        <div>
                          <p className="text-xs md:text-sm text-gray-600">{detail.label}</p>
                          <p className="font-bold text-sm md:text-base text-gray-900">{detail.value}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-bold text-gray-900 text-base md:text-lg mb-3 md:mb-4">Ce que vous apprendrez</h3>
                  <div className="space-y-2.5 md:space-y-3">
                    {course.features.slice(0, 6).map((feature: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index }}
                        className="flex items-start gap-2 md:gap-3 group"
                      >
                        <div className="w-5 h-5 md:w-6 md:h-6 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-500 group-hover:scale-110 transition-all">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-green-600 group-hover:text-white" />
                        </div>
                        <span className="text-xs md:text-sm text-gray-700 group-hover:text-gray-900 transition-colors leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Money Back Guarantee */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="mt-6 md:mt-8 p-3 md:p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl md:rounded-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-sm md:text-base text-green-900">Garantie satisfait ou remboursé</p>
                      <p className="text-xs md:text-sm text-green-700">30 jours pour changer d'avis</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

