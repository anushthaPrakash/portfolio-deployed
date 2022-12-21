import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import Projectn from '../components/Projectn'
// import { Experience, PageInfo, Project, Skill, Social } from '../typings'
// import { fetchExperiences } from '../utils/fetchExperiences'
// import { fetchPageInfo } from '../utils/fetchPageInfo'
// import { fetchProjects } from '../utils/fetchProjects'
// import { fetchSkills } from '../utils/fetchSkills'
// import { fetchSocial } from '../utils/fetchSocials'


type Props = {
	// pageInfo: PageInfo;
	// pageInfo: PageInfo[];
	// experiences: Experience[];
	// skills: Skill[];
	// projects: Project[];
	// socials: Social[];

}
// pageInfo,
const Home = (props:Props) => {
	return (
		<div className='bg-[#000000] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden  z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
			{/* bg-[#333333] overflow-y-scroll overflow-x-hidden*/} 
			<Head>
				<title>Anushtha Prakash</title>
			</Head>

			<Header />

			<section id='hero' className='snap-start'>
				{/* snap-start */}
				<Hero />
				{/* pageInfo={pageInfo} */}
			</section>

			<section id='about' className='snap-center'>
				<About  />
			   {/* pageInfo={pageInfo} */}
			</section>
			<section id='projects' className='snap-start'>
				< Projectn  />
			</section>

			<section id='skills' className='snap-start'>
				<Skills />
			</section>

			<section id='experience' className='snap-center'>
				<WorkExperience />
			</section>





			<section id='contact' className='snap-start'>
				<ContactMe />
			</section>
			<Link href="#hero">
				<footer  className='sticky bottom-5 w-full cursor-pointer'>
					<div  className='flex items-center justify-center'>
						<img  
						className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
						src="profile.png"
						alt=""/>
					</div>
				</footer>
			</Link>
		</div>
	)
}
export default Home;

// export const getStaticProps: GetStaticProps<Props> = async() => {
// 	// const pageInfo: PageInfo = await fetchPageInfo();
// 	const experiences: Experience[] = await fetchExperiences();
// 	const skills: Skill[] = await fetchSkills();
// 	const projects: Project[] =await fetchProjects();
// 	const socials: Social[] = await fetchSocial();
	
// 	return {
// 		props: {
// 			// pageInfo,
// 			experiences,
// 			projects,
// 			skills,
// 			socials,
// 		},
// 		revalidate: 10,
// 	}


// }
