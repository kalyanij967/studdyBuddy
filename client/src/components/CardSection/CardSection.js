import React from 'react'
import './CardSection.css'

const CardSection = () => {
  return (
    <>
        <h2 className='text-center heading'>With Sapience...</h2>
        <div className="justify-between row padding-left-40px">
            <div className="col-lg-custom-cardsection text-center Card ">
                <h5 className='font-weight-bold'>The "good" kind of peer pressure</h5>
                <p>You know how your parents always say peer pressure is bad? Well… when it comes to studying, they're wrong. Studying with peers helps you get better grades - and that's scientifically proven.</p>
            </div>
            <div className="col-lg-custom-cardsection text-center Card">
                <h5 className='font-weight-bold'>Embrace the power of community</h5>
                <p>Whether tackling assignments or attending coaching institutes, working with like-minded peers enhances convenience and cultivates teamwork. Our discreet matching system connects you with supportive study companions who share your goals, making learning a comfortable and motivating experience.</p>
            </div>
            <div className="col-lg-custom-cardsection text-center Card">
                <h5 className='font-weight-bold'>Breaking Barriers with AI Buddy</h5>
                <p>With AI bots, we've got your back. From fixing grammar to simplifying text and translating languages, learning just got easier. Say goodbye to language barriers and hello to seamless learning</p>
            </div>
            {/* <div className="col-lg-cardsection Card">
                <h5 className='font-weight-bold'>Make learning an exciting journey</h5>
                <p>Our platform connects you with like-minded individuals eager to explore educational venues together, whether it's a cozy book café, captivating museum, or insightful science center. Together, challenges become manageable, work becomes lighter and the learning journey transforms into a fulfilling adventure.</p>
            </div> */}
           
        </div>
    </>
  )
}

export default CardSection
