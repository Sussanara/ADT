import React, { useContext } from "react";
import "../styles/Login.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import BS2 from "../asset/BS2.png";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Fondo from "../asset/post-it.jpg";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

const theme = createTheme();


function Login() {
  let history=useHistory()
  const { store, actions } = useContext(Context);
  function irAdmin(){
    history.push("/admin")
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [modalLogin, setModalLogin] = React.useState(false);
  const [modalError, setModalError] = React.useState(false);
  const handleOpenModalLogin = () => setModalLogin(true);
  const handleCloseModalLogin = () => setModalLogin(false);
  const handleOpenError = () => setModalError(true);
  const handleCloseError = () => setModalError(false);

  function checkForAdmin(data){
    if(data.is_admin==true){
      actions.changeIsActive(data.is_admin)
    }else{actions.changeIsActive(false)}
  }
  function redirect(check){
    if(check==true){
      history.push("/admin")
    }else{history.push("/user")}
  }
  const { register, handleSubmit } = useForm();
  const addRequest = (infodata) => {
/*     console.log("PRE REGISTER CLIENTE: ", infodata); */
    return axios({
      method: "POST",
      url: `https://api-project-business-inventory.herokuapp.com/api/login`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: infodata,
    })
      .then((response) => {
        console.log("1")
        console.log(response);
        console.log(response.data.is_admin);
        actions.changeIsActive(response.data.is_admin)
        actions.changeEmail(response.data.user.email)
        actions.changeUserId(response.data.user.id)
        actions.changeUserName(response.data.user.empresa)
        actions.changeMsg(response.data.msg)
        actions.changeToken(response.data.token)
        return response.data;
      })
      .then((data) => {
        redirect(store.is_active)
        console.log("2")
        console.log(data);
        console.log(data.user);

        
      })
      .catch((error) => {
        console.log("ESTE ES EL ERROR DEL CATCH");
        console.log(error);
        console.log(error.response);
        console.log("abajo");
      });
  };
  let holaTest = "hola soy el test 1";
  let holaTest2 = "hola soy el test 2";
  function test() {
    actions.changeUserName(holaTest);
  }
  function test2() {
    console.log(store.is_active)
    console.log(store.email)
    console.log(store.userName)
    console.log(store.userId)
    console.log(store.msg)
    console.log(store.token)
  }
  return (
    <>
     {/* <button onClick={irAdmin}>hola3aaaaaaaaaaa</button>
      <Button
        onClick={() => {test()}}
        type="submit"
        style={{ backgroundColor: "#0B1F47", color: "white" }}
        variant="contained"
        color="success"
      >
        set store
      </Button>
      <Button
        onClick={test2}
        type="submit"
        style={{ backgroundColor: "#0B1F47", color: "white" }}
        variant="contained"
        color="success"
      >
        muestra store
      </Button> */}
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={12}
            sx={{
              backgroundImage: `url(${Fondo})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="backgroundlogin">
              <div className="Paper">
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                      m: 1,
                      width: 430,
                    },
                  }}
                >
                  <Paper
                    elevation={12}
                    sx={{ maxWidth: 310, marginLeft: 3, margin: 2 }}
                  >
                    <h2 className="account">
                      ¡Bienvenido a Business Inventory!
                    </h2>
                    <img src={BS2} alt="" style={{ height: "120px" }} />
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                      }}
                      autoComplete="off"
                      noValidate
                      onSubmit={handleSubmit((data) => addRequest(data))}
                    >
                      {/* onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}> */}
                      <TextField
                        id="outlined-basic"
                        {...register("email")}
                        label="Email"
                        variant="outlined"
                      />
                      <TextField
                        id="outlined-basic"
                        {...register("password")}
                        type="password"
                        label="Contraseña"
                        variant="outlined"
                      />
                      
                      <div className="iniciarsesión">
                        <Stack direction="row" spacing={2}>
                          <Button
                            onClick={() => {
                              handleOpenModalLogin();
                              handleSubmit();
                            }}
                            type="submit"
                            style={{
                              backgroundColor: "#0B1F47",
                              color: "white",
                            }}
                            variant="contained"
                            color="success"
                          >
                            Iniciar sesión
                          </Button>
                        </Stack>
                      </div>
                    </Box>
                    <div className="iniciarsesión">
                      <Stack direction="row" spacing={2}>
                        {/*  <Button onClick={handleOpenError} style={{ backgroundColor: "#0B1F47", color: "white" }} variant="contained" color="success">
                  Modal error
                </Button> */}
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
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        align="center"
                      >
                        ¡Felicidades!
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }} align="center">
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
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
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
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default Login;
