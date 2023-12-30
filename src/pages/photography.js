import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import React from 'react';
import Image from 'next/image';
import photo1 from '../../public/images/photos/sierra_nevada.jpg'
import photo2 from '../../public/images/photos/fremont_ca.jpg'
import photo3 from '../../public/images/photos/tidbits_mtn.jpg'
import photo4 from '../../public/images/photos/misty_creek.jpg'

const Photograph = ({ img, title }) => {
    // const imgStyle = { width: '3264px', height: '2448px' }

    return (
        <div className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center
        justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4'>
            <div className='w-full h-600px '>
                <Image title={title} src={img} className='object-contain'/>
            </div>

        </div>
    )
}

const Photography = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center overflow-hidden'>
            <Layout className='pt-16'>
                <AnimatedText text='My Photography' className='mb-16' />
                <ul className='grid grid-cols-2 gap-12'>
                    <Photograph
                    title="Sierra Nevada, California"
                    img={photo1}
                    alt="mountains and trees"

                    />
                    <Photograph
                    title="Hills Above Fremont, California"
                    img={photo2}
                    alt='hills at sunset'
                    />
                    <Photograph
                    title="Snowy Mountainside, Oregon"
                    img={photo3}
                    alt='snow-covered mountain'
                    />
                    <Photograph
                    title="Misty Creek, Oregon"
                    img={photo4}
                    alt='scenic view of creek and trees'
                    />
                </ul>
            </Layout>
        </div>
    );
}

export default Photography;
