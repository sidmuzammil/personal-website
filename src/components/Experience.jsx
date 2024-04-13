import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from "../utils/motion";
import { MuzamilPdf } from "../assets";


const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
  contentStyle={{background: '#1d1836', color: '#fff'}}
  contentArrowStyle={{borderRight: '7px solid #232631'}}
  date={experience.level}
  iconStyle={{background: experience.iconBg}}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img src={experience.icon}  className="w-60%] h-[60%] object-contain" />
    </div>
  }>
    <div>
      <h3 className="text-white text-24px font-bold">{experience.title}</h3>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider">
              {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {

  const onButtonClick = () => {
     
    // using Java Script method to get PDF file
    fetch(MuzamilPdf).then((response) => {
        response.blob().then((blob) => {
         
            // Creating new object of PDF file
            const fileURL =
                window.URL.createObjectURL(blob);
                 
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "muzamilsid.pdf";
            alink.click();
        });
    });
};
  return (
    <>
      <motion.div >
        <motion.p className={`${styles.sectionSubText}  flex justify-evenly items-center `}>what about my skills</motion.p>
        <h2 className={`${styles.sectionHeadText} flex justify-evenly items-center`}> Unveiling My Skills</h2>
      </motion.div>
      <motion.div varients={textVariant()} className="flex justify-center mt-6 ">
        {/* <a href="muzamilsid.pdf" download="Muzamil_sid_resume.pdf" type="application/pdf"> */}
          <button className="button1" type="submit" onClick={onButtonClick}>
            <span className="button__text">Resume</span>
            <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
          </button>
        {/* </a> */}
      </motion.div>
      <div className="mt-10 flex flex-col">
        <VerticalTimeline>
            {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "skills")