'use client'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const aboutContent = {
    heading: {
        title: "Where Creativity Meets Structural Integrity",
        subTitle: "About Us"
    },
    content: {
        img: "/images/hero-1-min.jpg",
        title: "Architects of Innovation, Builders of Beauty.",
        description: "Every structure we conceive tells a unique story, reflecting the aspirations and dreams of our clients. From conceptualization to realization, we immerse ourselves in the art of design, striving to capture the essence of each project.",
        btn: {
            href: "/about",
            label: "Learn about us",
        }
    }
}

const About = ({ className }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const img1 = useTransform(scrollYProgress, [0, 1], ['30%', '-10%']);
    const img2 = useTransform(scrollYProgress, [0, 1], ['100%', '100%']);

    return (
        <section className={`${className}`} ref={ref}>
            <div className='container px-4 mx-auto'>
                <div className='text-center lg:max-w-xl mx-auto mb-20 lg:mb-22 relative z-[5]'>
                    {aboutContent.heading.subTitle && (
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.2,
                                    duration: 0.5
                                }
                            }}
                            viewport={{ once: true }}
                            className='uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-gray-500'>{aboutContent.heading.subTitle}</motion.span>
                    )}


                    {aboutContent.heading.title && (
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.3,
                                    duration: 0.5
                                }
                            }}
                            viewport={{ once: true }}
                            className='text-2xl lg:text-4xl'>{aboutContent.heading.title}</motion.h2>
                    )}

                </div>

                <div className='lg:flex justify-center'>
                    <div className='lg:w-8/12 lg:flex gap-20 items-center'>


                        <div className='mb-7 lg:mb-0 lg:w-6/12 lg:order-2 relative'>
                            <motion.div
                                style={{ y: img1 }}
                                className='z-[2] relative'>
                                <Image src="/images/img-square-2-min.jpg" className='object-cover !w-full !h-[550px] lg:max-w-2xl object-center' width={400} height={600} alt='About image' />
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
                                style={{ y: img2 }}
                                className='absolute bottom-0 lg:bottom-[200px] -left-[100px] z-[1]'>
                                <Image src="/images/dots.svg" alt='Dots img' width={200} height={200} className='w-64' />
                            </motion.div>

                        </div>

                        <div className='lg:w-6/12'>
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.2,
                                        duration: 0.5,
                                    }
                                }}
                                viewport={{ once: true }}
                                className='text-2xl mb-7 text-gray-800'>{aboutContent.content.title}</motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.4,
                                        duration: 0.5,
                                    }
                                }}
                                viewport={{ once: true }} className='leading-relaxed mb-14 text-gray-500'
                            >{aboutContent.content.description}</motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.5,
                                        duration: 0.5,
                                    }
                                }}
                                viewport={{ once: true }}
                            >
                                <Link href="/about" className='transition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase bg-violet-600 py-4 px-5 text-white inline-block hover:bg-white hover:text-violet-600 hover:shadow-2xl'>
                                    {aboutContent.content.btn.label}
                                </Link>
                            </motion.p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About