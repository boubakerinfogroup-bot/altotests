import type { Metadata } from 'next'
import AboutHero from '@/components/AboutHero'
import MissionVision from '@/components/MissionVision'
import WhyChooseUs from '@/components/WhyChooseUs'
import Certificates from '@/components/Certificates'
import WhyChooseAlto from '@/components/WhyChooseAlto'
import StatsCounter from '@/components/StatsCounter'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'À Propos - Alto Tests',
  description: 'Découvrez Alto Tests, votre partenaire de confiance pour la préparation aux tests de langue internationaux en Tunisie.',
  openGraph: {
    title: 'À Propos - Alto Tests',
    description: 'Transformer l\u0027éducation, une vie à la fois. Plus de 10 ans d\u0027excellence dans la préparation aux tests de langue.',
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <WhyChooseUs />
      <Certificates />
      <WhyChooseAlto />
      <StatsCounter />
      <FAQ />
    </>
  )
}

