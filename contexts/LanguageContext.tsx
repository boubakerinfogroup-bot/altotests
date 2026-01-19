'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'fr' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  fr: {
    // Navigation
    nav_home: 'Accueil',
    nav_about: 'À propos',
    nav_courses: 'Cours',
    nav_pricing: 'Tarifs',
    nav_practice: 'Pratique',
    nav_contact: 'Contact',
    btn_enroll: "S'inscrire",

    // Hero
    hero_title: 'Préparez Pour Vos Tests',
    hero_subtitle: 'Choisissez le test à préparer:',
    test_tcf_france: 'TCF France',
    test_tef_canada: 'TEF Canada',
    test_delf_dalf: 'DELF/DALF',
    test_ielts: 'IELTS',
    test_goethe: 'Goethe',
    test_toeic: 'TOEIC',

    // About Section
    about_badge: 'À Propos de Nous',
    about_title_1: 'Votre Partenaire de Confiance',
    about_title_2: 'Pour la Réussite',
    about_description: "Depuis plus de 10 ans, Alto Tests accompagne des milliers d'étudiants dans leur préparation aux tests de langue internationaux. Notre expertise et notre engagement garantissent votre succès.",
    about_highlight_1: "Plus de 10 ans d'expérience",
    about_highlight_2: 'Instructeurs certifiés',
    about_highlight_3: 'Taux de réussite de 95%',
    about_highlight_4: 'Support 24/7',
    about_cta: 'Découvrir Notre Histoire',
    about_feature_1_title: 'Programmes Personnalisés',
    about_feature_1_desc: 'Cours adaptés à votre niveau et vos objectifs',
    about_feature_2_title: 'Équipe Experte',
    about_feature_2_desc: 'Instructeurs qualifiés et passionnés',
    about_feature_3_title: 'Résultats Garantis',
    about_feature_3_desc: 'Méthodes éprouvées pour votre succès',
    about_years: 'Années',

    // Stats/Partners Section
    stats_badge: 'Nos Réalisations',
    stats_title_1: '25m+ Partenaires',
    stats_title_2: 'De Confiance',
    stats_description: "L'éducation est le fondement de la croissance personnelle et sociétale, autonomisant les individus avec des connaissances et un esprit critique.",

    // Courses Section
    courses_badge: 'Courses',
    courses_title: 'Débloquez les connaissances en temps réel',
    courses_subtitle: 'Inscrivez-vous à nos cours en direct',
    courses_btn_explore: 'Explorer',
    courses_btn_start: 'Start',

    // Pricing Section
    pricing_badge: '💎 Nos Tarifs',
    pricing_title_1: 'Tarifs Flexibles',
    pricing_title_2: 'Pour Tous Les Apprenants',
    pricing_description: 'Choisissez le plan qui correspond à vos objectifs et votre budget',
    pricing_plan_basic: 'Basique',
    pricing_plan_pro: 'Pro',
    pricing_plan_premium: 'Premium',
    pricing_basic_desc: 'Parfait pour commencer',
    pricing_pro_desc: 'Le plus populaire',
    pricing_premium_desc: 'Pour les plus ambitieux',
    pricing_popular: '⭐ POPULAIRE',
    pricing_per_month: '/mois',
    pricing_feature_basic_1: 'Accès aux cours de base',
    pricing_feature_basic_2: '2 tests pratiques par mois',
    pricing_feature_basic_3: 'Support par email',
    pricing_feature_basic_4: 'Matériel de cours PDF',
    pricing_feature_basic_5: 'Accès forum étudiant',
    pricing_feature_pro_1: 'Tous les cours disponibles',
    pricing_feature_pro_2: 'Tests pratiques illimités',
    pricing_feature_pro_3: 'Support prioritaire 24/7',
    pricing_feature_pro_4: 'Sessions en direct',
    pricing_feature_pro_5: 'Corrections personnalisées',
    pricing_feature_premium_1: 'Tout du plan Pro',
    pricing_feature_premium_2: 'Coaching individuel',
    pricing_feature_premium_3: 'Garantie de réussite',
    pricing_feature_premium_4: 'Accès à vie aux ressources',
    pricing_feature_premium_5: 'Préparation intensive',
    pricing_guarantee: '💳 Tous les plans incluent une garantie de remboursement de 30 jours',

    // Testimonials
    testimonials_title: 'Avis des Étudiants',
    testimonials_subtitle: 'Ce que disent les étudiants sur nos cours',

    // CTA
    cta_title: 'Contactez Alto Tests',
    cta_subtitle: 'Restons en Contact',
    cta_desc: 'Nous sommes là pour répondre à toutes vos questions.',

    // Footer
    footer_desc: "L'éducation est le fondement de la croissance personnelle et sociétale, permettant aux individus d'acquérir des connaissances.",
    footer_copyright: 'Copyright',
    footer_rights: 'Tous droits réservés.',
  },
  en: {
    // Navigation
    nav_home: 'Home',
    nav_about: 'About',
    nav_courses: 'Courses',
    nav_pricing: 'Pricing',
    nav_practice: 'Practice',
    nav_contact: 'Contact',
    btn_enroll: 'Enroll Now',

    // Hero
    hero_title: 'Prepare For Your Tests',
    hero_subtitle: 'Choose the test to prepare:',
    test_tcf_france: 'TCF France',
    test_tef_canada: 'TEF Canada',
    test_delf_dalf: 'DELF/DALF',
    test_ielts: 'IELTS',
    test_goethe: 'Goethe',
    test_toeic: 'TOEIC',

    // About Section
    about_badge: 'About Us',
    about_title_1: 'Your Trusted Partner',
    about_title_2: 'For Success',
    about_description: 'For over 10 years, Alto Tests has been supporting thousands of students in their preparation for international language tests. Our expertise and commitment guarantee your success.',
    about_highlight_1: 'Over 10 years of experience',
    about_highlight_2: 'Certified instructors',
    about_highlight_3: '95% success rate',
    about_highlight_4: '24/7 support',
    about_cta: 'Discover Our Story',
    about_feature_1_title: 'Personalized Programs',
    about_feature_1_desc: 'Courses adapted to your level and goals',
    about_feature_2_title: 'Expert Team',
    about_feature_2_desc: 'Qualified and passionate instructors',
    about_feature_3_title: 'Guaranteed Results',
    about_feature_3_desc: 'Proven methods for your success',
    about_years: 'Years',

    // Stats/Partners Section
    stats_badge: 'Our Achievements',
    stats_title_1: '25m+ Partners',
    stats_title_2: 'Of Trust',
    stats_description: 'Education is the foundation of personal and societal growth, empowering individuals with knowledge and critical thinking.',

    // Courses Section
    courses_badge: 'Courses',
    courses_title: 'Unlock Knowledge in Real-Time',
    courses_subtitle: 'Enroll in Our Live Courses',
    courses_btn_explore: 'Explore',
    courses_btn_start: 'Start',

    // Pricing Section
    pricing_badge: '💎 Our Pricing',
    pricing_title_1: 'Flexible Pricing',
    pricing_title_2: 'For All Learners',
    pricing_description: 'Choose the plan that fits your goals and budget',
    pricing_plan_basic: 'Basic',
    pricing_plan_pro: 'Pro',
    pricing_plan_premium: 'Premium',
    pricing_basic_desc: 'Perfect to get started',
    pricing_pro_desc: 'Most popular',
    pricing_premium_desc: 'For the most ambitious',
    pricing_popular: '⭐ POPULAR',
    pricing_per_month: '/month',
    pricing_feature_basic_1: 'Access to basic courses',
    pricing_feature_basic_2: '2 practice tests per month',
    pricing_feature_basic_3: 'Email support',
    pricing_feature_basic_4: 'PDF course materials',
    pricing_feature_basic_5: 'Student forum access',
    pricing_feature_pro_1: 'All courses available',
    pricing_feature_pro_2: 'Unlimited practice tests',
    pricing_feature_pro_3: 'Priority 24/7 support',
    pricing_feature_pro_4: 'Live sessions',
    pricing_feature_pro_5: 'Personalized corrections',
    pricing_feature_premium_1: 'Everything in Pro plan',
    pricing_feature_premium_2: 'Individual coaching',
    pricing_feature_premium_3: 'Success guarantee',
    pricing_feature_premium_4: 'Lifetime resource access',
    pricing_feature_premium_5: 'Intensive preparation',
    pricing_guarantee: '💳 All plans include a 30-day money-back guarantee',

    // Testimonials
    testimonials_title: 'Student Reviews',
    testimonials_subtitle: 'What students say about our courses',

    // CTA
    cta_title: 'Contact Alto Tests',
    cta_subtitle: 'Stay in Touch',
    cta_desc: 'We are here to answer all your questions.',

    // Footer
    footer_desc: 'Education is the foundation of personal and societal growth, empowering individuals with knowledge.',
    footer_copyright: 'Copyright',
    footer_rights: 'All rights reserved.',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr')

  useEffect(() => {
    // Check localStorage first
    const savedLang = localStorage.getItem('preferredLanguage') as Language
    if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
      setLanguageState(savedLang)
    } else {
      // Auto-detect from browser
      const browserLang = navigator.language || (navigator as any).userLanguage
      const detectedLang = browserLang.startsWith('fr') ? 'fr' : 'en'
      setLanguageState(detectedLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('preferredLanguage', lang)
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key
  }

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
