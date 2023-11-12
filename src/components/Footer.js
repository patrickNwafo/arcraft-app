import React from 'react'
import Link from 'next/link'
import { BiSolidHeart } from 'react-icons/bi'

const footerContent = {
    footerLinks: [
        {
            heading: "Product",
            links: [
                {
                    href: "#",
                    label: "Overview"
                },
                {
                    href: "#",
                    label: "Solutions",
                    badge: "New",
                },
                {
                    href: "#",
                    label: "Tutorials"
                },
                {
                    href: "#",
                    label: "Pricing"
                },
                {
                    href: "#",
                    label: "Releases"
                },
            ]
        },
        {
            heading: "Company",
            links: [
                {
                    href: "#",
                    label: "About us"
                },
                {
                    href: "#",
                    label: "Leadership"
                },
                {
                    href: "#",
                    label: "Careers",
                    badge: "We're hiring"
                },
                {
                    href: "#",
                    label: "Press"
                },
                {
                    href: "#",
                    label: "Contact"
                },
                {
                    href: "#",
                    label: "Branding"
                },
            ]
        },
        {
            heading: "Resources",
            links: [
                {
                    href: "#",
                    label: "Blog"
                },
                {
                    href: "#",
                    label: "Events"
                },
                {
                    href: "#",
                    label: "Newsletter"
                },
                {
                    href: "#",
                    label: "Knowledge"
                },
                {
                    href: "#",
                    label: "Support"
                },
                {
                    href: "#",
                    label: "Tutorials"
                },
            ]
        }
    ]
}

const Copyright = () => {
    return (
        <div className='pt-7 mt-7 md:mt-14 border-t border-t-gray-100 text-center text-gray-500'>
            <p className='text-center items-center mx-auto text-sm'>
                &copy; 2023 {" "}
                <Link href="/" className='text-violet-600'>arcraft</Link>
                . All rights reserved. Created with {" "}
                <BiSolidHeart className='text-red-500 mx-1 inline-block' />
                by{" "}
                <Link href="https://www.linkedin.com/in/chinedu-nwafor-1121a9273/" target='_blank' className='text-violet-300'>Ricky</Link>
            </p>
        </div>
    )
}

const Footer = ({ className }) => {
    return (
        <footer className={`${className} overflow-hidden w-full h-full relative`}>
            <div className='container px-4 mx-auto z-20 relative'>
                <div className='md:flex'>

                    <div className='md:w-4/12 mb-10 md:mb-0'>
                        <Link href="/" className='text-[22px] text-gray-800 font-bold'>
                            arcraft<span className='text-violet-600'>.</span>
                        </Link>
                    </div>

                    <div className='md:8/12'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                            {footerContent.footerLinks.map((item, idx) => (
                                <div className='mb-10 md:mb-0' key={item.heading}>
                                    <h3 className='text-gray-800 mb-3'>{item.heading}</h3>
                                    <ul className='list-none'>
                                        {item.links.map((link, idx) => (
                                            <li className='mb-2' key={link.label}>
                                                <Link href={link.href} className={`${link.badge ? "flex gap-2 items-center" : ""} text-gray-500 duration-300 transition-all ease-in-out hover:text-violet-600`}>
                                                    {link.badge ? (<>
                                                        <span>{link.label}</span>
                                                        <span className='py-0.5 px-2 rounded-full bg-violet-100 border border-violet-600 text-[10px] text-violet-600 font-semibold'>{link.badge}</span>
                                                    </>) : (link.label)}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Copyright />
            </div>
        </footer>
    )
}

export default Footer