import About from '@/components/About'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Testimonial from '@/components/Testimonial'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero className="pt-32 pb-0 lg:pb-10" />
      <About className="py-16 lg:py-32 overflow-hidden" />
      <HowItWorks className="py-16 !pt-32 lg:py-32" />
      <Testimonial className="py-16 lg:py-32" />
    </>
  )
}
