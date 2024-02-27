import React from 'react'
import './CardSection.css'

const CardSection = () => {
  return (
    <>
        <h2 className='text-center heading'>Why choose us?</h2>
        <div className="row">
            <div className="col-lg-3 Card ">
                <h4 className='font-weight-bold'>The "good" kind of peer pressure</h4>
                <p>You know how your parents always say peer pressure is bad? Well… when it comes to studying, they're wrong. Studying with peers helps you get better grades - and that's scientifically proven.</p>
            </div>
            <div className="col-lg-3 Card">
                <h4 className='font-weight-bold'>Friends,Fun and learning all at one place</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatum tenetur veritatis autem odit assumenda amet dolore, repellat facilis consequatur nisi sequi exercitationem, sapiente ab asperiores facere nulla doloremque. Totam.</p>
            </div>
            <div className="col-lg-3 Card">
                <h4 className='font-weight-bold'>Finding your community</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut accusamus unde deleniti perspiciatis blanditiis veniam excepturi neque voluptatum nobis dolores exercitationem facilis, eveniet officiis quasi dignissimos architecto eligendi aperiam iure.</p>
            </div>
        </div>
    </>
  )
}

export default CardSection
