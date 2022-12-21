// import { motion } from 'framer-motion'
const { motion } = require('framer-motion');
import React from 'react'

type Props = {
    // pageInfo: PageInfo;
}
// {pageInfo}
const About = (props: Props) => {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row px-10 justify-evenly max-w-7xl mx-auto items-center'
        >
            <h3 className='absolute top-24  uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>

            <motion.img
                src="/about.jpg"
                // {urlFor(pageInfo?.profilePic).url()}
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{
                    once: true
                }}
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-[400px]'
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a
                    {" "}<span className='underline decoration-[#F7AB0A]'>little</span>{" "}<span className='text-[#F7AB0A]'>background</span>

                </h4>
                <p className='text-base'>
                   {/* {pageInfo?.backgroundInformation} */}
                   I am Anushtha Prakash, 2nd year CSE Undergraduate at Indian Institute of Technology, Ropar. I love programming and web development. Currently working on sharpening my full stack development skills. Always ready for a cup of coffee and to explore whether its a new technology or a new destination for camping.
                </p>
            </div>
        </motion.div>
    )
}

export default About