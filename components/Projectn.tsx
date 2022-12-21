import React from 'react'
import { motion } from 'framer-motion'
import Projectcard from './Projectcard';

type Props = {

}

const Projectn = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Project
            </h3>

            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
                <Projectcard img={"/fb-clone.png"} title={"Facebook 2.0"} technology={"/next.png"} link={"https://fb-clone-98s51zdo2-anushthaprakash-gmailcom.vercel.app/"} desc={"A fully responsive facebook clone that do Google authentication of new users using NextAuth.js and have its own database for storing posts with server site rendering.I build a next.js app using tailwind for designing and added nextauth authentication and linked it with firebase database, then deployed it on vercel. "} />
                <Projectcard img={"/portfolio.png"} title={"Portfolio"} technology={"/fm.png"} link={""} desc={"I build my fully responsive portfolio website using next.js and trailwind css. To make it stand out i using framer motion for providing the motion effects. It has its own backend using sanity. So do check it out."} />
                <Projectcard img={"/todo.png"} title={"ToDo App"} technology={"/kotlin.png"} link={"https://github.com/anushthaPrakash/ToDo-App"} desc={"Bad at remembering deadlines? Life seems messy? Worry not. Keep track of everything at hand through this simple to use ToDo App. Add, delete and edit tasks at the tip of your fingers."} />
                <Projectcard img={"/presento.png"} title={"Presento"} technology={"/css.png"} link={"https://anushthaprakash.github.io/Presento-2.0/"} desc={"To create a website for all my presentations and ppts.I made the project on html , javascript and styled it using basic css and added all my presentation. I deployed it using github pages. I will in future add a database for storing all the ppts and a option to add and remove from the database."} />

            </div>
        </motion.div>
    )
}

export default Projectn