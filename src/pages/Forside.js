import { Box, Typography, Grid } from "@mui/material";
import React from "react";

export default function Forside() {
  return (
    <>

      {/* Hero banner */}
      <Box
        sx={{
          backgroundColor: 'blueviolet',
          height: '400px'
        }}
      >
        HERO BANNER
      </Box>

      {/* Nyheder */}
      <Box
        sx={{
          backgroundColor: 'yellow',
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
              <a href="#"><img src={require('../images/sponsorNike.png')} width={"250px"} alt='SponsorNike'></img></a>
            </Grid>
            <Grid xs={3}>
              <a href="#"><img src={require('../images/sponsorNike.png')} width={"250px"} alt='SponsorNike'></img></a>

            </Grid><Grid xs={3}>
              <a href="#"><img src={require('../images/sponsorNike.png')} width={"250px"} alt='SponsorNike'></img></a>
            </Grid>
            <Grid xs={3}>
              <a href="#"><img src={require('../images/sponsorNike.png')} width={"250px"} alt='SponsorNike'></img></a>
            </Grid>
            
          </Grid>

        </Box>
      </Box>


    </>
  )
}

