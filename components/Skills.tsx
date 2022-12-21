import React from 'react'
const { motion } = require('framer-motion');
import Skill from './Skill';

type Props = {
  
}

const Skills = (props: Props) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>
        <h3 className='absolute top-28 uppercase tracking-[3px] text-gray-500 text-sm'>
            Hover over a skill for current proficiency
        </h3>

        <div className=' absolute top-36  grid grid-cols-4 gap-5'>

            <Skill url={"/c.png"} progress= {80} />
            <Skill url={"/next.png"} progress= {60} />
            <Skill url={"/react.png"} progress= {70} />
            <Skill url={"/react-native.png"} progress= {40} />
            <Skill url={"/sanity.png"} progress= {50} />
            <Skill url={"/download.png"} progress= {70} />
            <Skill url={"/mango.png"} progress= {50} />
            <Skill url={"/css.png"} progress= {70} />

            <Skill url={"/html.png"} progress= {85} directionLeft/>
            <Skill url={"/tail.png"} progress= {70}directionLeft/>
            <Skill  url={"/fire.png"} progress= {40} directionLeft/>
            <Skill  url={"/ts.png"} progress= {50}directionLeft/>
            <Skill  url={"/fm.png"} progress= {50}directionLeft/>
            <Skill  url={"/node.png"} progress= {70}directionLeft/>
            <Skill  url={"/nextauth.png"} progress= {50}directionLeft/>
            <Skill  url={"/js.png"} progress= {80}directionLeft/>
        </div>
    </motion.div>
  )
}

export default Skills