import React from 'react'
import "../VenueSearch/VenueSearch.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import { FaSearch } from 'react-icons/fa';
import { Venue } from '../../Venue';
// import axios from "axios";
export default function VenueSearch() {
  const [query, setQuery] = useState("");
  return (
    <div>
       <div className='cafe'>

      <div className="search-container">
                <select className="location-dropdown">
                    <option value="location1">Location 1</option>
                    <option value="location2">Location 2</option>
                    <option value="location3">Location 3</option>
                </select>
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
                    className="search-bar"
                />
                <button className="search-button">
                    <FaSearch />
                </button>
      </div>
<ul className='venue-list'>
{Venue.filter((asd) =>
       asd.venue_name.toLowerCase().includes(query)
       ).map((venue) => (
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
    </div>
  )
}
