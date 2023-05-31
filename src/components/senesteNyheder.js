import { Box, Typography, Link, Button, styled } from "@mui/material";
import React from "react";

// Button er herfra: https://mui.com/system/styles/basics/#:~:text=to%20start%20editing-,Styled%20components%20API,-Note%3A%20this%20only
const MyButton = styled(Button)({
  background: '#2669A4',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  "&:hover":{
    backgroundColor: '#F3B820'
  }
});

const boxSX = {
  "&:hover": {
    border: "5px solid #000000",
    color: 'gray',
    backgroundColor: 'lightblue'
  },
};

export default function Forside() {

  return (
    <>
      <Box
        sx={{
          mx: '20%'
        }}>
        <h1>Seneste nyheder</h1>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <Box
            sx={{
              bgcolor: '#2669A4',
              borderRadius: '0.3rem',
              ml: '4%',
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',         
            }}>
            <Link href="/#" style={{ textDecoration: 'none' }}><img src={require('../images/nyhed-1.png')} width={"100%"} alt='nyhed-1'></img>
              <Box
                sx={{
                  mx: '5%'
                }}>
                <Typography variant="latestNewsTitle">Doner gamle fodbold uanset stand</Typography>
                <Box
                  sx={{
                    alignContent: 'flex-end',
                    mt: '10%',
                    mb: '3%'
                  }}>
                  <Typography variant="latestNewsDate" >22. Maj 2023</Typography>
                </Box>
              </Box>
            </Link>
          </Box>
          <Box
            sx={{
              bgcolor: '#2669A4',
              borderRadius: '0.3rem',
              ml: '4%',
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
            }}>
            <Link href="/#" style={{ textDecoration: 'none' }}><img src={require('../images/nyhed-2.png')} width={"100%"} alt='nyhed-1'></img>
              <Box
                sx={{
                  mx: '5%'
                }}>
                <Typography variant="latestNewsTitle">Ny kunstgræs på banen er spilleklar næste i uge</Typography>
                <Box
                  sx={{
                    mt: '10%',
                    mb: '3%'
                  }}>
                  <Typography variant="latestNewsDate" >12. Maj 2023</Typography>
                </Box>
              </Box>
            </Link>
          </Box>
          <Box
            sx={{
              bgcolor: '#2669A4',
              borderRadius: '0.3rem',
              ml: '4%',
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            }}>
            <Link href="/#" style={{ textDecoration: 'none' }}><img src={require('../images/nyhed-3.png')} width={"100%"} alt='nyhed-1'></img>
              <Box
                sx={{
                  mx: '5%'
                }}>
                <Typography variant="latestNewsTitle">Elitehold giver ikke op på hjemmebanen!</Typography>
                <Box
                  sx={{
                    mt: '10%',
                    mb: '3%'
                  }}>
                  <Typography variant="latestNewsDate" >6. Maj 2023</Typography>
                </Box>
              </Box>
            </Link>
          </Box>
          <Box
            sx={{
              bgcolor: '#2669A4',
              borderRadius: '0.3rem',
              ml: '4%',
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            }}>
            <Link href="/#" style={{ textDecoration: 'none' }}><img src={require('../images/nyhed-4.png')} width={"100%"} alt='nyhed-1'></img>
              <Box
                sx={{
                  mx: '5%'
                }}>
                <Typography variant="latestNewsTitle">U9 drenge vinder over Svinninge</Typography>
                <Box
                  sx={{
                    mt: '10%',
                    mb: '3%'
                  }}>
                  <Typography variant="latestNewsDate" >22. Maj 2023</Typography>
                </Box>
              </Box>
            </Link>
          </Box>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          my: '5%'
        }}>
          <Link href="/#" style={{ textDecoration: 'none' }}>
            <MyButton sx={{
              textTransform: 'none'
            }}>
              <Typography variant="blueBtn">Alle nyheder</Typography>
            </MyButton>
          </Link>
        </Box>
      </Box>
    </>
  )
}

