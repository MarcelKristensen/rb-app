import { Box, Typography, Grid, Link, styled, Button } from "@mui/material";
import HeroBanner from '../components/hero'
import SenesteNyheder from '../components/senesteNyheder'
import Hero from '../images/rb-hero.png'
import React from "react";
import Nyhed1 from '../images/nyhed-1.png';
import Nyhed2 from '../images/nyhed-2.png';
import Nyhed3 from '../images/nyhed-3.png';
import Nyhed4 from '../images/nyhed-4.png';

// Button er herfra: https://mui.com/system/styles/basics/#:~:text=to%20start%20editing-,Styled%20components%20API,-Note%3A%20this%20only
const MyButton = styled(Button)({
  background: '#2669A4',
  border: 0,
  borderRadius: 5,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 50,
  padding: '0 30px',
  "&:hover": {
    backgroundColor: '#F3B820'
  }
});

export default function Forside() {
  return (
    <>
      <HeroBanner header="Roskilde Boldklub" subtitle="af 1906" image={Hero} />

      {/* Nyheder */}
      <Box
        sx={{ mx: '20%' }}>
        <h1>Seneste nyheder</h1>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mx: '20%'
        }}>
        <SenesteNyheder image={Nyhed1} title="Doner din gamle fodbold uanset stand" date="22. Maj 2023" alt="Nyhed 1"></SenesteNyheder>
        <SenesteNyheder image={Nyhed2} title="Ny kunsgræs på banen er spilleklar næste uge" date="12. Maj 2023" alt="Nyhed 2"></SenesteNyheder>
        <SenesteNyheder image={Nyhed3} title="Elitehold giver ikke op på hjemmebanen!" date="6. Maj 2023" alt="Nyhed 3"></SenesteNyheder>
        <SenesteNyheder image={Nyhed4} title="U9 drenge vinder over Svinninge" date="5. Maj 2023" alt="Nyhed 4"></SenesteNyheder>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        my: '2%'
      }}>
        <Link href="/#" style={{ textDecoration: 'none' }}>
          <MyButton sx={{
            textTransform: 'none'
          }}>
            <Typography variant="blueBtn">Alle nyheder</Typography>
          </MyButton>
        </Link>
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
            <Grid item sx={3}>
              <a href="/#"><img src={require('../images/sponsorNike.png')} width={"250px"} alt='SponsorNike'></img></a>
            </Grid>
            <Grid item sx={3}>
              <a href="/#"><img src={require('../images/sponsorNike.png')} width={"250px"} alt='SponsorNike'></img></a>
            </Grid>
            <Grid item sx={3}>
              <a href="/#"><img src={require('../images/sponsorNike.png')} width={"250px"} alt='SponsorNike'></img></a>
            </Grid>
            <Grid item sx={3}>
              <a href="/#"><img src={require('../images/sponsorNike.png')} width={"250px"} alt='SponsorNike'></img></a>
            </Grid>
          </Grid>
        </Box>
      </Box>


    </>
  )
}

