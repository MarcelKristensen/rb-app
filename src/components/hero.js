import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Hero from '../images/rb-hero.png'

export default function Header(props) {
  return (
  <Box sx={{
    backgroundImage: `url("${Hero}")`
    }}>
      <Container maxWidth="md">
        <Box>
          <Typography gutterBottom={true}>
            <Typography align='center' color="white" variant="bannerHeading" >{props.header} </Typography>
            <Typography align='center' color="white" variant="bannerSubtitle" >{props.subtitle}</Typography>
          </Typography>
        </Box>
      </Container>
  </Box>
  );
}