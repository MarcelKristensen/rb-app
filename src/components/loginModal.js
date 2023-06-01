import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

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

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email, password);
  }

  return (
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
                  <CloseIcon onClick={handleOpenModal} color="secondary" />
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
                <Button variant="contained" color="secondary" type="submit">
                  Login
                </Button>
              </form>
              <small>
                Har du ikke en bruger?{" "}
                <Link onClick={handleClose} to="/registrering">
                  Opret her
                </Link>
              </small>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
