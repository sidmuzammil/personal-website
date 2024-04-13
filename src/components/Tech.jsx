import React from 'react'
import { motion } from "framer-motion";
import { styles } from '../styles';
import { textVariant } from "../utils/motion";
import { html, gsap, framer, git, react, figma1, javascript, css,Threejs} from '../assets';

const Tech = () => {
  return (
    <div className='centur'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} flex justify-evenly items-center`}>quick way to see my skills</p>
      </motion.div>
      <div className='slider'>
        <ul className='brands'>
          <li className='brand-logo'><img src={html} alt="" /></li>
          <li className='brand-logo'><img src={css} alt="" /></li>
          <li className='brand-logo'><img src={javascript} alt="" /></li>
          <li className='brand-logo'><img src={git} alt="" /></li>
          <li className='brand-logo'><img src={Threejs} alt="" /></li>
          <li className='brand-logo'><img src={gsap} alt="" /></li>
          <li className='brand-logo'><img src={framer} alt="" /></li>
          <li className='brand-logo'><img src={react} alt="" /></li>
          <li className='brand-logo'><img src={figma1} alt="" /></li>

          <li className='brand-logo'><img src={html} alt="" /></li>
          <li className='brand-logo'><img src={css} alt="" /></li>
          <li className='brand-logo'><img src={javascript} alt="" /></li>
          <li className='brand-logo'><img src={git} alt="" /></li>
          <li className='brand-logo'><img src={Threejs} alt="" /></li>
          <li className='brand-logo'><img src={gsap} alt="" /></li>
          <li className='brand-logo'><img src={framer} alt="" /></li>
          <li className='brand-logo'><img src={react} alt="" /></li>
          <li className='brand-logo'><img src={figma1} alt="" /></li>
        </ul>
      </div>
    </div>
  )
}

export default Tech

