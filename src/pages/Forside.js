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
        justifyContent: 'space-evenly',
        color: '#FFFFFF'
      }}>

        <Box sx={{
          display: 'flex',
          mx: '20%',
          flexDirection: 'row',
          justifyContent: 'space-evenly'
        }}>

          <Box sx={{ flexDirection: 'row' }}>
            <Typography>SPONSORS AND PARTNERS</Typography>
          </Box>

          <Box sx={{ flexDirection: 'column' }}>
            <a href="#"><img src={require('../images/sponsorNike.png')} width={"200px"} alt='SponsorNike'></img></a>
          </Box>

          <Box sx={{ flexDirection: 'column' }}>
            <a href="#"><img src={require('../images/sponsorNike.png')} width={"200px"} alt='SponsorNike'></img></a>
          </Box>

          <Box sx={{ flexDirection: 'column' }}>
            <a href="#"><img src={require('../images/sponsorNike.png')} width={"200px"} alt='SponsorNike'></img></a>
          </Box>

          <Box sx={{ flexDirection: 'column' }}>
            <a href="#"><img src={require('../images/sponsorNike.png')} width={"200px"} alt='SponsorNike'></img></a>
          </Box>
        </Box>

      </Box>












      {/* <Box
        sx={{
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
          <Typography>SPONSORS AND PARTNERS</Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            color: '#FFFFFF',
            mx: '20%',
            mt: '3rem',
            justifyContent: 'center'
          }}> */}




      {/* <Grid container spacing={0} columns={12}>
            <Grid xs={3}>
              <a href="#"><img src={require('../images/sponsorNike.png')} width={"200px"} alt='SponsorNike'></img></a>
            </Grid>
            <Grid xs={3}>
              <a href="#"><img src={require('../images/sponsorNike.png')} width={"200px"} alt='SponsorNike'></img></a>

            </Grid><Grid xs={3}>
              <a href="#"><img src={require('../images/sponsorNike.png')} width={"200px"} alt='SponsorNike'></img></a>
            </Grid>
            <Grid xs={3}>
              <a href="#"><img src={require('../images/sponsorNike.png')} width={"200px"} alt='SponsorNike'></img></a>

            </Grid><Grid xs={3}>
              <a href="#"><img src={require('../images/sponsorNike.png')} width={"200px"} alt='SponsorNike'></img></a>
            </Grid>
            <Grid xs={3}>
              <a href="#"><img src={require('../images/sponsorNike.png')} width={"200px"} alt='SponsorNike'></img></a>

            </Grid><Grid xs={3}>
              <a href="#"><img src={require('../images/sponsorNike.png')} width={"200px"} alt='SponsorNike'></img></a>
            </Grid>
            <Grid xs={3}>
              <a href="#"><img src={require('../images/sponsorNike.png')} width={"200px"} alt='SponsorNike'></img></a>
            </Grid>
          </Grid> */}




      {/* <table>
            <tr>
              <th>MAIN SPONSOR</th>
              <th>KIT SUPPLIER</th>
              <th>NAME SPONSOR</th>
              <th>SHIRT SPONSOR</th>
            </tr>
            <tr>
              <td><a href="#"><img src={require('../images/sponsorNike.png')} width={"300"} alt='SponsorNike'></img></a></td>
              <td><a href="#"><img src={require('../images/sponsorNike.png')} width={"300"} alt='SponsorNike'></img></a></td>
              <td><a href="#"><img src={require('../images/sponsorNike.png')} width={"300"} alt='SponsorNike'></img></a></td>
              <td><a href="#"><img src={require('../images/sponsorNike.png')} width={"300"} alt='SponsorNike'></img></a></td>
            </tr>
          </table>
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          color: '#FFFFFF',
          mx: '20%',
          mt: '6rem',
          justifyContent: 'center'
        }}>
          <Typography>EXCLUSIVE PARTNERS</Typography>
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
          <table>
            <tr>
              <th>MAIN SPONSOR</th>
              <th>KIT SUPPLIER</th>
              <th>NAME SPONSOR</th>
              <th>SHIRT SPONSOR</th>
            </tr>
            <tr>
              <td><a href="#"><img src={require('../images/sponsorNike.png')} width={"300"} alt='SponsorNike'></img></a></td>
              <td><a href="#"><img src={require('../images/sponsorNike.png')} width={"300"} alt='SponsorNike'></img></a></td>
              <td><a href="#"><img src={require('../images/sponsorNike.png')} width={"300"} alt='SponsorNike'></img></a></td>
              <td><a href="#"><img src={require('../images/sponsorNike.png')} width={"300"} alt='SponsorNike'></img></a></td>
            </tr>
          </table>
        </Box> 
       </Box> */}

    </>
  )
}

