import "../styles/Register.css";
import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function Register() {
  return (
    <div className="Paper">
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 380,
        },
      }}
    >
      <Paper elevation={3} sx={{ maxWidth: 280, maxHeight: 480, marginLeft: 3, margin: 2 }}>
      
  
      <h2 className="account">Crea una cuenta</h2>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Nombre" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Contraseña" variant="outlined" />
      </Box>
      <div className="registrarse">
        <Stack direction="row" spacing={2}>
          <Button  style={{ backgroundColor: "#0B1F47", color: "white" }}variant="contained" color="success">
            Registrarse
          </Button>
        </Stack>
      </div>
      </Paper>
      </Box>
      </div>
      );
}

export default Register;