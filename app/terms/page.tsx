import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Conditions Générales d\'Utilisation - Alto Tests',
    description: 'Consultez les conditions générales d\'utilisation des services Alto Tests.',
}

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 pt-24 pb-16">
            <div className="container-custom px-4 sm:px-6 lg:px-8">
                {/* Back Button - Desktop Only */}
                <div className="hidden md:block mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-gray-700 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-all shadow-sm hover:shadow-md group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Retour à l'accueil</span>
                    </Link>
                </div>

                {/* Header */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 mb-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                            <FileText className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                                Conditions Générales d'Utilisation
                            </h1>
                            <p className="text-gray-600 mt-2">Dernière mise à jour: Décembre 2024</p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-white/50">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptation des Conditions</h2>
                        <p className="text-gray-700 mb-6">
                            En accédant et en utilisant les services d'Alto Tests, vous acceptez d'être lié par les présentes conditions générales d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description des Services</h2>
                        <p className="text-gray-700 mb-6">
                            Alto Tests propose des services de préparation aux tests de langue internationaux, incluant mais non limité au TCF France, TEF Canada, IELTS, et Goethe. Nos services comprennent :
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                            <li>Cours de préparation en ligne et en présentiel</li>
                            <li>Examens blancs et évaluations</li>
                            <li>Support pédagogique personnalisé</li>
                            <li>Ressources d'apprentissage et matériel didactique</li>
                            <li>Corrections et feedbacks personnalisés</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Inscription et Compte Utilisateur</h2>
                        <p className="text-gray-700 mb-4">
                            Pour accéder à certains services, vous devez créer un compte utilisateur. Vous vous engagez à :
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                            <li>Fournir des informations exactes, complètes et à jour</li>
                            <li>Maintenir la confidentialité de vos identifiants de connexion</li>
                            <li>Nous informer immédiatement de toute utilisation non autorisée de votre compte</li>
                            <li>Être responsable de toutes les activités effectuées via votre compte</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Tarifs et Paiement</h2>
                        <p className="text-gray-700 mb-4">
                            Les tarifs de nos services sont indiqués en dinars tunisiens (DT) et peuvent être modifiés sans préavis. Le paiement peut s'effectuer par :
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                            <li>Carte bancaire</li>
                            <li>Virement bancaire</li>
                            <li>Paiement en espèces au centre</li>
                            <li>Paiement mobile (D17, etc.)</li>
                        </ul>
                        <p className="text-gray-700 mb-6">
                            Le paiement confirme votre inscription au programme choisi. Aucun remboursement ne sera effectué après le début des cours, sauf cas de force majeure dûment justifié.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Propriété Intellectuelle</h2>
                        <p className="text-gray-700 mb-6">
                            Tous les contenus présents sur notre plateforme (cours, documents, vidéos, exercices, etc.) sont la propriété exclusive d'Alto Tests et sont protégés par les lois sur la propriété intellectuelle. Toute reproduction, distribution ou utilisation non autorisée est strictement interdite.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Obligations de l'Étudiant</h2>
                        <p className="text-gray-700 mb-4">
                            En tant qu'étudiant, vous vous engagez à :
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                            <li>Assister régulièrement aux cours et formations</li>
                            <li>Respecter le règlement intérieur du centre</li>
                            <li>Maintenir un comportement respectueux envers le personnel et les autres étudiants</li>
                            <li>Ne pas partager vos accès avec des tiers</li>
                            <li>Utiliser les ressources pédagogiques uniquement à des fins personnelles</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Annulation et Remboursement</h2>
                        <p className="text-gray-700 mb-6">
                            Les annulations doivent être notifiées par écrit au moins 7 jours avant le début du cours pour être éligibles à un remboursement de 50% des frais payés. Aucun remboursement ne sera accordé pour les annulations effectuées moins de 7 jours avant le début des cours ou après le commencement de ceux-ci.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation de Responsabilité</h2>
                        <p className="text-gray-700 mb-6">
                            Alto Tests s'engage à fournir des services de qualité mais ne garantit pas l'obtention d'un score spécifique aux examens officiels. Nous ne sommes pas responsables des résultats obtenus aux tests officiels, ces derniers étant soumis à de nombreux facteurs indépendants de notre volonté.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Protection des Données Personnelles</h2>
                        <p className="text-gray-700 mb-6">
                            Nous nous engageons à protéger vos données personnelles conformément à notre Politique de Confidentialité et aux lois en vigueur. Vos informations ne seront jamais vendues ou partagées avec des tiers sans votre consentement explicite.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modification des Conditions</h2>
                        <p className="text-gray-700 mb-6">
                            Alto Tests se réserve le droit de modifier les présentes conditions à tout moment. Les modifications entreront en vigueur dès leur publication sur notre site web. Il est de votre responsabilité de consulter régulièrement ces conditions.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Droit Applicable et Juridiction</h2>
                        <p className="text-gray-700 mb-6">
                            Les présentes conditions sont régies par le droit tunisien. En cas de litige, les tribunaux de Tunis seront seuls compétents.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact</h2>
                        <p className="text-gray-700 mb-2">
                            Pour toute question concernant ces conditions, veuillez nous contacter :
                        </p>
                        <ul className="list-none text-gray-700 space-y-2">
                            <li><strong>Email:</strong> contact@altotests.tn</li>
                            <li><strong>Téléphone:</strong> +216 29 616 525</li>
                            <li><strong>Adresse:</strong> Tunis, Tunisie</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
