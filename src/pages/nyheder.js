import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box, Grid } from "@mui/material";


const years = ['2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015'];
const months = ['Januar', 'Febuar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December']

export default function Nyheder() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>

      <Box
        sx={{
          mx: '20%',
        }}>
        <Grid container spacing={2} columns={100} mt="3rem">
          <Grid xs={70}>

          </Grid>

          <Grid xs={25} ml="5%"
            sx={{
              backgroundColor: '#2669A4'
            }}>
            <List
              sx={{ width: '100%', maxWidth: 500 }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  sx={{
                    backgroundColor: '#2669A4',
                    color: '#ffffff',
                    fontSize: 30,
                    justifyContent: 'center'
                  }}>
                  Nyhedsarkiv
                </ListSubheader>
              }
            >

              <ListItemButton onClick={handleClick}>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Starred" />
                  </ListItemButton>
                </List>
              </Collapse>

              {years.map((year) => (
                <ListItemButton onClick={handleClick}>
                  <ListItemText>{year}</ListItemText>
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              ))}              

              {months.map((month) => (
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText>{month}</ListItemText>
                    </ListItemButton>
                  </List>
                </Collapse>
              ))}

              
            </List>

          </Grid>
        </Grid>
      </Box>
    </>
  );
}







/* import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Nyhed1 from '../images/nyhed-1.png';
import SenesteNyheder from '../components/senesteNyheder'

export default function artikel() {
  return (
    <>
      <Box
        sx={{
          mx: '20%',
        }}>
        <Grid container spacing={2} columns={100} mt="3rem">
          <Grid xs={70}>
            
          <SenesteNyheder image={Nyhed1} title="Doner din gamle fodbold uanset stand" date="22. Maj 2023" alt="Nyhed 1"></SenesteNyheder>


          </Grid>
          <Grid xs={25} ml="5%">


          </Grid>
        </Grid>
      </Box>
    </>
  )
} */
