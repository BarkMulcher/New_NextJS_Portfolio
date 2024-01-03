import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import {motion} from 'framer-motion'
import catapi from '../../public/images/projects/catapi.png'
import indexmori from '../../public/images/projects/indexmori.jpg'
import sheltr from '../../public/images/projects/shelter.png'
import teamgen from '../../public/images/projects/teamgen.jpg'
import reelistr from '../../public/images/projects/judgement-day.jpg'

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col
        lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4'
        >
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
                rounded-br-3xl xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]'
            />
            <Link
            href={link}
            target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{scale:1.05}}
                    transition={{duration:.2}}
                    priority
                    sizes='(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw'
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link
                href={link}
                target='_blank'
                className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-3xl xs:text-2xl'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link>
                <Link
                    href={link}
                    target='_blank'
                    className='ml-4 rounded-lg bg-dark text-light p-2 px-6 lext-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'
                    aria-label='Visit Project'
                >
                    Visit Project!
                </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ title, summary, type, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center
            rounded-2xl border border-solid border-dark bg-light p-6
            relative dark:bg-dark dark:border-light xs:p-4'
        >
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
                rounded-br-3xl dark:bg-light xs:rounded-[1.5rem]'
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
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
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
                    <AnimatedText text="Knowledge Is Power!" className='mb-16'/>
                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12 '>
                            <FeaturedProject
                            img={sheltr}
                            title="Sheltr.tech"
                            summary="A professional animal shelter website created as part of a group project in a coding bootcamp. It is a full-stack MERN application."
                            link='https://sheltr.tech/'
                            github='https://github.com/BarkMulcher/sheltr'
                            type='Featured Project'
                            />

                        </div>
                        <div className='col-span-6 dark:text-light sm:col-span-12'>
                            <Project
                                img={indexmori}
                                title="Index Mori"
                                summary="A Halloween-themed early group project creating an API & database, and incorporates 'vanilla' JavaScript, CSS, HTML, and
                                the Handlebars templating library.
                                Users can create accounts, authenticate, and create unofficial wills for their belongings. Project hosted on Heroku with JawsDB."
                                link='https://serene-shelf-90086.herokuapp.com/'
                                github='https://github.com/BarkMulcher/Index-Mori'
                                type='Project'
                                />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                img={teamgen}
                                title="Team Profile Generator"
                                summary="A simple CLI tool for creating your professional team, utilizing HTML, CSS, JS, Node.JS, and Bulma. This is not a deployed site."
                                link='https://github.com/BarkMulcher/Team-Profile-Generator'
                                github='https://github.com/BarkMulcher/Team-Profile-Generator'
                                type='Project'
                            />
                        </div>
                        <div className='col-span-12 sm:col-span-12'>
                            <FeaturedProject
                                img={reelistr}
                                title="Reelistr"
                                summary="A professional movie-database website built as part of a group project in a coding bootcamp. It is a full-stack application utilizing
                                Python, PostgreSQL, React, and Node.js. Custom reelistr.com domain is owned by a group member, and is no longer active."
                                link='https://barkmulcher.gitlab.io/module3-project-gamma/'
                                github='https://gitlab.com/BarkMulcher/module3-project-gamma'
                                type='Featured Project'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                img={catapi}
                                title="React Portfolio Website"
                                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth
                                page transitions, cool background effects, unique design and it is mobile responsive."
                                link='/'
                                github='/'
                                type='Project'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                img={catapi}
                                title="CatFacts API Project"
                                summary="My very first group project's website, wherein we practiced using a 3rd-party API. Not a deployed site."
                                link='/'
                                github='https://github.com/BarkMulcher/Cat-Facts-API'
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
