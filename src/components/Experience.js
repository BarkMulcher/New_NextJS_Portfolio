import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon';

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon  reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:'spring'}}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
                target='_blank'
                className='text-primary dark:text-primaryDark capitalize'>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ['start end', 'center start']
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                style={{scaleY: scrollYProgress}}
                className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark dark:shadow-3xl
                md:w-[2px] md:left-[30px] xs:left-[20px]' />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                    position='Full-Stack Developer' company='Hack-Reactor Boot Camp'
                    time='2023-2023' address='Remote, US'
                    work="More advanced software engineering boot camp wherein I developed multiple software applications, utilizing technologies such as
                    Python, Django, JavaScript, React. Particular focus on optimizing performance and reliability."
                    />
                    <Details
                    position='Full-Stack Developer' company='University of New Hampshire'
                    time='2022-2022' address='Remote, US'
                    work="Beginner-Intermediate coding boot camp where I learned web development skills from the ground-up. Utilizing technologies
                    such as HTML, CSS, JavaScript, Handlebars, MongoDB, Mongoose, Node.JS and Heroku deployments."
                    />

                </ul>
            </div>
        </div>
    );
}

export default Experience;
