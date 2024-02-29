import React from 'react'
import Blog from '../Blog/Blog'
export default function About() {
  return (
    <div>
       <div className="mt-5">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <p>We are a team of passionate educators and technologists dedicated to revolutionizing the way people learn and collaborate. Our mission is to provide a platform that connects individuals with shared interests and facilitates meaningful learning experiences.</p>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="section-title">Our Story</h2>
        <div className="story-content">
          <p>Our journey began with a simple idea: to create a space where people can come together to learn, grow, and support each other. Inspired by our own experiences as learners, we set out to build a platform that harnesses the power of community and collaboration to drive personal and professional development.</p>
          <p>Over the years, we have seen our vision come to life as thousands of individuals have joined our platform to connect with like-minded peers, discover new opportunities, and unlock their full potential. As we continue to evolve and innovate, we remain committed to our core values of inclusivity, creativity, and lifelong learning.</p>
        </div>
      </div>
     <Blog/>
    </div>
  )
}
