import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import '../Hero/Hero.css'
export default function Hero() {
  return (

    <div className="row hero" >
    <div className='col-lg-custom-hero'>
      <img src="https://www.techsurprise.com/wp-content/uploads/2019/08/5-Ways-to-Use-Technology-When-You-Study-featured.jpg"  style={{ width: '100%', maxWidth: '50%', height: '80%' }}/>
      <img src="https://th.bing.com/th/id/OIP.bT5sYbtwHVQj2YovwkpvYgHaE8?rs=1&pid=ImgDetMain" style={{ width: '100%', maxWidth: '50%', height: '80%' }}/>
    </div>
    
    <div className="flex col-lg-custom-hero Card flex" >
      <h5 className='font-weight-bold'>Find your Study partner</h5>
      <p> Looking for the perfect Deskmate, the ally for future goals, tutor pal? Match your location, schedule, school/college, courses and more...</p>
      <Button variant="primary">Explore</Button>{' '}
    </div>

    
  </div>
  
  )
}
