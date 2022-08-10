
import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import BS3 from "../asset/BS3.png";
import BS2 from "../asset/BS2.png";

import "../styles/Login.css";

import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Fondo from "../asset/post-it.jpg"


const theme = createTheme();


function Register() {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [modalLogin, setModalLogin] = React.useState(false);
  const [modalError, setModalError] = React.useState(false);
  const handleOpenModalLogin = () => setModalLogin(true);
  const handleCloseModalLogin = () => setModalLogin(false);
  const handleOpenError = () => setModalError(true);
  const handleCloseError = () => setModalError(false);


  return (
    <>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={12}
          sx={{
            backgroundImage: `url(${Fondo})` ,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="backgroundregister" style={{minHeight:"100%",minWidth:"100%",}}>
      <div className="Paper">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 450,

            },
          }}
        >
          <Paper elevation={12} sx={{ maxWidth: 280,  marginLeft: 3, margin: 2 }}>
            <h2 className="account">Crea una cuenta</h2>
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
              <Button style={{ backgroundColor: "#0B1F47", color: "white" }} variant="contained" color="success">
                  Registrarse
                </Button>
            
            </Box>
          </Paper>
        </Box>
      </div>
    </div>
        </Grid>
        
      </Grid>
    </ThemeProvider>
    
    </>
  );
}

export default Register;


