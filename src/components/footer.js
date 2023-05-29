import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Logo from '../images/RB-logo.svg'
import Link from '@mui/material/Link';
import {YouTube, Facebook} from '@mui/icons-material';




export default function footer() {
    return(
        <>
          <Box
            sx={{
              mt: 'auto'
            }}>
        <Box
          component="footer"
          height="200px"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark'
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
          }}
        >
          <Box sx={{color: 'whitesmoke', mx: 20}}>

            <Grid container alignItems='center' justifyContent='center'>
              <img src={Logo} alt='logo'/>
              <Grid container direction='row' spacing={12}>
                <Grid>
                    <Typography variant='footerHeading'>Hvor kan du finde os?</Typography>
                    <Typography>Roskilde Boldklub af 1906</Typography>
                    <Typography>Rådmanshaven 10</Typography>
                    <Typography>4000 Roskilde</Typography>
                </Grid>

                <Grid>
                <Typography variant='footerHeading' >Kontakt</Typography>
                  <Typography>Tlf.: 46 35 19 06</Typography>
                  <Typography>E-mail: rb1905@rb1906.dk</Typography>
                  <Typography>CVR nummer: 23490412</Typography>
                </Grid>

                <Grid>
                  <Typography variant='footerHeading'>Følg os</Typography>
                    <Typography>
                      <Link href="https://www.facebook.com/RB1906" color="inherit"><Facebook fontSize="large"/></Link>
                      <Link href="https://www.youtube.com/@rbvenner6798" color="inherit"><YouTube fontSize="large"/></Link>
                    </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
        </>
    );
}