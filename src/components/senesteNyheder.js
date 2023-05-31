import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, styled } from '@mui/material';

export default function SenesteNyheder(props) {
  return (
    <>
    <Card sx={{ mx: '1%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.image}
          alt={props.alt}
        />
        <CardContent
        sx={{
          backgroundColor: '#2669A4', minHeight: '80px'
        }}>
          <Typography gutterBottom variant="latestNewsTitle" component="div">
          {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions 
        sx={{
          backgroundColor: '#2669A4'
        }}>
        <Typography variant="latestNewsDate">
          {props.date}
        </Typography>
      </CardActions>
    </Card>
    </>
  );
}
