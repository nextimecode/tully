import { Metadata } from 'next'

import { BenefitsSection } from '@/components/BenefitsSection'
import { FAQ } from '@/components/FAQ'
import { FeaturesSection } from '@/components/FeaturesSection'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { ServicesSection } from '@/components/services-section'
import { TestimonialsSection } from '@/components/TestimonialsSection'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'From bold visuals to interactive elements, this template is fully customizable to suit your unique needs and preferences.',
  robots: 'max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  alternates: {
    canonical: 'https://preline.co/'
  },
  twitter: {
    site: '@preline',
    creator: '@preline',
    card: 'summary_large_image',
    title:
      'Creative Agency Demo Template Tailwind CSS | Preline UI, crafted with Tailwind CSS',
    description:
      'From bold visuals to interactive elements, this template is fully customizable to suit your unique needs and preferences.',
    images: ['https://preline.co/assets/img/og-image.png']
  },
  openGraph: {
    url: 'https://preline.co/',
    locale: 'en_US',
    type: 'website',
    siteName: 'Preline',
    title:
      'Creative Agency Demo Template Tailwind CSS | Preline UI, crafted with Tailwind CSS',
    description:
      'From bold visuals to interactive elements, this template is fully customizable to suit your unique needs and preferences.',
    images: ['https://preline.co/assets/img/og-image.png']
  }
}

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-20 lg:gap-28">
        <Hero />
        <HowItWorks />
        <ServicesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <BenefitsSection />
        <FAQ />
        <Footer />
      </div>
    </main>
  )
}
