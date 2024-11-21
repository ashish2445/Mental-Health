import React from 'react'
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import heroImg from "../assets/hero.webp"
import {motion} from "framer-motion"
import {fadeIn} from '../utilis/animationVariants'

const Hero = () => {
  return (
    <section id='home' className='bg-heroBg text-white flex items-center pt-28 md:h-screen'>
     <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-hidden gap-12 h-full'>
    {/* left side */}
     <motion.div 
     variants={fadeIn('down',0.2)}
     initial = "hidden"
     whileInView={"show"}
     viewport={{ once: false, amount : 0.7 }}
     className='md:w-1/2'>
      <h1 className='text-3xl font-secondary font-bold mb-4 md:w-4/5 leading-snug'>Start Your Journey to Mental Wellness</h1>
      <p className='text-lg mb-12 md:pr-8'>The platform offers AI-driven therapist matching, multilingual therapy, 24/7 chatbot support, wellness plans, guided meditations, and peer-support, providing accessible mental health care across India</p>
      <button className='bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90'>
        <a href="#contact" className='flex gap-1 items-center'>
          <span>
            Get Started
          </span>
          <IoArrowForwardCircleSharp />
        </a>
      </button>
     </motion.div>
     {/* right side */}
     <motion.div
     variants={fadeIn('left',0.2)}
     initial = "hidden"
     whileInView={"show"}
     viewport={{ once: false, amount : 0.7 }}
     className='md:w-1/2 h-full'>

     <img src={heroImg} alt="hero image" className='w-full object-cover'/>
     
     </motion.div>

     </div>
    </section>
  )
}

export default Hero
