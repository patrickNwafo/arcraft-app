import About from '@/components/About'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero className="pt-32 pb-0 lg:pb-10" />
      <About className="py-16 lg:py-32 overflow-hidden" />
    </>
  )
}
