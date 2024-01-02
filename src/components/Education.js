import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon  reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:'spring'}}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

const Education = () => {
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
                Education
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                style={{scaleY: scrollYProgress}}
                className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px] rounded-full dark:bg-primaryDark dark:shadow-3xl' />
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details
                    type='Software Engineering Certificate'
                    time='2023-2023'
                    place='Hack-Reactor'
                    info='More advanced software engineering boot camp wherein I developed multiple software applications, utilizing technologies such as
                    Python, Django, JavaScript, React. Particular focus on optimizing performance and reliability.'
                    />
                    <Details
                    type='Full-Stack Web Development Certificate'
                    time='2022-2022'
                    place='University of New Hampshire'
                    info='Beginner-Intermediate coding boot camp where I learned web development skills from the ground-up. Utilizing technologies
                    such as HTML, CSS, JavaScript, Handlebars, MongoDB, Mongoose, Node.JS and Heroku deployments.'
                    />
                    <Details
                    type='Partial B.S. in Engineering'
                    time='2013-2014'
                    place='Oregon State University'
                    info='Attended Oregon State University for one year, studying engineering.'
                    />
                </ul>
            </div>
        </div>
    );
}

export default Education;

