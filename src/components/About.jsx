import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

// const ServiceCard = ({index, title, icon}) => {
//   return(
//     <Tilt tiltReverse={true} className='xs:w-[250px] w-full flex'>
//       <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[10px] shadow-card'>
//         <div options={{max:45, scale:1, speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
//           <img src={icon} alt={title} className='h-16 w-16 object-contain' />
//           <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
//         </div>
//       </motion.div>
//     </Tilt>
//   )
// }

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} flex justify-evenly items-center`}>Who am I?</p>
        <h2 className={`${styles.sectionHeadText} flex justify-evenly items-center`}>Get to know me</h2>
      </motion.div>
      <motion.p variants={fadeIn("","", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-6xl leading-[28px] text-center'>
      I'm a frontend developer deeply passionate about crafting user-friendly interfaces and designing visually captivating digital experiences. With a strong focus on staying updated with the latest technologies, I continuously refine my skills to deliver exceptional results. Beyond coding, I indulge in exploring diverse interests and hobbies, believing that a well-rounded life fuels creativity and innovation in my work.
      </motion.p>
      {/* <div className='mt-12 flex flex-wrap gap-10 items-center justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div> */}
    </>
  )
}

export default SectionWrapper(About, "about")