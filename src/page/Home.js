import React from 'react'
import Carousel from '../component/index/Carousel'
import ProgramSection from '../component/index/Program'
import Schedule from '../component/index/Schedule'
import FactsSection from '../component/index/Facts'
import TeamSection from '../component/index/Team'
import TestimonialSection from '../component/index/Testimonial'
import AboutSection from '../component/index/AboutSection'
import BlogSection from '../component/index/BlogSection'



const Home = () => {
  return (
    <div>
      
      <Carousel />
    <AboutSection/>
    <ProgramSection/>
    <Schedule/>
    <FactsSection/>
    <TeamSection/>
    <TestimonialSection/>
    <BlogSection/>
    </div>
  )
}

export default Home
