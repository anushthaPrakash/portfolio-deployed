import React from 'react'
import { SocialIcon } from 'react-social-icons'
const { motion } = require('framer-motion');
import Link from 'next/link';

type Props = {

}

const Header = (props: Props) => {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center '>
            <motion.div 
                className='flex flex-row items-center'
                initial={{
                    x: -300,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
            >
                {/* {socials.map((social)=>(
                    <SocialIcon 
                    key={social._id}
                    url={social.url}
                     fgColor='gray' 
                     bgColor='transparent' 
                     className='hover:animate-bounce  cursor-pointer' />

                ))} */}
                <SocialIcon url='https://www.youtube.com/@FreestyleCyberVerse' fgColor='gray' bgColor='transparent' className='hover:animate-bounce  cursor-pointer' />
                <SocialIcon url='https://www.instagram.com/anushthaprakash/' fgColor='gray' bgColor='transparent'className='hover:animate-bounce  cursor-pointer' />
                <SocialIcon url='https://www.linkedin.com/in/anushtha-prakash-4a4848226/' fgColor='gray' bgColor='transparent'className='hover:animate-bounce  cursor-pointer' />
                <SocialIcon url='https://github.com/anushthaPrakash' fgColor='gray' bgColor='transparent'className='hover:animate-bounce  cursor-pointer' />
                <SocialIcon url='https://www.facebook.com/profile.php?id=100011177711358' fgColor='gray' bgColor='transparent'className='hover:animate-bounce  cursor-pointer' />
            </motion.div>

            <motion.div
                className='flex flex-row items-center'
                initial={{
                    x: 300,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
            >
                <SocialIcon
                    className='cursor-pointer hover:animate-bounce'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                    url='#contact '
                />
                <Link href='#contact ' className='cursor-pointer uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</Link>
            </motion.div>
        </header>
    )
}

export default Header