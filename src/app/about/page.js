import React from 'react'
import Hero from '@/components/about/Hero'
import Story from '@/components/about/Story'
import WhyUs from '@/components/about/WhyUs'


const page = () => {
    return (
        <>
            <Hero className="pt-52 pb-24" />
            <Story />
            <WhyUs className="pt-52 pb-0" />
        </>
    )
}

export default page