import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import article1 from '../../public/images/articles/What is higher order component in React.jpg'
import article2 from '../../public/images/articles/What is Redux with easy explanation.png'

const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl'>
            <Link
            href={link}
            target='_blank'
            className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image
                src={img}
                alt={title}
                className='w-full h-auto'/>
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 hover:underline'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibold'>{time}</span>
        </li>
    )
}

const Articles = () => {
    return (
        <>
            <Head>
                <title>Luke Haskell | Articles Page</title>
                <meta name='description' content='articles page' />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout className='pt-16'>
                    <AnimatedText text='FARTBOOBS' className='mb-16' />
                    <ul className='grid grid-cols-2 gap-16'>
                        <FeaturedArticle
                        title='How to Increase Your IQ by Eating Gifted Children'
                        summary='read title'
                        time='9 min read'
                        link='/'
                        img={article1}
                        />
                                                <FeaturedArticle
                        title='How to Increase Your IQ by Eating Gifted Children'
                        summary='read title'
                        time='9 min read'
                        link='/'
                        img={article2}
                        />
                    </ul>
                </Layout>
            </main>
        </>
    );
}

export default Articles;
