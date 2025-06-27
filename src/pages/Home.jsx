import React from 'react'
import Navbar from '../Sections/Navbar'
import Content from '../Sections/Content'
import Services from '../Sections/Services'
import ProfileSection from '../Sections/ProfileSection'
import Contact from '../Sections/Contact'
import Appointment from '../Sections/Appointment'

const Home = () => {
  return (
     <div className="relative scroll-smooth">
      <Navbar />
      <Content />
      <ProfileSection />
      <Services />
      <Appointment />
      <Contact />
    </div>
  )
}

export default Home