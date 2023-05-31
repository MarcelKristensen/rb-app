import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Hero from '../images/rb-hero.png'

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(10)
    }
  }

}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <section className={classes.section} style={{ backgroundImage: `url("${Hero}")` }}>
      <Container maxWidth="md">
        <Box>
          <Typography gutterBottom={true}>
            <Typography align='center' color="white" variant="bannerHeading" >{props.header} </Typography>
            <Typography align='center' color="white" variant="bannerSubtitle" >{props.subtitle}</Typography>
          </Typography>
        </Box>
      </Container>
    </section>
  );
}