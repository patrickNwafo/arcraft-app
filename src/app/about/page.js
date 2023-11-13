import React from 'react'
import Hero from '@/components/about/Hero'
import Story from '@/components/about/Story'
import WhyUs from '@/components/about/WhyUs'
import Testimonial from '@/components/Testimonial'
import Team from '@/components/about/Team'


const page = () => {
    return (
        <>
            <Hero className="pt-52 pb-24" />
            <Story />
            <WhyUs className="pt-52 pb-0" />
            <Testimonial className="pt-10 lg-pt:44 pb-10 lg:pb-32" />
            <Team className="py-10 lg:py-32" />
        </>
    )
}

export default page