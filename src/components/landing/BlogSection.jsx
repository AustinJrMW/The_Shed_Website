'use client'

import React, { useState } from 'react';
import styles from './blogsection.module.css';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';


const blogList = [
    {
        id: 1,
        title: 'Article Number One',
        description: 'This is the description',
        body: '>We invite you to experience the genuine warmth and coziness of environment where you can relax, unwind, and create lasting memories.',
        image: 'https://images.unsplash.com/photo-1686772976944-9db9f0d80d19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80'
    },
    {
        id: 2,
        title: 'Article Number Two',
        description: 'This is the description',
        body: '>We invite you to experience the genuine warmth and coziness of environment where you can relax, unwind, and create lasting memories.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'

    },
    {
        id: 3,
        title: 'Article Number Three',
        description: 'This is the description',
        body: '>We invite you to experience the genuine warmth and coziness of environment where you can relax, unwind, and create lasting memories.',
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'

    }
]

const BlogSection = ({ titleFont }) => {

    const [hoveredBlog, setHoveredBlog] = useState(null);

    const handleBlogHover = (blogId) => {
        setHoveredBlog(blogId);
    };

    return (
        <div className='my-20'>
            <div className='md:w-2/5 w-full text-center mx-auto'>
                <h2 className={`${titleFont.className} md:text-4xl text-3xl mb-4`}>Around Malawi & <br />Within Lilongwe</h2>
                <p>We invite you to experience the genuine warmth and coziness of environment where you can relax, unwind, and create lasting memories.</p>
            </div>
            <div className='w-full h-full md:flex my-8'>
                <div className='md:w-1/2 w-full md:pr-8 p-0'>
                    <div>
                        {blogList.map((blog, index) => (
                            <div key={index}
                                className={hoveredBlog === blog.id ? styles.selected : ''}
                                onMouseEnter={() => handleBlogHover(blog.id)}>
                                <div className='flex md:pr-12 p-0 pb-4 border-b border-b-[#2a2a2a] mb-10 justify-between'>
                                    <div>
                                        <Link href={'/'}>
                                        <h4 className={`${titleFont.className} md:text-3xl text-xl`}>{blog.title}</h4>
                                        <p>{blog.description}</p>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={'/'}>
                                        <BsArrowRight className='hover:text-[#E0956D]' size={30}/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='md:w-1/2 w-full md:block hidden'>
                    <div className={styles.imageSection}>
                        {hoveredBlog && (
                            <img className={`{w-[600px] h-[400px] object-cover}`} src={blogList[hoveredBlog - 1].image} alt={`Blog ${hoveredBlog}`} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSection