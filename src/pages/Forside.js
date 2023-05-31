import { Box, Typography, Grid } from "@mui/material";
import HeroBanner from '../components/hero'
import Hero from '../images/rb-hero.png'
import React from "react";

export default function Forside() {
  return (
    <>
     <HeroBanner header="Roskilde Boldklub" subtitle="af 1906" image={Hero}/>

      {/* Nyheder */}
      <Box
        sx={{
          backgroundColor: 'whitesmoke',
          height: '500px'
        }}>
        NYHEDER
      </Box>

      {/* Social Medie */}
      <Box
        sx={{
          backgroundColor: 'red',
          height: '800px'
        }}>
        SOCIALE MEDIA
      </Box>



      {/* Sponsor */}
      <Box sx={{
        backgroundColor: '#312B2B',
        pt: '2rem',
        justifyContent: 'space-evenly'
      }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            color: '#FFFFFF',
            mx: '20%',
            justifyContent: 'space-evenly'
          }}>
            <h3>SPONSORERE OG PARTNERE</h3>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            color: '#FFFFFF',
            mx: '20%',
            mt: '3rem',
            justifyContent: 'space-evenly'
          }}>

          <Grid container spacing={2} columns={12} alignItems="center" mb="6rem">
          <Grid xs={3}>
              <a href="/#"><img src={require('../images/sponsor-nike.png')} width={"90%"} alt='Sponsor-nike'></img></a>
            </Grid>
            <Grid xs={3}>
              <a href="/#"><img src={require('../images/sponsor-bauhaus.png')} width={"90%"} alt='Sponsor-bauhaus'></img></a>

            </Grid><Grid xs={3}>
              <a href="/#"><img src={require('../images/sponsor-fysio.png')} width={"90%"} alt='Sponsor-fysio'></img></a>
            </Grid>
            <Grid xs={3}>
              <a href="/#"><img src={require('../images/sponsor-home.png')} width={"90%"} alt='Sponsor-home'></img></a>
            </Grid>
            <Grid xs={3}>
              <a href="/#"><img src={require('../images/sponsor-ok.png')} width={"90%"} alt='Sponsor-ok'></img></a>
            </Grid>
            <Grid xs={3}>
              <a href="/#"><img src={require('../images/sponsor-puma.png')} width={"90%"} alt='Sponsor-puma'></img></a>

            </Grid><Grid xs={3}>
              <a href="/#"><img src={require('../images/sponsor-spar-nord.png')} width={"90%"} alt='Sponsor-spar-nord'></img></a>
            </Grid>
            <Grid xs={3}>
              <a href="/#"><img src={require('../images/sponsor-sport24.png')} width={"90%"} alt='Sponsor-home'></img></a>
            </Grid>

          </Grid>

        </Box>
      </Box>


    </>
  )
}

