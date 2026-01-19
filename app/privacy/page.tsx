import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Politique de Confidentialité - Alto Tests',
    description: 'Découvrez comment Alto Tests protège vos données personnelles.',
}

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 pt-24 pb-16">
            <div className="container-custom px-4 sm:px-6 lg:px-8">
                {/* Back Button - Desktop Only */}
                <div className="hidden md:block mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-gray-700 hover:text-green-600 hover:border-green-300 hover:bg-green-50 transition-all shadow-sm hover:shadow-md group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Retour à l'accueil</span>
                    </Link>
                </div>

                {/* Header */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 mb-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                                Politique de Confidentialité
                            </h1>
                            <p className="text-gray-600 mt-2">Dernière mise à jour: Décembre 2024</p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-white/50">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 mb-6 text-lg">
                            Chez Alto Tests, nous accordons une grande importance à la protection de vos données personnelles. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informations que Nous Collectons</h2>
                        <p className="text-gray-700 mb-4">
                            Nous collectons différents types d'informations dans le cadre de nos services :
                        </p>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Informations Personnelles</h3>
                        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                            <li>Nom et prénom</li>
                            <li>Adresse email</li>
                            <li>Numéro de téléphone</li>
                            <li>Adresse postale</li>
                            <li>Date de naissance</li>
                            <li>Niveau de langue actuel</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Informations de Paiement</h3>
                        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                            <li>Informations de carte bancaire (traitées de manière sécurisée)</li>
                            <li>Historique des transactions</li>
                            <li>Détails de facturation</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Données d'Utilisation</h3>
                        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                            <li>Adresse IP</li>
                            <li>Type de navigateur et appareil</li>
                            <li>Pages visitées et temps passé sur le site</li>
                            <li>Résultats aux tests et évaluations</li>
                            <li>Progression dans les cours</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Comment Nous Utilisons Vos Informations</h2>
                        <p className="text-gray-700 mb-4">
                            Nous utilisons vos données personnelles pour :
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                            <li>Gérer votre inscription et votre compte</li>
                            <li>Fournir nos services de formation</li>
                            <li>Traiter vos paiements</li>
                            <li>Communiquer avec vous concernant vos cours</li>
                            <li>Améliorer nos services et votre expérience</li>
                            <li>Envoyer des informations sur nos programmes (avec votre consentement)</li>
                            <li>Respecter nos obligations légales</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Partage de Vos Informations</h2>
                        <p className="text-gray-700 mb-6">
                            Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations uniquement avec :
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                            <li>Nos formateurs et personnel autorisé (dans le cadre de la prestation de services)</li>
                            <li>Nos prestataires de services (paiement, hébergement, etc.) liés par des accords de confidentialité</li>
                            <li>Les autorités compétentes si la loi l'exige</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sécurité de Vos Données</h2>
                        <p className="text-gray-700 mb-4">
                            Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données :
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                            <li>Chiffrement SSL/TLS pour les transmissions de données</li>
                            <li>Accès restreint aux données personnelles</li>
                            <li>Serveurs sécurisés et protégés</li>
                            <li>Sauvegardes régulières des données</li>
                            <li>Formation du personnel à la protection des données</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Conservation des Données</h2>
                        <p className="text-gray-700 mb-6">
                            Nous conservons vos données personnelles aussi longtemps que nécessaire pour fournir nos services et respecter nos obligations légales. En général, vos données sont conservées pendant la durée de votre relation avec Alto Tests et jusqu'à 5 ans après la fin de celle-ci.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Vos Droits</h2>
                        <p className="text-gray-700 mb-4">
                            Conformément à la réglementation en vigueur, vous disposez des droits suivants :
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                            <li><strong>Droit d'accès:</strong> Obtenir une copie de vos données personnelles</li>
                            <li><strong>Droit de rectification:</strong> Corriger vos données inexactes ou incomplètes</li>
                            <li><strong>Droit à l'effacement:</strong> Demander la suppression de vos données (sous certaines conditions)</li>
                            <li><strong>Droit d'opposition:</strong> Vous opposer au traitement de vos données à des fins marketing</li>
                            <li><strong>Droit à la portabilité:</strong> Recevoir vos données dans un format structuré</li>
                            <li><strong>Droit de limitation:</strong> Demander la limitation du traitement de vos données</li>
                        </ul>

                        <p className="text-gray-700 mb-6">
                            Pour exercer ces droits, contactez-nous à l'adresse: privacy@altotests.tn
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies et Technologies Similaires</h2>
                        <p className="text-gray-700 mb-4">
                            Notre site utilise des cookies pour améliorer votre expérience. Les cookies sont de petits fichiers stockés sur votre appareil. Nous utilisons :
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                            <li><strong>Cookies essentiels:</strong> Nécessaires au fonctionnement du site</li>
                            <li><strong>Cookies de performance:</strong> Pour analyser l'utilisation du site</li>
                            <li><strong>Cookies de personnalisation:</strong> Pour mémoriser vos préférences</li>
                        </ul>
                        <p className="text-gray-700 mb-6">
                            Vous pouvez contrôler les cookies via les paramètres de votre navigateur.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Liens Externes</h2>
                        <p className="text-gray-700 mb-6">
                            Notre site peut contenir des liens vers des sites tiers. Nous ne sommes pas responsables des pratiques de confidentialité de ces sites. Nous vous encourageons à lire leurs politiques de confidentialité.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Mineurs</h2>
                        <p className="text-gray-700 mb-6">
                            Nos services sont destinés aux personnes âgées de 16 ans et plus. Si nous découvrons que nous avons collecté des données d'un mineur sans autorisation parentale, nous supprimerons ces informations immédiatement.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modifications de Cette Politique</h2>
                        <p className="text-gray-700 mb-6">
                            Nous pouvons mettre à jour cette politique de confidentialité périodiquement. Nous vous informerons de tout changement significatif en publiant la nouvelle politique sur notre site et en mettant à jour la date de "dernière mise à jour".
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Nous Contacter</h2>
                        <p className="text-gray-700 mb-2">
                            Pour toute question concernant cette politique de confidentialité ou vos données personnelles :
                        </p>
                        <ul className="list-none text-gray-700 space-y-2">
                            <li><strong>Email:</strong> privacy@altotests.tn</li>
                            <li><strong>Téléphone:</strong> +216 29 616 525</li>
                            <li><strong>Adresse:</strong> Alto Tests, Tunis, Tunisie</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
