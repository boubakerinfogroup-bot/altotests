'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { GraduationCap } from 'lucide-react'

const marqueeItems = [
  { icon: GraduationCap, textKey: 'marq_edu' },
  { icon: GraduationCap, textKey: 'marq_online' },
  { icon: GraduationCap, textKey: 'marq_courses' },
  { icon: GraduationCap, textKey: 'marq_instructors' },
  { icon: GraduationCap, textKey: 'marq_kindergarten' },
  { icon: GraduationCap, textKey: 'marq_coupon' },
  { icon: GraduationCap, textKey: 'marq_coupon_extra' },
]

export default function Marquee() {
  const { t } = useLanguage()

  return (
    <>
      <style jsx global>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .marquee-container {
          animation: marqueeScroll 30s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-700 py-6">
        <div className="flex marquee-container">
          {/* First set */}
          <div className="flex space-x-12 whitespace-nowrap flex-shrink-0">
            {marqueeItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={`set1-${index}`}
                  className="flex items-center space-x-3 text-white text-base md:text-lg font-semibold"
                >
                  <Icon className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
                  <span>{t(item.textKey)}</span>
                </div>
              )
            })}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex space-x-12 whitespace-nowrap flex-shrink-0">
            {marqueeItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={`set2-${index}`}
                  className="flex items-center space-x-3 text-white text-base md:text-lg font-semibold"
                >
                  <Icon className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
                  <span>{t(item.textKey)}</span>
                </div>
              )
            })}
          </div>
          {/* Third set for seamless loop */}
          <div className="flex space-x-12 whitespace-nowrap flex-shrink-0">
            {marqueeItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={`set3-${index}`}
                  className="flex items-center space-x-3 text-white text-base md:text-lg font-semibold"
                >
                  <Icon className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
                  <span>{t(item.textKey)}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

