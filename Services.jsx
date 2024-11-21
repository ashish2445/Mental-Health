import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import serviceImg1 from "../assets/service1.webp"
import serviceImg2 from "../assets/service2.webp"
import serviceImg3 from "../assets/service3.webp"
import serviceImg4 from "../assets/service4.webp"
import {motion} from "framer-motion"
import { fadeIn } from '../utilis/animationVariants';

const Services = () => {
  return (
    <div className='bg-[#f7f8f6]' id='services'>
      <div className='pt-28 px-4 container mx-auto'>
        <motion.div
        variants={fadeIn('up',0.2)}
        initial = "hidden"
        whileInView={"show"}
        viewport={{ once: false, amount : 0.7 }}
        className='text-center space-y-5'>
          <h2 className='text-4xl font-bold font-secondary text-heroBg'>What Can We Do Together</h2>
          <p className='md:w-1/2 mx-auto'>The Personalized Mental Health Platform provides affordable, AI-driven care, multilingual therapy, 24/7 chatbot support, wellness plans, and peer groups, fostering a stigma-free, supportive community.</p>
        </motion.div>
        {/* service Category */}
        <div className='py-12 md:w-4/5 mx-auto'>
    <Tabs>
    <motion.TabList 
    variants={fadeIn('up',0.3)}
    initial = "hidden"
    whileInView={"show"}
    viewport={{ once: false, amount : 0.7 }}
    className="flex flex-wrap justify-between items-center md:gap-8 gap-4">
      <Tab>Couple Counseling</Tab>
      <Tab>Parenting Skills</Tab>
      <Tab>Feeling Stuck</Tab>
      <Tab>Self-Confidence</Tab>

    </motion.TabList>


    <TabPanel>
      <motion.div 
      variants={fadeIn('left',0.2)}
      initial = "hidden"
      whileInView={"show"}
      viewport={{ once: false, amount : 0.7 }}
      className="flex flex-col md:flex-row gap-8 mt-8">
      <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
        <h3 className='text-3xl font-semibold text-primary mb-4'>Couple Counselling</h3>
        <p className='mb-8 '>Couple counseling focuses on improving communication, resolving conflicts, strengthening emotional bonds, and fostering mutual growth through personalized therapy in a confidential, supportive environment</p>
        <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
        <ul className='list-disc list-inside space-y-3'>
          <li>Improved Communication</li>
          <li>Conflict Resolution</li>
          <li>Emotional Connection</li>
        </ul>
      </div>
      <div className='md:w-1/2'>
     <img src={serviceImg1} alt="" className='w-full md:h-[446px] h-auto rounded-2xl object-cover'/>
      </div>
      </motion.div>
    </TabPanel>
    
    <TabPanel>
      <motion.div 
      variants={fadeIn('up',0.2)}
      initial = "hidden"
      whileInView={"show"}
      viewport={{ once: false, amount : 0.7 }}
      className="flex flex-col md:flex-row gap-8 mt-8">
      <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
        <h3 className='text-3xl font-semibold text-primary mb-4'>Parenting Skills</h3>
        <p className='mb-8 '>Parenting skills provide guidance on stress management, setting boundaries, positive communication, and child development, offering personalized plans to create a supportive, harmonious family environment</p>
        <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
        <ul className='list-disc list-inside space-y-3'>
          <li>Improved Communication</li>
          <li>Better Discipline Strategies</li>
          <li>Emotional Support</li>
        </ul>
      </div>
      <div className='md:w-1/2'>
     <img src={serviceImg2} alt="" className='w-full md:h-[446px] h-auto rounded-2xl object-cover'/>
      </div>
      </motion.div>
    </TabPanel>

    <TabPanel>
      <motion.div 
      variants={fadeIn('up',0.2)}
      initial = "hidden"
      whileInView={"show"}
      viewport={{ once: false, amount : 0.7 }}
      className="flex flex-col md:flex-row gap-8 mt-8">
      <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
        <h3 className='text-3xl font-semibold text-primary mb-4'>Felling Stuck</h3>
        <p className='mb-8 '>Feeling stuck focuses on overcoming emotional or mental blocks, offering personalized strategies, therapy, and wellness plans to regain clarity, motivation, and personal growth.</p>
        <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
        <ul className='list-disc list-inside space-y-3'>
          <li>Self-reflection</li>
          <li>Growth Opportunity</li>
          <li>Increased Creativity</li>
        </ul>
      </div>
      <div className='md:w-1/2'>
     <img src={serviceImg3} alt="" className='w-full md:h-[446px] h-auto rounded-2xl object-cover'/>
      </div>
      </motion.div>
    </TabPanel>

    <TabPanel>
      <motion.div 
      variants={fadeIn('up',0.2)}
      initial = "hidden"
      whileInView={"show"}
      viewport={{ once: false, amount : 0.7 }}
      className="flex flex-col md:flex-row gap-8 mt-8">
      <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
        <h3 className='text-3xl font-semibold text-primary mb-4'>Self Confidence</h3>
        <p className='mb-8 '>Self-confidence, key to mental well-being, empowers individuals by boosting resilience, reducing anxiety, and enhancing self-worth through guided exercises, therapy, and community support</p>
        <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
        <ul className='list-disc list-inside space-y-3'>
          <li>Improved Resilience</li>
          <li>Reduced Anxiety</li>
          <li>Enhanced Decision-Making</li>
        </ul>
      </div>
      <div className='md:w-1/2'>
     <img src={serviceImg4} alt="" className='w-full md:h-[446px] h-auto rounded-2xl object-cover'/>
      </div>
      </motion.div>
    </TabPanel>
  </Tabs>

        </div>

      </div>
    </div>
  )
}

export default Services
