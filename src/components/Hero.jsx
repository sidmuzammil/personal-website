import {motion} from 'framer-motion';
import {styles} from '../styles';
import { ComputersCanvas } from './canvas';


const Hero = () => {


  return (
    <motion.section initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}} transition={{duration:0.5}}  className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Zidhu</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I'm a frontend developer passionate about crafting user-friendly interfaces. I excel at creating visually appealing digital experiences and constantly strive to enhance my skills. Outside of work, I enjoy exploring diverse interests, making me a dynamic individual.</p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='relative xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
        <a href="#skills">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
              animate ={{
                y:[0, 24, 0]
              }}
              transition= {{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className= 'w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </motion.section>
  )
}

export default Hero