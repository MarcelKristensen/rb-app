import React, { useState } from "react";
import { TextField, Button, Stack } from '@mui/material';
import { Link } from "react-router-dom"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



const RegisterForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, email, dateOfBirth, password)
    }

    return (
        <React.Fragment>
            <Box boxShadow={3} mx={75}  my={5} height='auto'>
            <Box sx={{ backgroundColor: '#2669A4', p: 1}} >
                <Typography color="secondary" variant="h4">Opret Bruger</Typography>
            </Box>
            <Box padding={2}>
            <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Fornavn"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Efternavn"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="password"
                    variant='outlined'
                    color='secondary'
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="password"
                    variant='outlined'
                    color='secondary'
                    label="Gentag Password"
                    onChange={e => setPassword2(e.target.value)}
                    value={password2}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <Stack spacing={2} direction="row">
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="By"
                        onChange={e => setCity(e.target.value)}
                        value={city}
                        required
                        fullWidth
                        sx={{mb: 4}}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Addresse"
                        onChange={e => setAddress(e.target.value)}
                        value={address}
                        required
                        fullWidth
                        sx={{mb: 4}}
                    />
                </Stack>
                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Telefon"
                    onChange={e => setPhone(e.target.value)}
                    value={phone}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="date"
                    variant='outlined'
                    color='secondary'
                    onChange={e => setDateOfBirth(e.target.value)}
                    value={dateOfBirth}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <Button variant="contained" color="secondary" type="submit">Opret</Button>
            </form>
            <small>Allerede en bruger? <Link to="/login">Login Her</Link></small>
            </Box>
            </Box>
        </React.Fragment>
    )
}

export default RegisterForm;