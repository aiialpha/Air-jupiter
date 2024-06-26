import React from 'react'
import './Home.css'
import hero from '../../Assets/hero.jpg'
import BookingTabs from './Booking/NewbokkingTabs'
import Destinations from './Destinations'

export default function Home() {
  return (
    <>
     <div className="hero">
        <img src={hero} alt='plane wings in a colorful sky'/>
        
        <div className="overlay">
          <BookingTabs />  
        </div>
        
     </div>
     <div className="destinations">
          <Destinations />
        </div>
    </>
  )
}
