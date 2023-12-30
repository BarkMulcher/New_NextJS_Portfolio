import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import {motion} from 'framer-motion'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light'
        >
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
                rounded-br-3xl'
            />
            <Link
            href={link}
            target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{scale:1.05}}
                    transition={{duration:.2}}
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                <Link
                href={link}
                target='_blank'
                className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link>
                <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 lext-lg font-semibold'>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ title, summary, type, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center
            rounded-2xl border border-solid border-dark bg-light p-6
            relative dark:bg-dark'
        >
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
                rounded-br-3xl'
            />
            <Link
            href={link}
            target='_blank'
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{scale:1.05}}
                    transition={{duration:.04}}
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                <Link
                href={link}
                target='_blank'
                className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link
                    href={link}
                    target='_blank'
                    className='lext-lg font-semibold underline'
                    >Visit</Link>
                    <Link
                    href={github}
                    target='_blank'
                    className='w-8'><GithubIcon /> {" "}</Link>
                </div>
            </div>
        </article>
    )
}


const Projects = () => {
    return (
        <>
        <Head>
                <title>Luke Haskell | Projects Page</title>
                <meta name='description' content='projects page' />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Knowledge Is Power!"
                    className='mb-16'/>

                    <div className='grid grid-cols-12 gap-24 gap-y-32 '>
                        <div className='col-span-12 '>
                            <FeaturedProject
                            img={project1}
                            title="Sheltr.tech"
                            summary="A professional animal shelter website"
                            link='/'
                            github='/'
                            type='Featured Project'
                            />

                        </div>
                        <div className='col-span-6 dark:text-light'>
                            <Project
                                img={project1}
                                title="React Portfolio Website"
                                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth
                                page transitions, cool background effects, unique design and it is mobile responsive."
                                link='/'
                                github='/'
                                type='Project'
                                />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                img={project1}
                                title="React Portfolio Website"
                                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth
                                page transitions, cool background effects, unique design and it is mobile responsive."
                                link='/'
                                github='/'
                                type='Project'
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                img={project1}
                                title="React Portfolio Website"
                                summary="A professional animal shelter website"
                                link='/'
                                github='/'
                                type='Featured Project'
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                img={project1}
                                title="React Portfolio Website"
                                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth
                                page transitions, cool background effects, unique design and it is mobile responsive."
                                link='/'
                                github='/'
                                type='Project'
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                img={project1}
                                title="React Portfolio Website"
                                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth
                                page transitions, cool background effects, unique design and it is mobile responsive."
                                link='/'
                                github='/'
                                type='Project'
                            />
                        </div>

                    </div>
                </Layout>
            </main>
        </>
    );
}

export default Projects;