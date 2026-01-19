import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'Alto Tests - Préparation Tests de Langue Internationaux | Tunisie',
    template: '%s | Alto Tests'
  },
  description: 'Préparation expert aux tests de langue internationaux : TEF Canada, TCF France, DELF/DALF, IELTS, Goethe German. Formation professionnelle en Tunisie pour réussir vos examens.',
  keywords: ['préparation tests langue', 'TEF Canada', 'TCF France', 'DELF', 'DALF', 'IELTS', 'Goethe German', 'TOEIC', 'cours français', 'cours anglais', 'test immigration', 'certification langue', 'Tunisie'],
  authors: [{ name: 'Alto Tests' }],
  creator: 'Alto Tests',
  publisher: 'Alto Tests',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.altotests.tn'),
  alternates: {
    canonical: '/',
    languages: {
      'fr': '/fr',
      'en': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.altotests.tn',
    title: 'Alto Tests - Préparation Tests de Langue Internationaux',
    description: 'Préparation expert pour TEF, TCF, DELF, IELTS, Goethe. Réussissez vos tests de langue avec Alto Tests en Tunisie.',
    siteName: 'Alto Tests',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alto Tests - Préparation Tests de Langue',
    description: 'Préparation expert aux tests de langue internationaux en Tunisie',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Alto Tests',
    description: 'Centre de préparation aux tests de langue internationaux en Tunisie',
    url: 'https://www.altotests.tn',
    telephone: '+21629616525',
    email: 'contact@altotests.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TN',
      addressLocality: 'Tunis',
    },
    courses: ['TEF Canada', 'TCF France', 'DELF/DALF', 'IELTS', 'Goethe German', 'TOEIC'],
  }

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <Providers>
          <div id="root">
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <ScrollToTop />
          </div>
        </Providers>
      </body>
    </html>
  )
}

