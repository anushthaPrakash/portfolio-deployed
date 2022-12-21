import { url } from 'inspector';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';

type Props = {
    // pageInfo:PageInfo
}
// {pageInfo}
const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
            `Hi, I'm Anushtha Prakash`,
            // ${pageInfo?.name}
            'Girl-who-loves-coffee.tsx',
            '<ButLovesToCodeMore />'
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img src="/profile.png" alt='profile pic' className='relative mx-auto object-cover rounded-full h-32 w-32' />
            {/* {urlFor(pageInfo?.heroImage).url()} */}
            <div className='z-20'>
                <h2 className='text-sm uppercase text-[#F7AB0A] pb-2 tracking-[15px]'>
                    {/* {pageInfo?.role} */}
                    Web Developer
                </h2>
                
                <h1 className='text-4xl lg:text-5 xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1> 

                <div className='pt-5'>
                    <Link href='#about' className='heroBtn'>About</Link>
                    <Link href='#projects' className='heroBtn'>Projects</Link>
                    <Link href='#skills' className='heroBtn'>Skills</Link>
                    <Link href='#experience' className='heroBtn'>Experience</Link>
                    
                    
                </div>
            </div>

        </div>
    )
}

export default Hero