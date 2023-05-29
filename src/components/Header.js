import { useState } from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";

export default function Header() {

  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          bgcolor: '#2669A4',
          minHeight: '30px',
          justifyContent: 'end',
          flexDirection: 'row',
          color: '#FFFFFF'
        }}>
        <Box sx={{
          mx: '20%',
          alignItems: 'center'
        }}>
          <span>Login</span> <img src={require('../icons/login.png')} alt='login'></img>
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <Box sx={{
          mx: '20%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>          
          <img className="headerLogo" src={require('../images/RBLogo.png')} width={"100px"} alt='logo'></img>
          <div>
            <Button>Om RB</Button>
            <Button> Nyheder</Button>
            <Button>Medlemskab</Button>
            <Button
              onClick={handleClick}
              onMouseOver={handleClick}
            >
              Holdoversigt
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem onClick={handleClose}>Drenge U8</MenuItem>
              <MenuItem onClick={handleClose}>Drenge U9</MenuItem>
              <MenuItem onClick={handleClose}>Drenge U10</MenuItem>
              <MenuItem onClick={handleClose}>Drenge U11</MenuItem>
              <MenuItem onClick={handleClose}>Drenge U12</MenuItem>
              <MenuItem onClick={handleClose}>Drenge U13</MenuItem>
            </Menu>
            <Button>Kampoversigt</Button>
            <Button>Webshop</Button>
          </div>
        </Box>
      </Box>
    </>
  )
}
