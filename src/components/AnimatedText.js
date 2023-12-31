import React from 'react';
import {motion} from 'framer-motion'

const quote = {
    initial: {
        opacity: 0.2,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 1.5,
            staggerChildren: 0.08,
        }
    }
}

const singleWord = {
    initial: {
        opacity: 0.2,
        y:50,
    },
    animate: {
        opacity: 1,
        y:0,
        transition: {
            duration:1,
        }
    }
}

const AnimatedText = ({ text, className="" }) => {
    return (
        <div className='w-full mx-auto py-2 flex item-center justify-center text-center
        overflow-hidden sm:py-0'>
            <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-6xl dark:text-light ${className} xl:text-6xl`}
            variants={quote}
            initial='initial'
            animate='animate'
            >
                {
                    text.split(' ').map((word, index) =>
                        // map must have key
                        <motion.span key={word+'-'+index} className='inline-block'
                        variants={singleWord}
                        //if using staggerChildren, don't need to initalize:
                        // initial='initial'
                        // animate='animate'
                        >
                            {word}&nbsp;
                        </motion.span>
                    )
                }
            </motion.h1>
        </div>
    );
}

export default AnimatedText;
