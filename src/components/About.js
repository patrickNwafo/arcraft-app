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
    return (
        <section className={`${className}`}>
            About
        </section>
    )
}

export default About