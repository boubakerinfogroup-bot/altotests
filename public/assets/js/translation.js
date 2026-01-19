/**
 * Language Translation System
 * Handles FR/EN toggling via Dropdown, persistence, and auto-detection.
 */

const translations = {
    fr: {
        // Nav
        nav_about: "À Propos",
        nav_courses: "Cours",
        nav_pricing: "Tarifs",
        nav_practice: "Pratique",
        nav_contact: "Contact",
        btn_enroll: "S'inscrire",
        btn_admin: "Admin",

        // Hero
        hero_title_1: "Préparez Pour",
        hero_title_2: "Vos",
        hero_subtitle: "Choississez le test à Préparer:",
        test_tcf_france: "TCF France",
        test_tef_canada: "TEF Canada",
        test_delf_dalf: "DELF/DALF",
        test_ielts: "IELTS",
        test_goethe: "Goethe",
        test_toeic: "TOEIC",
        hero_more_than: "Plus de",
        hero_students_trained: "Étudiants Formés",
        btn_whatsapp_subscribe: "Inscrivez-Vous",
        btn_your_account: "Votre Compte",

        // About
        about_know_us: "À Propos",
        about_title: "Plus de 10 ans dans l'apprentissage à distance",
        about_desc: "Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem. Imperdiet massa turpis sit proin metus volutpat.",
        about_employees: "Employés à Temps Plein",
        about_flex_classes: "Classes Flexibles",
        about_edu_support: "Soutien Éducatif",
        about_btn_learn_more: "En Savoir Plus",

        // Brand
        brand_partners: "25m+ Partenaires de Confiance",
        brand_desc: "L'éducation est le fondement de la croissance personnelle et sociétale, autonomisant les individus avec des connaissances et un esprit critique.",

        // Marquee
        marq_edu: "Éducation & Université",
        marq_online: "Éducation En Ligne",
        marq_courses: "230+ Cours de Qualité",
        marq_instructors: "Instructeurs Expérimentés",
        marq_kindergarten: "Étude Maternelle",
        marq_coupon: "Bonus Coupon 25%",

        // CTA Video
        cta_video_title: "Votre Succès en Vidéo",

        // Live Courses
        courses_live: "Cours en Direct",
        courses_title: "Débloquez le Savoir en Temps Réel\nInscrivez-vous à nos Cours en Direct",
        course_student: "Étudiant",
        course_month: "mois",
        btn_join_class: "Rejoindre la Classe",

        // Register / Contact
        reg_contact_alto: "Contactez Alto Tests",
        reg_stay_touch: "Restons en Contact",
        reg_desc: "Nous sommes là pour répondre à toutes vos questions sur nos préparations aux tests de langue.",
        reg_email_label: "Email:",
        reg_whatsapp_label: "WhatsApp:",
        reg_create_account: "Créer votre compte gratuit",
        form_name_ph: "Votre Nom",
        form_email_ph: "Email",
        form_phone_ph: "Téléphone",
        btn_start_now: "Commencer Maintenant",

        // Pricing
        price_package: "Forfait Tarifaire",
        price_title: "Tarification Flexible pour Apprenants",
        price_per_month: "par mois",
        price_undergrad: "Premier Cycle",
        price_graduate: "Programmes Gradués",
        price_online: "Programmes En Ligne",
        price_plan_desc: "Inclut toutes les fonctionnalités du plan standard, conseils financiers personnalisés.",
        btn_choose_plan: "Choisir le Plan",
        price_feat_individual: "Cours Individuel",
        price_feat_checks: "Contrôles d'Apprentissage",
        price_feat_offline: "Apprentissage Hors Ligne",
        price_feat_video: "Vidéos Haute Résolution",
        price_feat_support: "Support Dédié 24/7",
        price_feat_practice: "Sessions de pratique interactives",

        // Testimonials
        testi_reviews: "Avis des Étudiants",
        testi_title: "Ce que disent nos étudiants de nos cours",
        testi_best_quality: "Meilleure Qualité",
        testi_quote: "\"Le contenu du cours était facile à suivre et les instructeurs étaient disponibles pour répondre aux questions\"",
        testi_role: "Web Designer",

        // Footer
        footer_instr_title: "Devenir Instructeur ?",
        footer_instr_desc: "Devenir instructeur nécessite une combinaison d'expertise et de passion.",
        footer_stud_title: "Devenir Étudiant ?",
        footer_stud_desc: "Devenir étudiant est une transformation qui ouvre des portes.",
        btn_get_started: "Commencer",
        footer_online_plat: "Plateforme En Ligne",
        footer_quick_link: "Liens Rapides",
        footer_desc: "L'éducation est la fondation de la croissance personnelle et sociétale, autonomisant les individus avec le savoir.",
        footer_copyright: "Copyright © Modinatheme, tous droits réservés.",

        // Global / Misc
        lang_fr: "Français",
        lang_en: "Anglais",
        // Privacy
        privacy_title: "Politique de Confidentialité",
        privacy_info_collect: "Informations que nous collectons",
        privacy_info_text: "L'éducation est un aspect vital du développement de l'enfant. Les écoles maternelles, primaires et collèges jouent un rôle important...",
        privacy_dev_data: "Données de l'appareil",
        privacy_log_data: "Données de journal",
        privacy_purchase: "Comment acheter un cours ?",
        privacy_credit_cards: "Cartes de crédit acceptées",
        privacy_changes: "Modifications de cette politique",

        // About & Generic
        about_page_title: "À Propos d'Eduzio",
        about_main_title: "Autonomiser votre apprenant pour un avenir meilleur",
        about_desc: "L'éducation est un processus vital qui favorise la croissance personnelle, le développement sociétal et l'avancement intellectuel...",
        years_experience: "Années d'Expérience",
        about_years_text_1: "L'éducation ne permet pas seulement aux gens de poursuivre leurs objectifs",
        about_years_text_2: "mais encourage aussi la responsabilité.",
        feature_scholarship: "Bourse d'Études",
        feature_scholarship_desc: "La bourse fournit une aide financière",
        feature_instructors: "Instructeurs Experts",
        feature_instructors_desc: "Apprenez avec les meilleurs experts",
        feature_certificate: "Programme Certifiant",
        feature_certificate_desc: "Obtenez un certificat reconnu",
        feature_admission: "Admissions Diplômés",
        feature_admission_desc: "Processus d'admission simplifié",
        team_subtitle: "Nos Certificats",
        team_title: "Nous avons des enseignants expérimentés",
        team_role: "Instructeur Senior",
        faq_subtitle: "Questions & Réponses",
        faq_title: "Questions Fréquentes ?",
        faq_q1: "Quels programmes l'université propose-t-elle ?",
        faq_a1: "Nous proposons une large gamme de programmes de premier cycle, de cycles supérieurs et professionnels...",
        faq_q2: "Comment faire une demande d'admission ?",
        faq_q3: "Quel est le ratio étudiants-professeurs ?",

        // Login / Register
        login_title_page: "Connexion",
        login_signin_title: "Se Connecter",
        login_signup_title: "Inscription",
        login_username: "Nom d'utilisateur ou email*",
        login_password: "Mot de passe*",
        login_remember: "Se souvenir de moi",
        login_lost_pass: "Mot de passe oublié ?",
        login_btn: "Se Connecter",
        register_name: "Nom*",
        register_agree: "J'accepte le contrat utilisateur et les conditions générales.",
        register_btn: "Créer un Compte",
        account_have: "Vous avez déjà un compte ?",
        account_dont_have: "Vous n'avez pas de compte ?",

        // TCF France (Most content was FR, adding Keys)
        tcf_title: "Préparation Complète TCF France",
        tcf_subtitle: "Maîtrisez le Test de Connaissance du Français pour vos études, immigration ou carrière...",
        tcf_badge_official: "Test Officiel",
        tcf_badge_comp: "Compréhension & Expression",
        tcf_badge_prep: "Préparation Intensive",
        tcf_badge_weeks: "6 Semaines",
        tcf_video_text: "Découvrez notre méthode de préparation TCF France en vidéo",
        tcf_desc_title: "Pourquoi Choisir Notre Préparation TCF ?",
        tcf_desc_text: "Notre programme de préparation au TCF France a été spécialement conçu...",
        tcf_result_title: "Résultats Garantis",
        tcf_result_text: "92% de nos étudiants atteignent leur objectif de score",
        tcf_expert_title: "Formateurs Experts",
        tcf_expert_text: "Enseignants certifiés avec 5+ ans d'expérience",
        tcf_obj_title: "Objectifs Pédagogiques",
        tcf_obj_co: "Compréhension Orale :",
        tcf_obj_co_desc: "Maîtriser les différents accents et débits",
        tcf_obj_ce: "Compréhension Écrite :",
        tcf_obj_ce_desc: "Analyser textes et documents complexes",
        tcf_obj_struct: "Structures :",
        tcf_obj_struct_desc: "Perfectionner grammaire et conjugaison",
        tcf_obj_ee: "Expression Écrite :",
        tcf_obj_ee_desc: "Rédiger avec précision et fluidité",
        tcf_obj_eo: "Expression Orale :",
        tcf_obj_eo_desc: "S'exprimer avec aisance et confiance",
        tcf_obj_strat: "Stratégie :",
        tcf_obj_strat_desc: "Optimiser son temps et ses réponses",

        tcf_prog_title: "Programme Détaillé de la Formation",
        tcf_prog_desc: "Notre programme sur 6 semaines est conçu pour une progression optimale...",
        tcf_mod1_title: "Module 1 : Découverte du TCF (Semaine 1)",
        tcf_mod1_sub: "Comprendre les enjeux et maîtriser la structure de l'examen",
        tcf_mod2_title: "Module 2 : Compréhension Orale (Semaines 2-3)",
        tcf_mod3_title: "Module 3 : Compréhension Écrite (Semaines 3-4)",
        tcf_mod4_title: "Module 4 : Maîtrise des Structures (Semaine 4)",
        tcf_mod5_title: "Module 5 : Expression (Semaines 5-6)",
        tcf_mod6_title: "Module 6 : Préparation Finale (Semaine 6)",

        tcf_download_title: "Brochure du Cours TCF France",
        tcf_download_text: "Téléchargez le programme complet avec tous les modules...",
        tcf_download_btn: "Télécharger PDF",

        tcf_price_title: "Tarifs de la Formation",
        tcf_price_promo: "Promotion spéciale -25%",
        tcf_btn_enroll: "S'inscrire Maintenant",
        tcf_btn_info: "Demander des Infos",

        tcf_details_title: "Détails du Cours",
        tcf_det_duration: "Durée",
        tcf_det_lessons: "Leçons",
        tcf_det_students: "Étudiants",
        tcf_det_level: "Niveau",
        tcf_det_cert: "Certification",
        tcf_det_success: "Taux de Réussite",
        tcf_det_level_val: "Débutant à Avancé",
        tcf_det_cert_val: "Incluse",

        tcf_help_title: "Besoin d'Aide ?",
        tcf_help_text: "Notre équipe est là pour vous accompagner",
        tcf_btn_call: "Appelez-nous",
        tcf_btn_email: "Email",

        tcf_other_title: "Découvrez Nos Autres Préparations",
        tcf_other_sub: "Choisissez le test qui correspond à vos objectifs",
        tcf_card_tef_title: "TEF Canada",
        tcf_card_tef_desc: "Préparation complète pour l'immigration canadienne",
        tcf_card_delf_title: "DELF/DALF",
        tcf_card_delf_desc: "Certification officielle de français",
        tcf_card_ielts_desc: "Test d'anglais reconnu mondialement",
        tcf_card_goethe_desc: "Certification d'allemand Goethe Institut",
        tcf_btn_all: "Voir Tous Nos Cours"
    },
    en: {
        // Nav
        nav_about: "About",
        nav_courses: "Courses",
        nav_pricing: "Pricing",
        nav_practice: "Practice",
        nav_contact: "Contact",
        btn_enroll: "Enroll Now",
        btn_admin: "Admin",

        // Hero
        hero_title_1: "Prepare For",
        hero_title_2: "Your",
        hero_subtitle: "Choose the test to prepare:",
        test_tcf_france: "TCF France",
        test_tef_canada: "TEF Canada",
        test_delf_dalf: "DELF/DALF",
        test_ielts: "IELTS",
        test_goethe: "Goethe",
        test_toeic: "TOEIC",
        hero_more_than: "More than",
        hero_students_trained: "Students Trained",
        btn_whatsapp_subscribe: "Subscribe Now",
        btn_your_account: "Your Account",

        // About
        about_know_us: "Know About Us",
        about_title: "Over 10 Years in Distant learning for Skill Development",
        about_desc: "Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem. Imperdiet massa turpis sit proin metus volutpat.",
        about_employees: "Full Time Employees",
        about_flex_classes: "Flexible Classes",
        about_edu_support: "Education Support",
        about_btn_learn_more: "Learn More",

        // Brand
        brand_partners: "25m+ Trusted Partners",
        brand_desc: "Education is the foundation of personal societal growth, empowering individuals with knowledge, skills critical thinking.",

        // Marquee
        marq_edu: "Education & University",
        marq_online: "Online Education",
        marq_courses: "230+ Quality Courses",
        marq_instructors: "Experience Instructors",
        marq_kindergarten: "Kindergarten Study",
        marq_coupon: "25% Coupon Bonus",

        // CTA Video
        cta_video_title: "Your Success in Video",

        // Live Courses
        courses_live: "Live Courses",
        courses_title: "Unlock Knowledge in Real-Time\nEnroll in Our Live Courses",
        course_student: "Student",
        course_month: "month",
        btn_join_class: "Join Live Class",

        // Register / Contact
        reg_contact_alto: "Contact Alto Tests",
        reg_stay_touch: "Keep in Touch",
        reg_desc: "We are here to answer all your questions about our language test preparations.",
        reg_email_label: "Email:",
        reg_whatsapp_label: "WhatsApp:",
        reg_create_account: "Create your free account",
        form_name_ph: "Your Name",
        form_email_ph: "Email",
        form_phone_ph: "Phone",
        btn_start_now: "Start Now",

        // Pricing
        price_package: "Pricing Package",
        price_title: "Flexible Pricing for Learner",
        price_per_month: "per monthly",
        price_undergrad: "Undergraduate",
        price_graduate: "Graduate Programs",
        price_online: "Online Programs",
        price_plan_desc: "Includes All Standard Plan features, personalized financial guidance.",
        btn_choose_plan: "Choose Plan",
        price_feat_individual: "Individual Course",
        price_feat_checks: "Course Learning Checks",
        price_feat_offline: "Offline Learning",
        price_feat_video: "High Resolution Videos",
        price_feat_support: "24/7 Dedicated Support",
        price_feat_practice: "Interactive practice sessions",

        // Testimonials
        testi_reviews: "Students Reviews",
        testi_title: "Students Say About Our Courses",
        testi_best_quality: "Best Quality",
        testi_quote: "\"The course content was and easy to follow instructors were available answer questions \"",
        testi_role: "Web Designer",

        // Footer
        footer_instr_title: "Become an Instructor?",
        footer_instr_desc: "Becoming an instructor requires the combination of expertise, passion.",
        footer_stud_title: "Become a Student?",
        footer_stud_desc: "Becoming a student is a transformative that opens the door.",
        btn_get_started: "Get Started",
        footer_online_plat: "Online Platform",
        footer_quick_link: "Quick Link",
        footer_desc: "Education the foundation personal and societal growth, empowering individuals with knowledge.",
        footer_copyright: "Copyright © Modinatheme, all rights reserved.",

        // Global / Misc
        lang_fr: "French",
        lang_en: "English",
        // Privacy
        privacy_title: "Privacy Policy",
        privacy_info_collect: "Information We Collect",
        privacy_info_text: "Education is a vital aspect of a child's development. Preschools, elementary schools, and middle schools play a significant role...",
        privacy_dev_data: "Device Data",
        privacy_log_data: "Log Data",
        privacy_purchase: "How to Purchase a Course?",
        privacy_credit_cards: "Accepted Credit Cards",
        privacy_changes: "Changes to This Policy",

        // About & Generic
        about_page_title: "About Eduzio",
        about_main_title: "Empowering your Learner for Brighter Future & business",
        about_desc: "Education is a vital process that fosters personal growth, societal development, and intellectual advancement...",
        years_experience: "Years Of Experience",
        about_years_text_1: "Education not only empowers people pursue their career goals",
        about_years_text_2: "also encourages responsible.",
        feature_scholarship: "Scholarship Facility",
        feature_scholarship_desc: "Scholarship facility provides financial assistance",
        feature_instructors: "Expert Instructors",
        feature_instructors_desc: "Learn with the best experts",
        feature_certificate: "Certificate Program",
        feature_certificate_desc: "Get a recognized certificate",
        feature_admission: "Graduate Admissions",
        feature_admission_desc: "Simplified admission process",
        team_subtitle: "Our Certificates",
        team_title: "We Have Experience Teachers",
        team_role: "Senior Instructor",
        faq_subtitle: "Question & Answer",
        faq_title: "Asked Questions?",
        faq_q1: "What programs does the university offer?",
        faq_a1: "We offer a wide range of undergraduate, graduate, and professional programs across various fields...",
        faq_q2: "How do I apply for admission?",
        faq_q3: "What is the student-to-faculty ratio?",

        // Login / Register
        login_title_page: "Login",
        login_signin_title: "Sign in",
        login_signup_title: "Registration",
        login_username: "Username or email*",
        login_password: "Password*",
        login_remember: "Remember Me",
        login_lost_pass: "Lost your password?",
        login_btn: "Sign in",
        register_name: "Name*",
        register_agree: "I agree the User Agreement and Terms & Condition.",
        register_btn: "Create Account",
        account_have: "Already have an account?",
        account_dont_have: "Don't have an account?",

        // TCF France
        tcf_title: "Complete TCF France Preparation",
        tcf_subtitle: "Master the French Knowledge Test for your studies, immigration, or career in France with our proven method",
        tcf_badge_official: "Official Test",
        tcf_badge_comp: "Comprehension & Expression",
        tcf_badge_prep: "Intensive Preparation",
        tcf_badge_weeks: "6 Weeks",
        tcf_video_text: "Discover our TCF France preparation method in video",
        tcf_desc_title: "Why Choose Our TCF Preparation?",
        tcf_desc_text: "Our TCF France preparation program was specifically designed to give you all the tools needed for your success...",
        tcf_result_title: "Guaranteed Results",
        tcf_result_text: "92% of our students reach their score goal",
        tcf_expert_title: "Expert Instructors",
        tcf_expert_text: "Certified teachers with 5+ years of experience",
        tcf_obj_title: "Pedagogical Goals",
        tcf_obj_co: "Listening Comprehension:",
        tcf_obj_co_desc: "Master different accents and speeds",
        tcf_obj_ce: "Reading Comprehension:",
        tcf_obj_ce_desc: "Analyze complex texts and documents",
        tcf_obj_struct: "Structures:",
        tcf_obj_struct_desc: "Perfect grammar and conjugation",
        tcf_obj_ee: "Written Expression:",
        tcf_obj_ee_desc: "Write with precision and fluidity",
        tcf_obj_eo: "Oral Expression:",
        tcf_obj_eo_desc: "Speak with ease and confidence",
        tcf_obj_strat: "Strategy:",
        tcf_obj_strat_desc: "Optimize your time and answers",

        tcf_prog_title: "Detailed Training Program",
        tcf_prog_desc: "Our 6-week program is designed for optimal progression...",
        tcf_mod1_title: "Module 1: TCF Discovery (Week 1)",
        tcf_mod1_sub: "Understand the stakes and master the exam structure",
        tcf_mod2_title: "Module 2: Listening Comprehension (Weeks 2-3)",
        tcf_mod3_title: "Module 3: Reading Comprehension (Weeks 3-4)",
        tcf_mod4_title: "Module 4: Mastering Structures (Week 4)",
        tcf_mod5_title: "Module 5: Expression (Weeks 5-6)",
        tcf_mod6_title: "Module 6: Final Preparation (Week 6)",

        tcf_download_title: "TCF France Course Brochure",
        tcf_download_text: "Download the complete program with all modules...",
        tcf_download_btn: "Download PDF",

        tcf_price_title: "Training Rates",
        tcf_price_promo: "Special promotion -25%",
        tcf_btn_enroll: "Enroll Now",
        tcf_btn_info: "Request Info",

        tcf_details_title: "Course Details",
        tcf_det_duration: "Duration",
        tcf_det_lessons: "Lessons",
        tcf_det_students: "Students",
        tcf_det_level: "Level",
        tcf_det_cert: "Certification",
        tcf_det_success: "Success Rate",
        tcf_det_level_val: "Beginner to Advanced",
        tcf_det_cert_val: "Included",

        tcf_help_title: "Need Help?",
        tcf_help_text: "Our team is here to support you",
        tcf_btn_call: "Call Us",
        tcf_btn_email: "Email",

        tcf_other_title: "Discover Our Other Preparations",
        tcf_other_sub: "Choose the test that matches your goals",
        tcf_card_tef_title: "TEF Canada",
        tcf_card_tef_desc: "Complete preparation for Canadian immigration",
        tcf_card_delf_title: "DELF/DALF",
        tcf_card_delf_desc: "Official French certification",
        tcf_card_ielts_desc: "Globally recognized English test",
        tcf_card_goethe_desc: "Goethe Institute German certification",
        tcf_btn_all: "View All Our Courses"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Detect Language
    let currentLang = localStorage.getItem('alto_lang');
    if (!currentLang) {
        const userLang = navigator.language || navigator.userLanguage;
        currentLang = userLang.startsWith('fr') ? 'fr' : 'en';
    }

    // 2. Initial Render
    setLanguage(currentLang);

    // 3. Bind Events (Dropdown)
    const dropdownLinks = document.querySelectorAll('.lang-drop-content a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = link.getAttribute('data-lang');
            if (newLang) {
                setLanguage(newLang);
            }
        });
    });
});

function setLanguage(lang) {
    // Update Dropdown UI
    const currentLangText = document.getElementById('current-lang-text');
    if (currentLangText) {
        currentLangText.textContent = lang.toUpperCase();
    }

    // Update Active Link State
    document.querySelectorAll('.lang-drop-content a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('data-lang') === lang) {
            a.classList.add('active');
        }
    });

    // Persist Preference
    localStorage.setItem('alto_lang', lang);

    // Update Text Content
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else if (el.children.length > 0 && !el.classList.contains('preserve-children')) {
                // For elements with icons + text, try to find text node
                const textNode = Array.from(el.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0);
                if (textNode) {
                    textNode.textContent = " " + translations[lang][key] + " ";
                } else {
                    // Fallback, replacement might wipe icon if we aren't careful, 
                    // but in our HTML structure icons are separate span or i tags usually.
                    // The safe way for mixed content where text is just a child node:
                    el.childNodes.forEach(node => {
                        if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== "") {
                            node.nodeValue = " " + translations[lang][key] + "";
                        }
                    });
                }
            } else {
                el.innerText = translations[lang][key];
            }
        }
    });
}
