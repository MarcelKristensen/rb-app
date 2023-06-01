import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material';

const pages = ['Om RB', 'Nyheder', 'Medlemskab', 'Webshop', 'Kampoversigt'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const uHold = ['U7', 'U8', 'U9', 'U10', 'U11', 'U12', 'U13', 'U14', 'U15', 'U16', 'U17', 'U18'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const MyMenuItem = styled(MenuItem)({
    color: 'black',
    display: 'block',
    fontSize: 20,
    fontWeight: 600,
    textTransform: 'none',
    "&:hover": {
      backgroundColor: '#F3B820'
    }
  });

  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }}>

      <Container sx={{
            backgroundColor: '#2669A4',
            position: 'absolute',
          }}>
        <Toolbar>
          <Box sx={{
            backgroundColor: '#2669A4'
          }}>
          </Box>
        </Toolbar>
      </Container>

      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href="/"><img className="headerLogo" src={require('../images/RBLogo.png')} width={"100px"} alt='logo'></img></a>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'space-evenly' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'block',
                  fontSize: 20,
                  fontWeight: 600,
                  textTransform: 'none'
                }}
              >
                {page}
              </Button>
            ))}
            {/* 
            DROP DOWN MENU FOR U HOLD 
            */}
            <Button
              onClick={handleClick}
              onMouseOver={handleClick}
              sx={{
                my: 2,
                color: 'black',
                display: 'block',
                fontSize: 20,
                fontWeight: 600,
                textTransform: 'none'
              }}
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
              {uHold.map((hold) => (
                <MyMenuItem
                  key={hold}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: 'black',
                    display: 'block',
                    fontSize: 20,
                    fontWeight: 600,
                    textTransform: 'none',
                    minWidth: '120px'
                  }}
                >
                  {hold}
                </MyMenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="../icons/login.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;


























/* import { useState } from "react";
import { Box, Button, Menu, MenuItem, Typography, styled } from "@mui/material";

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

  const MyButton = styled(Button)({
    background: '#FFFFFF',
    border: 0,
    borderRadius: 5,
    color: 'black',
    height: 50,
    padding: '0 10px',
    fontWeight: '600',
    fontSize: 16,
    "&:hover": {
      backgroundColor: '#F3B820',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }
  });

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
          <a href="/registrering"><span>Login</span> <img src={require('../icons/login.png')} alt='login'></img></a>
        </Box>
      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        boxShadow: 3
      }}>
        <Box sx={{
          mx: '20%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
          <a href="/"><img className="headerLogo" src={require('../images/RBLogo.png')} width={"100px"} alt='logo'></img></a>
          <div>
            <MyButton>Om RB</MyButton>
            <MyButton>Nyheder</MyButton>
            <MyButton>Medlemskab</MyButton>
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
            <Button>Webshops</Button>
          </div>
        </Box>
      </Box>
    </>
  )
}
 */