import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

export default function Kampe(props) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>


        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <CardMedia 
          component="img" 
          image={props.hold1}       
          alt={props.alt}
          sx={{width: '220px'}}
          />
          <Typography variant='h5'>VS</Typography>
          <CardMedia 
          component="img" 
          image={props.hold2}       
          alt={props.alt} 
          sx={{width: '220px'}}
          />
        </Box>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}