import React from 'react'
import Card from 'react-bootstrap/Card';
import {
 
  Link
} from "react-router-dom";

const Cards = () => {
  return (
    <>
    <div className="row">
      <div className="col-md-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://bespokeserenity.com/wp-content/uploads/2020/08/Stockholm-Public-Library--1024x768.jpg" />
          <Card.Body>
            <Card.Title href="#" className='underline-text'>Libraries</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://media.blogto.com/articles/fb01-20160226-kravecoffee.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70" />
          <Card.Body>
            <Link to ='/cafe'><Card.Title  className='underline-text'>Study/Book Cafe</Card.Title></Link>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.6lJGv-SBwpyjja2S7irJywHaE7?rs=1&pid=ImgDetMain" />
          <Card.Body>
            <Card.Title href="#" className='underline-text'>Study center</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
      
    </>
  )
}

export default Cards
