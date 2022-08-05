import React from "react";
import "./styles/home_user.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';

export const home_user = () => {
  const array = [1,2,3,4,5,6,7,8,9,10] 
    return (
    < > 
    <div><h1>Visión General de tu Negocio</h1></div>
    <div classname="articles">
        <h3>Artículos</h3>
        <Icon color="secondary">add_circle</Icon>
    </div>
    <div>{array.map((numero)=>{
        return (
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        )
    })}
    </div>
    </>
  )
};

export default home_user;
