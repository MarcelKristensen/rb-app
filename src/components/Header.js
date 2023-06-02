import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LoginModal from "./loginModal";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  styled,
} from "@mui/material";

const pages = ["Om RB", "Nyheder", "Medlemskab", "Webshop", "Kampoversigt"];
const settings = ["Profil", "Konto", "Logout"];
const uHold = [
  "U7",
  "U8",
  "U9",
  "U10",
  "U11",
  "U12",
  "U13",
  "U14",
  "U15",
  "U16",
  "U17",
  "U18",
];

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
    color: "black",
    display: "block",
    fontSize: 20,
    fontWeight: 600,
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#F3B820",
    },
  });
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#2669A4", height: "60px" }}
      >
        <Container
          sx={{
            backgroundColor: "#2669A4",
            width: "100%",
            height: "50px",
          }}
        >
          <Toolbar sx={{ p: 0, m: 0 }}>
            <Box
              sx={{
                display: "flex",
                color: "#ffffff",
                alignItems: "center",
                width: "100%",
                justifyContent: "right",
              }}
            >
              <Button>
                <LoginModal text="Login" />
                <img src={require("../icons/login.png")} alt="login"></img>
              </Button>
              <Tooltip title="Brugerinformation">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{
                    p: 0,
                    m: 0,
                    borderRadius: "0.5rem",
                  }}
                >
                  <Typography color="#ffffff">Login</Typography>
                  <Avatar
                    src="../icons/login.png"
                    sx={{ bgcolor: "transparent" }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
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

      <AppBar position="static" sx={{ backgroundColor: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <a href="/">
              <img
                className="headerLogo"
                src={require("../images/RBLogo.png")}
                width={"100px"}
                alt="logo"
              ></img>
            </a>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
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
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "space-evenly",
                },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontSize: 20,
                    fontWeight: 600,
                    textTransform: "none",
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
                  color: "black",
                  display: "block",
                  fontSize: 20,
                  fontWeight: 600,
                  textTransform: "none",
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
                      color: "black",
                      display: "block",
                      fontSize: 20,
                      fontWeight: 600,
                      textTransform: "none",
                      minWidth: "120px",
                    }}
                  >
                    {hold}
                  </MyMenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
