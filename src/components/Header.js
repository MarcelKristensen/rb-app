import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Stack,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
};

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email, password);
  }
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          bgcolor: "#2669A4",
          minHeight: "30px",
          justifyContent: "end",
          flexDirection: "row",
          color: "#FFFFFF",
        }}
      >
        <Box
          sx={{
            mx: "20%",
            alignItems: "center",
          }}
        >
          <div>
            <Button onClick={handleOpen}>
              Login <img src={require("../icons/login.png")} alt="login"></img>
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <Box
                    sx={{
                      backgroundColor: "#2669A4",
                      p: 1,
                    }}
                  >
                    <Stack direction="row" justifyContent="space-between">
                      <Typography color="secondary" variant="h4">
                        Login
                      </Typography>
                      <IconButton>
                        <CloseIcon onClick={handleClose} color="secondary" />
                      </IconButton>
                    </Stack>
                  </Box>
                  <Box padding={2}>
                    <form onSubmit={handleSubmit} action={<Link to="/" />}>
                      <TextField
                        type="email"
                        variant="outlined"
                        color="secondary"
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        fullWidth
                        sx={{ mb: 4 }}
                      />
                      <TextField
                        type="password"
                        variant="outlined"
                        color="secondary"
                        label="Adgangskode"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        fullWidth
                        sx={{ mb: 4 }}
                      />
                      <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                      >
                        Login
                      </Button>
                    </form>
                    <small>
                      Har du ikke en bruger?{" "}
                      <Link to="/registrering">Opret her</Link>
                    </small>
                  </Box>
                </Box>
              </Fade>
            </Modal>
          </div>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          boxShadow: 3,
        }}
      >
        <Box
          sx={{
            mx: "20%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <a href="/">
            <img
              className="headerLogo"
              src={require("../images/RBLogo.png")}
              width={"100px"}
              alt="logo"
            ></img>
          </a>
          <div>
            <Button>Om RB</Button>
            <Button>Nyheder</Button>
            <Button>Medlemskab</Button>
            <Button onClick={handleClick} onMouseOver={handleClick}>
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
  );
}
