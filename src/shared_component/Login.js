import * as React from "react";
import "../styles/Login.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import BS3 from "../asset/BS3.png";
import BS2 from "../asset/BS2.png";
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';


function Login() {

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
    <div className="backgroundlogin">
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
          <Paper elevation={12} sx={{ maxWidth: 285, maxHeight: 450, marginLeft: 3, margin: 2 }}>
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
                <Button onClick={handleOpenModalLogin} style={{ backgroundColor: "#0B1F47", color: "white" }} variant="contained" color="success">
                  Iniciar sesión
                </Button>
              </Stack>
            </div>
            <div className="iniciarsesión">
              <Stack direction="row" spacing={2}>
                <Button onClick={handleOpenError} style={{ backgroundColor: "#0B1F47", color: "white" }} variant="contained" color="success">
                  Modal error
                </Button>
              </Stack>
            </div>
          </Paper>
        </Box>
        <div>
          <Modal
            open={modalLogin}
            onClose={handleCloseModalLogin}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                ¡Felicidades!
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Te logeaste correctamente.
              </Typography>
            </Box>
          </Modal>
        </div>
        <div>
          <Modal
            open={modalError}
            onClose={handleCloseError}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Error
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Tu contraseña no se ha ingresado correctamente.
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Login;