import React from 'react'
import "../Cafe/Cafe.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Venue } from '../../Venue';
export default function Cafe() {
  return (
    <div className='cafe'>
      <h1>BOOK CAFE</h1>
<ul className='venue-list'>
{Venue.map((venue) => (
  <li className="listItem " key={venue.id}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://media.blogto.com/articles/fb01-20160226-kravecoffee.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {venue.venue_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {venue.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Explore</Button>
      </CardActions>
    </Card>
    
  </li>
))}
 
    </ul>
    </div>
    
   
  )
}
