import React from 'react'
import { urlFor } from '../sanity';
const { motion } = require('framer-motion');
import { Project } from '../typings';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons'
type Props = {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {
  // const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.5
      }}
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
        {projects?.map((project, i) => (
          <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img
              src={urlFor(project?.image).url()}
              alt="project img"
              className='w-96 h-72 rounded-lg object-cover'
              initial={{
                y: -300,
                opacity: 0
              }}
              transition={{
                duration: 1.2
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
            />

            <div className='space-y-4 px-0 md:px-10 max-w-6xl'>
              <div className='flex space-x-8'>
                <h4 className='text-3xl font-semibold text-center'>
                  <span className='underline decoration-[#F7AB0A]'>
                    Case Study {i + 1} of {projects.length}:
                  </span>
                  {project?.title}
                </h4>
                <div className='flex items-center space-x-2 justify-center '>
                  {project?.technologies.map((technology) => (
                    <img
                      className='h-10 w-10 rounded-full'
                      key={technology._id}
                      src={urlFor(technology.image).url()}
                      alt="" />
                  ))}
                  {/* <Link href= {encodeURIComponent(project.linkToBuild)} className='heroBtn'>Link</Link> */}
                  <SocialIcon
                    key={project._id}
                    url={project.linkToBuild}
                    fgColor='gray'
                    bgColor='transparent'
                    className=' cursor-pointer' />
                </div>

              </div>

              <p className='text-lg text-center md:text-left'>
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects