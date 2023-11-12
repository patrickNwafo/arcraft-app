'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import img1 from "../../../public/images/img-square-1-min.jpg";
import img2 from "../../../public/images/img-square-2-min.jpg";
import img3 from "../../../public/images/img-square-3-min.jpg";
import img4 from "../../../public/images/img-square-4-min.jpg";
import img5 from "../../../public/images/img-square-5-min.jpg";

import post1 from "../../../public/images/post-1-min.jpg";
import post2 from "../../../public/images/post-2-min.jpg";

const storyContentent = {
    column1: {
        imgs: [
            {
                img: img5,
                alt: "Team brainstorming",
                width: 1188,
                height: 1413,
                tailwindClass: "h-56 lg:h-96"
            },
            {
                img: img1,
                alt: "Woman making a plan",
                width: 1188,
                height: 1413,
            },
        ]
    },
    column2: {
        imgs: [
            {
                img: img2,
                alt: "Team meeting",
                width: 1188,
                height: 1413,
                tailwindClass: "h-48 lg:h-64"
            },
            {
                img: post2,
                alt: "White curvy building",
                width: 1188,
                height: 1413,
                tailwindClass: "h-56 lg:h-64"
            },
            {
                img: img4,
                alt: "White curvy building",
                width: 1188,
                height: 1413,
                tailwindClass: "h-48 lg:h-96"
            },
        ]
    },
    column3: {
        imgs: [
            {
                img: post1,
                alt: "Building",
                width: 1188,
                height: 1413,
            },
            {
                img: img3,
                alt: "Man writting a plan",
                width: 1188,
                height: 1413,
            },
        ]
    },
    storyText: {
        heading: "Crafting Spaces, Shaping Dreams",
        p1: "Envisioned by a group of passionate architects, our story is one of perseverance and boundless creativity. We started as a small team with big dreams, driven by the belief that architecture holds the power to shape lives and communities. Through years of dedication and unwavering commitment, we have evolved into a dynamic force, seamlessly blending aesthetics with functionality to create spaces that inspire and endure.",
        p2: "Our journey has been defined by our relentless pursuit of excellence and our eagerness to embrace new challenges. From the early projects that ignited our spark to the iconic structures that now stand as testaments to our vision, every step of our journey is etched with a passion for innovation. Today, we stand on the shoulders of our accomplishments, guided by the same spirit that set us on this path – to shape a world that celebrates the harmony of design, environment, and human experience.",
        signature: "/images/Bill_Smith_Signature.svg",
        name: "Bill Smith",
        roleTitle: "CEO and Co-Founder"
    }
}

const Story = ({ className }) => {
    return (
        <section className={`{className}`}>
            <div className='container px-4 mx-auto'>
                <div className='md:flex w-full md:w-10/12 mx-auto items-stretch md:gap-7'>
                    <div className='md:w-4/12 self-center space-y-7 mb-7 md:mb-0'>
                        {storyContentent.column1.imgs.map((item, idx) => {
                            idx *= 0.5;
                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            delay: idx,
                                            duration: 0.5,
                                        }
                                    }}
                                    viewport={{ once: true }}
                                    key={item}
                                >
                                    <Image src={item.img} width={item.width} height={item.height} alt={item.alt} className={`${item.tailwindClass ? item.tailwindClass : ""} !max-w-full object-cover object-center`} />

                                </motion.div>
                            )
                        })}
                    </div>

                    <div className='md:w-4/12 space-y-7 mb-7 md:mb-0'>
                        {storyContentent.column2.imgs.map((item, idx) => {
                            idx *= 0.5;
                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            delay: idx,
                                            duration: 0.5,
                                        }
                                    }}
                                    viewport={{ once: true }}
                                    key={item}
                                >
                                    <Image src={item.img} width={item.width} height={item.height} alt={item.alt} className={`${item.tailwindClass ? item.tailwindClass : ""} !max-w-full object-cover object-center`} />

                                </motion.div>
                            )
                        })}
                    </div>

                    <div className='md:w-4/12 self-center space-x-7'>
                        {storyContentent.column3.imgs.map((item, idx) => {
                            idx *= 0.5;
                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            delay: idx,
                                            duration: 0.5,
                                        }
                                    }}
                                    viewport={{ once: true }}
                                    key={item}
                                >
                                    <Image src={item.img} width={item.width} height={item.height} alt={item.alt} className={`${item.tailwindClass ? item.tailwindClass : ""} !max-w-full object-cover object-center`} />

                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                <motion.div

                    className='lg:flex flex-col mt-32 text-left w-full lg:w-6/12 mx-auto'>
                    {storyContentent.storyText.heading && (
                        <h2 className='text-2xl md:text-3xl text-gray-800 mb-5'>
                            {storyContentent.storyText.heading}
                        </h2>
                    )}

                    {storyContentent.storyText.p1 && (
                        <p className='leading-relaxed text-gray-500 mb-7'>
                            {storyContentent.storyText.p1}
                        </p>
                    )}
                    {storyContentent.storyText.p2 && (
                        <p className='leading-relaxed text-gray-500 mb-10'>
                            {storyContentent.storyText.p2}
                        </p>
                    )}

                    <p>
                        <Image src={storyContentent.storyText.signature}
                            alt={storyContentent.storyText.name}
                            width={338}
                            height={113}
                            className='w-48 block mb-2' />
                        <strong className='block mb-2 text-gray-800 font-medium'>
                            {storyContentent.storyText.name + " "}
                            <span className='text-gray-400'>
                                {storyContentent.storyText.roleTitle}
                            </span>
                        </strong>
                    </p>

                </motion.div>
            </div>
        </section>
    )
}

export default Story