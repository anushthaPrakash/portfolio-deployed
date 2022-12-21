import React from 'react'
const { motion } = require('framer-motion');

import { SocialIcon } from 'react-social-icons'
type Props = {
    img: string; title: string; technology: string; link: string; desc: string;

}

const Projectcard = ({ img, title, technology, link, desc }: Props) => {
    // const projects = [1, 2, 3, 4, 5];
    return (
        <article className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
            <motion.img
                src={img}
                alt="Profile img"
                initial={{
                    y: -300,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true
                }}
                className='w-auto h-auto rounded-lg object-cover'
            />

            <div className='space-y-4 px-0 md:px-10 max-w-6xl '>
                <div className='flex space-x-8'>
                    <h4 className='text-3xl font-semibold text-center'>
                        <span className='underline decoration-[#F7AB0A]'>
                            Case Study:
                        </span>
                        {title}
                    </h4>
                    <div className='flex items-center space-x-2 justify-center '>

                        <img
                            className='h-10 w-10 rounded-full'
                            src={technology}
                            alt="" />

                        {/* <Link href= {encodeURIComponent(project.linkToBuild)} className='heroBtn'>Link</Link> */}
                        <SocialIcon
                            url={link}
                            fgColor='gray'
                            bgColor='transparent'
                            className=' cursor-pointer' />
                    </div>

                </div>

                {/* <p className='text-lg text-center md:text-left'>
                    {desc}
                </p> */}
                <ul className='list-disc text-center space-y-4 ml-5 md:text-left text-lg h-64 max-h-96 pr-5 overflow-y-scroll  scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
                 <li>{desc}</li>
                </ul>
            </div>

        </article>
    )
}

export default Projectcard