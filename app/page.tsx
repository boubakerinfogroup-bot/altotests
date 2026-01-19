import Hero from '@/components/Hero'
import About from '@/components/About'
import Stats from '@/components/Stats'
import Marquee from '@/components/Marquee'
import VideoCTA from '@/components/VideoCTA'
import Courses from '@/components/Courses'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Preloader from '@/components/Preloader'
import Features from '@/components/Features'

export default function Home() {
  return (
    <>
      {/* <Preloader /> */}
      <Hero />
      <About />
      <Stats />
      <Marquee />
      <VideoCTA />
      <Courses />
      <Pricing />
      <Testimonials />
      <CTA />
    </>
  )
}

