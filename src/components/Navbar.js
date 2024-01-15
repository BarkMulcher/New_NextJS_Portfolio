import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Logo from '../components/Logo'
import {
    LinkedInIcon,
    GithubIcon,
    GitlabIcon,
    DribbbleIcon,
    SunIcon,
    MoonIcon
} from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher';


const CustomLink = ({ href, title, className = '' }) => {
    const router = useRouter()
    // console.log(router)
    return (
        <Link href={href} className={`${className} rounded relative group lg:text-light lg:dark:text-dark`}>
            {title}

            <span
                className={
                    `h-[1px] inline-block bg-dark
                absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width]
                ease duration-300
                ${router.asPath === href ? 'w-full' : 'w-0'}
               dark:bg-light lg:bg-light lg:dark:bg-dark`}
            >
                &nbsp;
            </span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
    const router = useRouter()

    const handleClick = () => {
        toggle()
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group group text-light dark:text-dark lg:dark:text-dark my-2`} onClick={handleClick}>
            {title}

            <span
                className={
                    `h-[1px] inline-block bg-light
                absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width]
                ease duration-300
                ${router.asPath === href ? 'w-full' : 'w-0'}
               dark:bg-dark lg:bg-light lg:dark:bg-dark`}
            >
                &nbsp;
            </span>
        </button>
    )
}


const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher()
    const [isOpen, setisOpen] = useState(false);

    const handleClick = () => {
        setisOpen(!isOpen)
    }

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between
        dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
            <button
            type='button'
            className='flex-col justify-center items-center hidden lg:flex'
            onClick={handleClick}
            aria-controls='mobile-menu'
            aria-expanded={isOpen}
            >
                <span className="sr-only">Open main menu</span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'opacity-0' : 'opacity-100'} my-0.5`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
            {/* desktop menu: */}
            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav className='flex items-center justify-center'>
                    <CustomLink href='/' title='home' className='mr-2' />
                    <CustomLink href='/about' title='about' className='mx-2' />
                    <CustomLink href='/projects' title='projects' className='mx-2' />
                    <CustomLink href='/articles' title='articles' className='mx-2' />
                    <CustomLink href='/photography' title='photography' className='ml-2' />
                </nav>
                <nav className='flex items-center justify-center flex-wrap lg:mt-2'>
                    <motion.a
                        href='https://www.github.com/barkmulcher'
                        target={'_blank'}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mr-3'
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a
                        href='https://www.gitlab.com/barkmulcher'
                        target={'_blank'}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mx-3'
                    >
                        <GitlabIcon />
                    </motion.a>
                    <motion.a
                        href='https://www.linkedin.com/in/lucas-haskell'
                        target={'_blank'}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mx-3'
                    >
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a
                        href='https://dribbble.com/luke_haskell'
                        target={'_blank'}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 ml-3'
                    >
                        <DribbbleIcon />
                    </motion.a>

                    <button
                        onClick={() => setMode(mode == "light" ? "dark" : "light")}
                        className={`w-6 h-6 ease ml-3 flex items-center justify-center rounded-full p-1
                ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                `}
                        aria-label='theme-switcher'
                    >
                        {
                            mode === "light" ? (
                                <SunIcon className={"fill-dark"} />
                               ) : <MoonIcon className={"fill-dark"} />
                        }
                    </button>

                </nav>
            </div>

            {/* mobile menu */}
            {
                // if menu is open, show menu
            isOpen ?

            <motion.div
                initial={{scale:0, x: "-50%", y: "-50%"}}
                animate={{scale:1, opacity:1}}
                className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
                <nav className='flex items-center flex-col justify-center'>
                    <CustomMobileLink href='/' title='home' className='mr-4 lg:m-0 lg:my-2' toggle={handleClick} />
                    <CustomMobileLink href='/about' title='about' className='mx-4 lg:m-0 lg:my-2' toggle={handleClick} />
                    <CustomMobileLink href='/projects' title='projects' className='mx-4 lg:m-0 lg:my-2' toggle={handleClick} />
                    <CustomMobileLink href='/articles' title='articles' className='mx-4 lg:m-0 lg:my-2' toggle={handleClick} />
                    <CustomMobileLink href='/photography' title='photography' className='ml-4 lg:m-0 lg:my-2' toggle={handleClick} />
                </nav>
                <nav className='flex items-center justify-center flex-wrap mt-2'>
                    <motion.a
                        href='https://www.github.com/barkmulcher'
                        target={'_blank'}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mr-3 bg-light rounded-full dark:bg-dark sm:mr-1'
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a
                        href='https://www.gitlab.com/barkmulcher'
                        target={'_blank'}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mx-3 sm:mx-1'
                    >
                        <GitlabIcon />
                    </motion.a>
                    <motion.a
                        href='https://www.github.com/barkmulcher'
                        target={'_blank'}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mx-3 sm:mx-1'
                    >
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a
                        href='https://www.github.com/barkmulcher'
                        target={'_blank'}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 ml-3 sm:ml-1'
                    >
                        <DribbbleIcon />
                    </motion.a>

                    <button
                        onClick={() => setMode(mode == "light" ? "dark" : "light")}
                        className={`w-6 h-6 ease m-1 ml-3 sm:mx-1 flex items-center justify-center rounded-full p-1
                ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                `}
                        aria-label='theme-switcher'
                    >
                        {
                            mode === "light" ? (
                                <SunIcon className={"fill-dark"} />
                               ) : ( <MoonIcon className={"fill-dark"} />
                        )}
                    </button>

                </nav>
            </motion.div>

                : null

            }

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>


        </header>
    );
}

export default Navbar;
