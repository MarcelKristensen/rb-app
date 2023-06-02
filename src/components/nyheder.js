import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Link, styled } from '@mui/material';

export default function SenesteNyheder(props) {
  return (
    <>
      <Card sx={{ mx: '1%', my: '5%' }}>
        <CardActionArea>
          <CardContent
            sx={{
              backgroundColor: '#ffffff', minHeight: '80px'
            }}>
            <h1 component="div">
              {props.title}
            </h1>
            <Typography>
              {props.text}
            </Typography>
            <CardMedia
              component="img"
              image={props.image}
              alt={props.alt}
            />
            <CardActions
              sx={{
                backgroundColor: '#ffffff'
              }}>
              <Link href="#" color="#000000">
                Læs mere...
              </Link>
            </CardActions>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
