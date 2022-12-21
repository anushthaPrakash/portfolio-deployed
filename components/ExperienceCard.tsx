const { motion } = require('framer-motion');
import React from 'react'


type Props = {


}

const ExperienceCard = (props: Props) => {
    return (
        <article className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                src="/google.png"
                alt="Profile img"
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                className='w-32 h-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover object-center'
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Will Update</h4>
                <p className='font-bold text-2xl mt-1'>Will Update</p>
                <div className='flex space-x-2 my-2'>

                    <img src="/next.png" alt="Javascript" className='h-10 w-10 rounded-full' />
                    <img src="/mango.png" alt="Javascript" className='h-10 w-10 rounded-full' />
                    <img src="/tail.png" alt="Javascript" className='h-10 w-10 rounded-full' />
                    <img src="/react.png" alt="Javascript" className='h-10 w-10 rounded-full' />
                </div>
                <p className='uppercase py-5 text-gray-300'>
                 Nov 2021 - Present
                </p>

                <ul className='list-disc space-y-4 ml-5 text-lg h-64 max-h-96 pr-5 overflow-y-scroll  scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
                 <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sapien nisl, venenatis ut neque sit amet, aliquet tempor tellus.</li>
                 <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sapien nisl, venenatis ut neque sit amet, aliquet tempor tellus.</li>
                 <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sapien nisl, venenatis ut neque sit amet, aliquet tempor tellus.</li>
                 <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sapien nisl, venenatis ut neque sit amet, aliquet tempor tellus.</li>
                 <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sapien nisl, venenatis ut neque sit amet, aliquet tempor tellus.</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard