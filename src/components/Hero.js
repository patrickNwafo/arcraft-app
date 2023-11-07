'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const heroContent = {
    intro: {
        title: "Where Creativity Meets Structural Integrity",
        subTitle: "Welcome",
        description: "Welcome to a world where creativity meets unwavering structural integrity. At arcraft, we believe that exceptional design goes hand in hand with meticulous engineering.",
        btn: {
            href: "/projects",
            label: "View Projects"
        }
    }
}

const Hero = ({ className }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const imgScroll1 = useTransform(scrollYProgress, [0, 1,], ['20%', '-20%']);
    const imgScroll2 = useTransform(scrollYProgress, [0, 1,], ['100%', '50%']);
    return (
        <section className={`${className}`} ref={ref}>
            <div className='container px-4 mx-auto'>
                <div className='lg:flex w-full lg:w-10/12 mx-auto h-auto lg:h-screen lg:min-h-[700px] items-center justify-between'>

                    <div className='lg:w-4/12 z-[3] relative'>
                        {heroContent.intro.subTitle && (
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.1, duration: 0.5 }
                                }}
                                viewport={{ once: true }}
                                className='uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-gray-500'>
                                {heroContent.intro.subTitle}
                            </motion.span>
                        )}

                        {heroContent.intro.title && (
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.2, duration: 0.5 }
                                }}
                                viewport={{ once: true }}
                                className='text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:w-screen max-w-xl mb:mb-8'>
                                {heroContent.intro.title}
                            </motion.h1>
                        )}

                        {heroContent.intro.description && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.3, duration: 0.5 }
                                }}
                                viewport={{ once: true }}
                                className='leading-relaxed text-gray-500 w-auto lg:w-screen max-w-xl text-base lg:text-lg mb-10 lg:mb-16'>
                                {heroContent.intro.description}
                            </motion.p>
                        )}

                        {heroContent.intro.btn.label && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.3, duration: 0.5 }
                                }}
                                viewport={{ once: true }}
                            >

                                <Link href={heroContent.intro.btn.label} className='transition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase bg-violet-600 py-4 px-5 text-white inline-block hover:bg-white hover:text-violet-600 hover:shadow-2xl'>
                                    {heroContent.intro.btn.label}
                                </Link>

                            </motion.p>
                        )}

                    </div>

                    <div className='lg:w-7/12 relative'>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    delay: 0.4,
                                    duration: 0.5,
                                }
                            }}
                            viewport={{ once: true }}
                            style={{ y: imgScroll1 }}
                            className='z-[2] relative bg-cover bg-center'>
                            <Image src="/images/hero-img-1-min.jpg" width={828} height={985} alt='Hero-image' />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    delay: 0.4,
                                    duration: 0.5,
                                }
                            }}
                            viewport={{ once: true }}
                            style={{ y: imgScroll2 }}
                            className='absolute bottom-0 lg:bottom-[200px] -left-[100px] z-[1]'>

                            <Image src='/images/dots.svg' width={200} height={200} alt='Dots background image' className='w-64' />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero