import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { play } from '../assets'
import { figmalogo } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { website } from '../assets'



const ProjectCard = ({index, name, description, tags, image, figma_link, github_link, playstore_link, isLogo, isPlaystore, isWeb, web_link, isFigma}) =>
{
  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[550px] '>
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            {isFigma == true &&
              <div onClick={() => window.open(figma_link, "_blank")} className='black-gradient w-8 h-8 rounded-full border-white border-solid border-[2px] flex justify-center items-center cursor-pointer'>
                <img src={figmalogo} alt="Figma" className='object-contain' />
              </div>
            }
            {isLogo == true &&
              <div onClick={() => window.open(github_link, "_blank")} className='ml-1 black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'>
                <img src={github} alt="github" className='object-contain' />
              </div>
            }
            {isPlaystore == true &&
              <div onClick={() => window.open(playstore_link, "_blank")} className='ml-1 black-gradient w-8 h-8 rounded-full border-white border-solid border-[2px] flex justify-center items-center cursor-pointer'>
                <img src={play} alt="PlayStore" className='object-contain ml-0.5 h-5 w-5' />
              </div>
            }
            {isWeb == true &&
              <div onClick={() => window.open(web_link, "_blank")} className='ml-1 black-gradient w-8 h-8 rounded-full border-white border-solid border-[2px] flex justify-center items-center cursor-pointer'>
                <img src={website} alt="PlayStore" className='object-contain h-5 w-5' />
              </div>
            }
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>
            {name}
          </h3>
          <p className='mt-2 text-secondary text-[14px]'>
            {description}
          </p>
        </div>

        <div className='mt-[15px] flex flex-wrap gap-2 '>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} flex justify-evenly items-center`}>MY WORK</p>
        <h2 className={`${styles.sectionHeadText} flex justify-evenly items-center`}>Creative Projects.</h2>
      </motion.div>

      <div className='w-full flex justify-evenly items-center'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center'>
          Welcome to a world of creativity and innovation! Explore my diverse portfolio of real world projects that showcase my passion and skills across various domains.
          It reflects my ability to solve complex problems, work with different technologies and manage projects effectively
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "Projects")