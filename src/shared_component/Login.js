import * as React from "react";
import "../styles/Login.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import BS2 from "../asset/BS2.png";
import BS3 from "../asset/BS3.png";


function Login() {
  return (
    <div className="Paper">
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 420,
            height: 440,
          },
        }}
      >
        <Paper elevation={3} sx={{ maxWidth: 285, maxHeight: 450, marginLeft: 3, margin: 2 }}>
          <h2 className="account">¡Bienvenido a Business Inventory!</h2>
          <img src={BS2} alt="" style={{ height: "120px" }} />
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Contraseña" variant="outlined" />
          </Box>
          <div className="iniciarsesión">
            <Stack direction="row" spacing={2}>
              <Button style={{ backgroundColor: "#0B1F47", color: "white" }} variant="contained" color="success">
                Iniciar sesión
              </Button>
            </Stack>
          </div>
        </Paper>
      </Box>
    </div>
  );
}

export default Login;