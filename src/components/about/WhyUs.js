"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiArch, BiHardHat, BiSolidUser } from "react-icons/bi";
import Image from "next/image";

const whyUsContent = {
    heading: {
        title: "Blueprinting Tommorow's Landscape Today",
        subTitle: "Why Us",
    },
    WhyusItems: [
        {
            icon: BiHardHat,
            title: "Unparalled Expertise",
            description: "With over 27 years of experience in the industry, our team of architects and designers brings a wealth of knowledge to every project.",
        },
        {
            icon: BiArch,
            title: "Innovative Design",
            description: "Our portfolio showcases award-winning designs that have earned accolades for their uniqueness and functionality.",
        },
        {
            icon: BiSolidUser,
            title: "Client-Centered Approach",
            description: "We believe in collaboration. Your vision and goals are at the forefront of our design process.",
        }
    ]
};

const WhyUs = ({ className }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const img1 = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
    return (
        <section className={`${className}`} ref={ref}>
            <div className="container px-4 mx-auto">
                <div className="text-center lg:max-w-xl mx-auto mb:20 lg:mb-32">
                    {whyUsContent.heading.subTitle && (
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.2, duration: 0.5 },
                            }}
                            viewport={{ once: true }}
                            className="uppercase tracking-[3xl] text-[12.5px] mb-5 inline-block text-gray-500"
                        >
                            {whyUsContent.heading.subTitle}
                        </motion.span>
                    )}
                    {whyUsContent.heading.title && (
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.3,
                                    duration: 0.5
                                }
                            }}
                            viewport={{ once: true }}
                            className="text-2xl lg:text-4xl"
                        >
                            {whyUsContent.heading.title}
                        </motion.h2>
                    )}
                </div>

                <div className="lg:flex justify-center">
                    <div className="lg:w-8/12 lg:flex gap-20 items-start">
                        <div className="mb-7 lg:mb-0 lg:w-6/12 lg:order-2">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.6,
                                        duration: 0.5
                                    }
                                }}
                                viewport={{ once: true }}
                                style={{ y: img1 }}>
                                <Image
                                    src="/images/img-square-2-min.jpg"
                                    className="object-cover !w-full h-[500px] lg:max-w-2xl object-center"
                                    width={400}
                                    height={300}
                                    alt="Image" />
                            </motion.div>
                        </div>

                        <div className="lg:w-6/12">
                            <motion.ul
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.9,
                                        duration: 0.5
                                    }
                                }}
                                viewport={{ once: true }}
                                className="list-none">
                                {whyUsContent.WhyusItems.map((item, idx) => (
                                    <li className="flex space-x-4 items-start mb-7" key={item.title}>
                                        <span className="text-xl grow-0 flex-none inline-flex justify-center items-center w-12 h-12 rounded-full relative bg-[#FB2576]">
                                            {<item.icon className="z-20 relative text-white" />}
                                        </span>
                                        <div>
                                            <h3 className="text-gray-800 text-base mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-500">{item.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </motion.ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;