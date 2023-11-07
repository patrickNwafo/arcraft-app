'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    BiHardHat,
    BiPaintRoll,
    BiNote,
    BiBulb,
    BiLayer,
    BiOutline
} from 'react-icons/bi';

const howItWorksContent = {
    heading: {
        title: "Where Creativity Meets Structural Integrity",
        subTitle: "How It Works",
        description: "At arcraft we're dedicated to shaping environments that transcend mere structures, weaving stories and experiences into every design."
    },
    steps: [
        {
            number: '01',
            icon: BiHardHat,
            title: "Project Initiation",
            description: "At arcraft we're dedicated to shaping environments that transcend mere structures.",
            btn: {
                href: "#",
                label: "Learn More"
            }
        },
        {
            number: '02',
            icon: BiPaintRoll,
            title: "Conceptual Design",
            description: "At arcraft we're dedicated to shaping environments that transcend mere structures.",
            btn: {
                href: "#",
                label: "Learn More"
            }
        },
        {
            number: '03',
            icon: BiNote,
            title: "Construction Documents",
            description: "At arcraft we're dedicated to shaping environments that transcend mere structures.",
            btn: {
                href: "#",
                label: "Learn More"
            }
        },
    ],
    features: [
        {
            icon: BiHardHat,
            title: "Design Development",
            description: "Our journey begins with a spark of imagination and a commitment to turning dreams into tangible spaces. From concept to construction, we orchestrate a symphony of design.",
            btn: {
                href: "#",
                label: "Learn More",
            }
        },
        {
            icon: BiBulb,
            title: "Construction Administration",
            description: "Our journey begins with a spark of imagination and a commitment to turning dreams into tangible spaces. From concept to construction, we orchestrate a symphony of design.",
            btn: {
                href: "#",
                label: "Learn More",
            }
        },
        {
            icon: BiOutline,
            title: "Post-Occupancy Evaluation",
            description: "Our journey begins with a spark of imagination and a commitment to turning dreams into tangible spaces. From concept to construction, we orchestrate a symphony of design.",
            btn: {
                href: "#",
                label: "Learn More",
            }
        },
        {
            icon: BiLayer,
            title: "Schematic Design",
            description: "Our journey begins with a spark of imagination and a commitment to turning dreams into tangible spaces. From concept to construction, we orchestrate a symphony of design.",
            btn: {
                href: "#",
                label: "Learn More",
            }
        },

    ]
}

const HowItWorks = ({ className }) => {
    return (
        <>
            <section className={`${className}`}>
                <div className='container px-4 mx-auto'>
                    <div className='lg:flex justify-center mb-20 lg:mb-36'>
                        <div className='w-full lg:w-8/12 lg:flex gap-0 items-center'>

                            <div className='lg:w-7/12 mb-15 lg:mb-0'>
                                {howItWorksContent.heading.subTitle && (
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                delay: 0.2,
                                                duration: 0.5,
                                            }
                                        }}
                                        viewport={{ once: true }}
                                        className='uppercase tracking-[3px] text-sm mb-5 inline-block text-gray-500'>{howItWorksContent.heading.subTitle}</motion.span>
                                )}

                                {howItWorksContent.heading.title && (
                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                delay: 0.3,
                                                duration: 0.5,
                                            }
                                        }}
                                        viewport={{ once: true }}
                                        className='text-2xl lg:text-4xl'>{howItWorksContent.heading.title}</motion.h2>
                                )}


                            </div>

                            <div className='lg:w-5/12 self-end'>
                                {howItWorksContent.heading.description && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                delay: 0.6,
                                                duration: 0.5,
                                            }
                                        }}
                                        viewport={{ once: true }}
                                        className='text-gray-500'>{howItWorksContent.heading.description}</motion.p>
                                )}

                            </div>

                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 -mb-72 lg:w-10/12 mx-auto'>
                        {howItWorksContent.steps.map((step, idx) => {
                            idx *= 0.2;
                            return (
                                <motion.div key={step.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            delay: idx,
                                            duration: 0.5,
                                        }
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10, transition: 0.1, }}
                                    className='group duration-300 pt-32 pl-10 pr-10 pb-20 bg-white relative overflow-hidden hover:bg-[#fb2576] hover:shadow-2xl'>
                                    <span className='text-[200px] inline-block z-[1] font-semibold absolute -top-[120px] opacity-5 left-0 leading-0'>{step.number}</span>

                                    <div className='absolute top-10 right-10'>
                                        <span className='text-3xl text-violet-600 duration-300 transition-all ease-in-out group-hover:text-white'>
                                            <step.icon />
                                        </span>
                                    </div>

                                    <div className='relative z-40 flex gap-3 items-start'>

                                        <div className='font-semibold duration-300 transition-all ease-in-out group-hover:text-white group-hover:text-opacity-50'>
                                            {step.number}
                                        </div>

                                        <div>
                                            <h3 className='text-[18px] mb-4 duration-300 transition-all ease-in-out group-hover:text-white'>
                                                {step.title}
                                            </h3>
                                            <p className='leading-relaxed text-[15px] text-gray-500 mb-7 duration-300 transition-all ease-in-out group-hover:text-white'>{step.description}</p>
                                            <p>
                                                <Link href={step.btn.href} className='text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block border-violet-600 duration-300 transition-all ease-in-out group-hover:border-white group-hover:text-white'>
                                                    {step.btn.label}
                                                </Link>
                                            </p>
                                        </div>

                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className='pt-72 lg:pt-60 pb-32 bg-violet-900'>
                <div className='container px-4 mx-auto'>
                    <div className='lg:flex justify-center'>
                        <div className='w-full lg:w-8/12 flex gap-0 items-center'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                                {howItWorksContent.features.map((feature, idx) => {
                                    idx *= 0.2;
                                    return (
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    delay: idx,
                                                    duration: 0.5,
                                                }
                                            }}
                                            viewport={{ once: true }}
                                            key={feature.title} className='relative z-40 flex gap-3 items-start'>
                                            <div>
                                                <span className='text-3xl text-white'>
                                                    <feature.icon />
                                                </span>
                                            </div>

                                            <div>
                                                <h3 className='text-lg mb-4 text-white'>{feature.title}
                                                </h3>
                                                <p className='leading-relaxed text-[15px] text-white text-opacity-75 mb-7'>{feature.description}</p>

                                                <p>
                                                    <Link href={feature.btn.href}
                                                        className='text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block text-white border-white border-opacity-25 transition-all duration-300 ease-in-out hover:border-opacity-100'>
                                                        {feature.btn.label}
                                                    </Link>
                                                </p>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowItWorks