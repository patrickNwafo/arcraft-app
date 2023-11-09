'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { allPosts } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';

const recentBlogContent = {
    heading: {
        title: "Recent Updates",
        subTitle: "Our Blog",
        description: "At arcraft we're dedicated to shaping environments that transcend mere structures, weaving stories and experiences into every design.",
    }
}

const PostCard = ({ index, post }) => {
    index *= 0.05;
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    delay: index,
                    duration: 0.5,
                }
            }}
            viewport={{ once: true }}
            className='bg-white relative overflow-hidden group'>
            <Link href={post.url} className='relative block overflow-hidden'>
                <Image src={post.image} alt={post.title} width={1064} height={644} className='object-cover object-center h-[200px] duration-300 transition-all ease-in-out group-hover:scale-[1.05]' />
            </Link>

            <div className='p-8'>
                <p className='text-gray-500 mb-3 uppercase text-[12px] tracking-[1px]'>
                    {format(parseISO(post.date), "LLL d, yyyy")} • {post.author}
                </p>
                <h3 className='mb-4'>
                    <Link href={post.url} className='text-lg leading-none'>
                        {post.title}
                    </Link>
                </h3>
                <p>
                    <Link href={post.url} className='text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block border-violet-700'>Read more</Link>
                </p>
            </div>
        </motion.div>
    );
}

const RecentBlog = ({ className }) => {
    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
    return (
        <section className={`{className}`}>
            <div className='container px-4 mx-auto'>

                <div className='lg:flex justify-center mb-24'>
                    <div className='w-full lg:w-8/12 lg:flex gap-0 items-center'>

                        <div className='lg:w-7/12'>
                            {recentBlogContent.heading.subTitle && (
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            delay: 0.05,
                                            duration: 0.5,
                                        }
                                    }}
                                    viewport={{ once: true }}
                                    className='uppercase tracking-[3px] text-sm mb-5 inline-block text-gray-500'>
                                    {recentBlogContent.heading.subTitle}
                                </motion.span>
                            )}

                            {recentBlogContent.heading.title && (
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            delay: 0.1,
                                            duration: 0.5,
                                        }
                                    }}
                                    viewport={{ once: true }}
                                    className='text-2xl lg:text-4xl mb-4 lg:mb-0'>
                                    {recentBlogContent.heading.title}
                                </motion.h2>
                            )}


                        </div>
                        <div className='lg:w-5/12 self-end'>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.15,
                                        duration: 0.5,
                                    }
                                }}
                                viewport={{ once: true }}
                                className='text-gray-500'>{recentBlogContent.heading.description}</motion.p>
                        </div>

                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full lg:w-10/12 mx-auto'>
                    {posts.slice(0, 3).map((post, idx) => (
                        <PostCard key={idx} index={idx} post={post} />
                    ))}
                </div>


            </div>
        </section>
    )
}

export default RecentBlog