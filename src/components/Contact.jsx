import React from 'react'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { fadeIn } from '../utils/motion'
import Swal from 'sweetalert2'

const Contact = () => {
  const formRef = useRef();
  
  const [form, setForm] = useState
  ({
    name: '',
    email:'',
    message:'',
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
  {
    const { name, value } = e.target;
    setForm({ ...form, [name]:value })
  }

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    if (form.message == '' || form.name == '' || form.email == '')
    {
      Swal.fire
      ({
      position: 'center',
      icon: 'warning',
      title: "No invisible ink allowed",
      text: "Fill in those fields!",
      width: 'auto',
      })

      return;
    }
    setLoading(true);
    emailjs.send(
    'service_uxh3ebm',
    'template_873bzeb',
    {
      from_name: form.name,
      to_name: 'muzamil "sid" ',
      from_email: form.email,
      to_email: 'sidhuxnm@gmail.com',
      message: form.message,
    },
    'OlpYQuxEdsBmsrjsG'
    )

    .then(() => 
    {
      setLoading(false);
      // alert("You rock! I'll be back before you can say 'supercalifragilisticexpialidocious'.")
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: "You rock!",
        text: "I'll get back to you before you can say 'supercalifragilisticexpialidocious'",
        showConfirmButton: true,
        width: 'auto',
      })
      setForm(
        {
          name: '',
          email: '',
          message: '',
        }
      )
    }, (error) =>
    {
      setLoading(false);
      console.log(error);

      // alert('Uh-oh, a wild glitch appeared!')
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: "Uh-oh!",
        text: "A wild glitch appeared!",
        showCancelButton: true,
        width: 'auto',
      })
    }
    )
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden justify-center'>
      <motion.div
        variants={fadeIn("down", "spring", 0.5, 0.75)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Ready to Connect?</p>
        <h3 className={styles.sectionHeadText}>Get in Touch</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder="What's your name?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />          
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder="What's your email?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />          
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea rows={7} name='message' value={form.message} onChange={handleChange} placeholder="What's on your mind?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />          
          </label>

          <div className='flex text-center justify-center'>
            {/* <button type='submit' className='bg-white py-3 px-8 outline-none border-none w-fit text-primary font-bold shadow-md shadow-primary rounded-xl'>
              {loading ? 'Sending...' : 'Send'}
            </button> */}
            {/* <button className="shadow__btn" type='submit'>
              {loading ? 'Sending...' : 'Send'}
            </button> */}
            <button className="button" type='submit'>
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={fadeIn("down", "spring", 0.5, 0.75)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");