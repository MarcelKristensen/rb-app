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
          <Typography>SPONSORERE OG PARTNERE</Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            color: '#FFFFFF',
            mx: '20%',
            mt: '3rem',
            justifyContent: 'center'
          }}>

          <Grid container spacing={2} columns={12}>
            <Grid xs={3}>
              <a href="/#"><img src={require('../images/sponsorNike.png')} width={"250px"} alt='SponsorNike'></img></a>
            </Grid>
            <Grid xs={3}>
              <a href="/#"><img src={require('../images/sponsorNike.png')} width={"250px"} alt='SponsorNike'></img></a>

            </Grid><Grid xs={3}>
              <a href="/#"><img src={require('../images/sponsorNike.png')} width={"250px"} alt='SponsorNike'></img></a>
            </Grid>
            <Grid xs={3}>
              <a href="/#"><img src={require('../images/sponsorNike.png')} width={"250px"} alt='SponsorNike'></img></a>
            </Grid>

          </Grid>

        </Box>
      </Box>


    </>
  )
}

