import React, { useState } from "react";
import {
  Grid,
  TextField,
  Paper,
  Toolbar,
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
  ListItemAvatar,
  Avatar,
  Tabs,
  Tab,
  Modal,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import logo from "../asset/logo.png";
import PropTypes from "prop-types";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const cookies = new Cookies();
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
//const residuos = ['vidrio','plastico',];
const baseUrl = process.env.REACT_APP_APPI_URL;
const PATHS = {
  GET: "/clients",
  ADD: "/auth/register",
  DELETE: "/clients",
  MATERIALS: "/materials",
  CATEGORY: "/material-categories",
};
const Alerts = {
  Rut: {
    Register: "Este Rut ya se encuentra registrado",
    Invalid: "El rut no tiene un formato valido",
  },
  Password: {
    Empty: "La contraseña esta vacia",
    Invalid: "Contraseña debe tener al menos 8 caracteres",
  },
  Email: {
    Empty: "El email esta vacio",
    Invalid: "Por favor ingrese un correo valido",
    Register: "El email ya se encuentra asociado a un cliente",
  },
};

export default function Crud() {
  const [value, setValue] = React.useState(0);
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };
  const [choiceMaterial, setChoiceMaterial] = React.useState([]);
  const token = cookies.get("token");
  const handleChangeResiduo = (event) => setChoiceMaterial(event.target.value);
  const getMaterials = async (token) => {
    await axios({
      method: "GET",
      url: baseUrl + PATHS.MATERIALS,
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        setMaterials(response.rows);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const imgUrl = (e) => {
    if (e) {
      e = e;
    } else {
      e = logo;
    }
  };
  const getClients = async (token) => {
    await axios({
      method: "GET",
      url: baseUrl + PATHS.GET,
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        setData(response.rows);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const addRequest = async (token) => {
    console.log("PRE REGISTER CLIENTE: ", ClienteSelecionado);
    return await axios({
      method: "POST",
      url: baseUrl + PATHS.ADD,
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: ClienteSelecionado,
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log("ESTE ES EL ERROR DEL CATCH");
        if (error.response.data && error.response.data.errors) {
          const msg = error.response.data.errors.map((e) => {
            if (e.property == "run") {
              if (e.constraints.isUnique) abrirModalAlerta(Alerts.Rut.Register);
              /* alert("Este Rut ya se encuentra registrado"); */ else if (
                e.constraints.isRUN
              )
                abrirModalAlerta(Alerts.Rut.Invalid);
            }
            if (e.property == "password") {
              if (e.constraints.isNotEmpty) {
                abrirModalAlerta(Alerts.Password.Empty);
              } else if (e.constraints.isLength) {
                abrirModalAlerta(Alerts.Password.Invalid);
              }
            }
            if (e.property == "email") {
              if (e.constraints.isNotEmpty)
                abrirModalAlerta(Alerts.Email.Empty);
              else if (e.constraints.isEmail)
                abrirModalAlerta(Alerts.Email.Invalid);
              else if (e.constraints.isUnique)
                abrirModalAlerta(Alerts.Email.Register);
            }
          });
        }
        console.log(error.response);
        console.log("abajo");
      });
  };

  const asignMaterials = async (id, stringM, token) => {
    console.log("PRE REGISTER CLIENTE: ", ClienteSelecionado);
    //[1,2,3,4,5].map((e)=>'ids[]='+e.toString()).join("&")
    return await axios({
      method: "POST",
      url: `${baseUrl}/clients/${id}${PATHS.MATERIALS}?${stringM}`,
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log("Error ", error.response);
      });
  };
  const deleteClient = async () => {
    await axios({
      method: "delete",
      url: baseUrl + PATHS.DELETE + "/" + ClienteSelecionado.id,
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log("here delete god");
      setData(data.filter((cliente) => cliente.id !== ClienteSelecionado.id));
      setModalDesactivar(false);
    });
  };
  let dataCliente = [
    {
      id: 1,
      is_active: true,
      empresa: "Mun. iquique",
      phone: "131312313",
      firstName: "mario",
      lastName: "rodriguez",
      email: "toychato@matenme.cl",
      run: 123124124,
      password: "alga",
    },
    {
      id: 2,
      is_active: true,
      empresa: "Mun. aca",
      residuo: ["metales ", "vidrios"],
      firstName: "mario2",
      lastName: "rodriguez2",
      email: "toychato@matenme.cl",
      city: "iquique",
      provincia: "iquique",
      run: 123124124,
      password: "pepino",
    },
    {
      id: 3,
      is_active: false,
      empresa: "Mun. nose",
      residuo: ["metales ", "vidrios"],
      firstName: "mario3",
      lastName: "rodriguez3",
      email: "toychato@matenme.cl",
      city: "iquique",
      provincia: "iquique",
      run: 123124124,
    },
    {
      id: 4,
      is_active: true,
      empresa: "Mun. donde",
      residuo: ["metales ", "vidrios"],
      firstName: "mario4",
      lastName: "rodriguez4",
      email: "toychato@matenme.cl",
      city: "iquique",
      provincia: "iquique",
      run: 123124124,
    },
    {
      id: 5,
      is_active: true,
      empresa: "Mun. quien",
      residuo: ["metales ", "vidrios"],
      firstName: "mario5",
      lastName: "rodriguez5",
      email: "toychato@matenme.cl",
      city: "iquique",
      provincia: "iquique",
      run: 123124124,
    },
  ];
  const [data, setData] = useState(dataCliente);
  const [materials, setMaterials] = useState([]);
  React.useEffect(() => {
    /* securityLogin(token) */
    getClients(token);
    getMaterials(token);
  }, []);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalDesactivar, setModalDesactivar] = useState(false);
  const [modalActivar, setModalActivar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalAlert, setModalAlert] = useState(false);
  const [message, setMessage] = useState("false");
  const [ClienteSelecionado, setClienteSelecionado] = useState({
    run: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    empresa: "",
    phone: "",
    is_active: false,
    /* empresa: "Mun. iquique",
      phone: "131312313",
      firstName: "mario",
      lastName: "rodriguez",
      email: "toychato@matenme.cl",
      run: 123124124,
      password: "alga", */
    /* empresa:"",
    residuo:"",
    firstName:"",
    lastName:"", 
    city:"", */
  });
  const [formErrors, setError] = useState({
    empresa: false,
    phone: false,
    email: false,
    firstName: false,
    lastName: false,
    run: false,
    password: false,
  });
  const keyErrors = [
    "empresa",
    "phone",
    "email",
    "firstName",
    "lastName",
    "run",
    "password",
  ];
  const selecionarCliente = (row, caso) => {
    setClienteSelecionado(row);
    caso === "Editar" ? setModalEditar(true) : caso=== "Desactivar"? setModalDesactivar(true):setModalActivar(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClienteSelecionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const editar = () => {
    var dataNueva = data;
    dataNueva.map((cliente) => {
      if (cliente.id === ClienteSelecionado.id) {
        cliente.is_active = ClienteSelecionado.is_active;
        cliente.firstName = ClienteSelecionado.firstName;
        cliente.lastName = ClienteSelecionado.lastName;
        cliente.email = ClienteSelecionado.email;
        cliente.run = ClienteSelecionado.run;
        cliente.password = ClienteSelecionado.password;
        cliente.empresa = ClienteSelecionado.empresa;
        cliente.phone = ClienteSelecionado.phone;
        /* empresa: "Mun. iquique",
      phone: "131312313",
      firstName: "mario",
      lastName: "rodriguez",
      email: "toychato@matenme.cl",
      run: 123124124,
      password: "alga", */
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  };
  const desactivar = () => {
    var dataNueva = data;
    dataNueva.map((cliente) => {
      if (cliente.id === ClienteSelecionado.id) {
        cliente.is_active = false;
      }
    });
    setData(dataNueva);
    setModalDesactivar(false);
  };
  const activar = () => {
    var dataNueva = data;
    dataNueva.map((cliente) => {
      if (cliente.id === ClienteSelecionado.id) {
        cliente.is_active = true;
      }
    });
    setData(dataNueva);
    setModalActivar(false);
  };
  const eliminar = () => {
    setData(data.filter((cliente) => cliente.id !== ClienteSelecionado.id));
    setModalDesactivar(false);
  };
  const abrirModalInsertar = () => {
    setClienteSelecionado(null);
    setModalInsertar(true);
  };
  const abrirModalAlerta = (message) => {
    setMessage(message);
    setModalAlert(true);
  };

  // iterate over keys and set all keys error in false
  const cleanErrors = () =>
    keyErrors.map((_key) => {
      formErrors[_key] = false;
    });
  const insertar =  () => {
    var dataNueva = data
    ClienteSelecionado.is_active= true
    var valorInsertar = ClienteSelecionado;
    console.log("en insertar ", valorInsertar);
    if (!valorInsertar) return;
    let check = true;
    keyErrors.map((_key) => {
      if (!check) return;
      if (!valorInsertar[_key]) {
        setError((prevState) => ({
          ...prevState,
          [_key]: true,
        }));
        check = false;
      } else {
        setError((prevState) => ({
          ...prevState,
          [_key]: false,
        }));
      }
    });
    if (!check) return;
    //aqui validar rut
    //aqui validar email
    if (!valorInsertar.email.includes("@")) {
      setError((prevState) => ({
        ...prevState,
        email: true,
      }));
      return;
    }
    //aqui validar password
    if (valorInsertar.password.length < 8) {
      setError((prevState) => ({
        ...prevState,
        password: true,
      }));
      return;
    }
    // here loader for user;
    dataNueva.push(valorInsertar)
    setModalInsertar(false);
    //setData
    abrirModalAlerta("Cliente creado correctamente");
    setData(dataNueva);
    cleanErrors();
    return;
  };
  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell align="center" component="th" scope="row">
            {row.empresa}
          </TableCell>
          <TableCell align="center">{`${row.firstName} ${row.lastName}`}</TableCell>
          <TableCell align="center">
            {" "}
            {/*  aca tiene los botones de acciones editar eliminar */}
            <Grid
              container
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} md={2}>
                <Button
                  style={{ backgroundColor: "#FF9800", color: "white" }}
                  variant="contained"
                  startIcon={<EditIcon />}
                  onClick={() => selecionarCliente(row, "Editar")}
                ></Button>
              </Grid>
              
              <Grid item xs={12} md={2}>
                <Button
                  style={{ backgroundColor: "#F44336", color: "white" }}
                  variant="contained"
                  startIcon={<PersonRemoveIcon />}
                  onClick={() => selecionarCliente(row, "Desactivar")}
                ></Button>
              </Grid>
            </Grid>
          </TableCell>
          {/*  aca tiene que los botones de acciones editar eliminar */}
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Informacion Cliente
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Teléfono</TableCell>
                      <TableCell align="center">Correo</TableCell>
                      <TableCell align="center">Rut</TableCell>
                      <TableCell align="center">Contraseña</TableCell>
                      <TableCell align="center">actividad</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      {/*  empresa: "Mun. iquique",
                            residuo: ["metales ", "vidrios"],
                            firstName: "mario",
                            lastName: "rodriguez",
                            email: "toychato@matenme.cl",
                            city: "iquique",
                            provincia: "iquique",
                            run: 123124124,
                            password: "alga", */}
                      <TableCell align="center">{row.phone}</TableCell>
                      <TableCell align="center">{row.email}</TableCell>
                      <TableCell align="center">{row.run}</TableCell>
                      <TableCell align="center">{row.password}</TableCell>
                      <TableCell align="center">
                        {row.is_active ? "Activo" : "Desactivado"}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  function Row2(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell align="center" component="th" scope="row">
            {row.empresa}
          </TableCell>
          <TableCell align="center">{`${row.firstName} ${row.lastName}`}</TableCell>
          <TableCell align="center">
            {" "}
            {/*  aca tiene los botones de acciones editar eliminar */}
            <Grid
              container
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} md={2}>
                <Button
                  style={{ backgroundColor: "#FF9800", color: "white" }}
                  variant="contained"
                  startIcon={<EditIcon />}
                  onClick={() => selecionarCliente(row, "Editar")}
                ></Button>
              </Grid>
              <Grid item xs={12} md={2}>
                <Button
                  style={{ backgroundColor: "#32CD32", color: "white" }}
                  variant="contained"
                  startIcon={<PersonAddAlt1Icon />}
                  onClick={() => selecionarCliente(row, "Activar")}
                ></Button>
              </Grid>
            </Grid>
          </TableCell>
          {/*  aca tiene que los botones de acciones editar eliminar */}
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Informacion Cliente
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Teléfono</TableCell>
                      <TableCell align="center">Correo</TableCell>
                      <TableCell align="center">Rut</TableCell>
                      <TableCell align="center">Contraseña</TableCell>
                      <TableCell align="center">actividad</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      {/*  empresa: "Mun. iquique",
                            residuo: ["metales ", "vidrios"],
                            firstName: "mario",
                            lastName: "rodriguez",
                            email: "toychato@matenme.cl",
                            city: "iquique",
                            provincia: "iquique",
                            run: 123124124,
                            password: "alga", */}
                      <TableCell align="center">{row.phone}</TableCell>
                      <TableCell align="center">{row.email}</TableCell>
                      <TableCell align="center">{row.run}</TableCell>
                      <TableCell align="center">{row.password}</TableCell>
                      <TableCell align="center">
                        {row.is_active ? "Activo" : "Desactivado"}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  return (
    <div>
      <Toolbar />

      <Grid item xs={12}>
        <Box sx={{ display: "flex" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ width: "100%" }}>
              <h1>
                Clientes Activos
                <IconButton
                  aria-label="fingerprint"
                  color="secondary"
                  style={{ marginTop: `auto` }}
                  onClick={() => abrirModalInsertar()}
                >
                  <AddCircleIcon
                    style={{ fontSize: 50, fill: "#4CAF50" }}
                    color="success"
                    sx={{}}
                  />
                </IconButton>{" "}
              </h1>
            </Grid>

            <Grid item xs={12} sx={{ width: "100%" }}>
              <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      <TableCell align="center">Empresa</TableCell>
                      <TableCell align="center">Nombre</TableCell>
                      <TableCell align="center">Acción</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row) => 
                      {if(row.is_active){return(<Row key={row.firstName} row={row} />)}
                      }
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={12} sx={{ width: "100%" }}>
              <h1>
              Clientes Desactivados

              </h1>
            </Grid>
            <Grid item xs={12} sx={{ width: "100%" }}>
              <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      <TableCell align="center">Empresa</TableCell>
                      <TableCell align="center">Nombre</TableCell>
                      <TableCell align="center">Acción</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {data.map((row) => 
                      {if(!row.is_active){return(<Row2 key={row.firstName} row={row} />)}
                      }
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>

          <Modal open={modalEditar}>
            <Box sx={style}>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChangeTab}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Datos" {...a11yProps(0)} />
                    <Tab label="Usuario" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <div>
                        <h3>Editar datos del cliente</h3>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        sx={{ width: "100%" }}
                        className="form-control"
                        variant="outlined"
                        label="Empresa"
                        type="text"
                        name="empresa"
                        value={ClienteSelecionado && ClienteSelecionado.empresa}
                        onChange={handleChange}
                      />
                      {/*      empresa: "Mun. iquique",
      phone: "131312313",
      firstName: "mario",
      lastName: "rodriguez",
      email: "toychato@matenme.cl",
      run: 123124124,
      password: "alga",  */}
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        sx={{ width: "100%" }}
                        className="form-control"
                        variant="outlined"
                        label="Nombre"
                        type="text"
                        name="firstName"
                        value={
                          ClienteSelecionado && ClienteSelecionado.firstName
                        }
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <TextField
                        sx={{ width: "100%" }}
                        className="form-control"
                        variant="outlined"
                        label="Apellido"
                        type="text"
                        name="lastName"
                        value={
                          ClienteSelecionado && ClienteSelecionado.lastName
                        }
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        sx={{ width: "100%" }}
                        className="form-control"
                        variant="outlined"
                        label="Telefono"
                        type="text"
                        name="phone"
                        value={ClienteSelecionado && ClienteSelecionado.phone}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        sx={{ width: "100%" }}
                        className="form-control"
                        variant="outlined"
                        label="Rut"
                        type="text"
                        name="run"
                        helperText="(ingrese Run con guion y sin puntos EJ: 12345678-9)"
                        value={ClienteSelecionado && ClienteSelecionado.run}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                  >
                    <Grid item xs={8}>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => editar()}
                      >
                        Actualizar
                      </Button>
                      &nbsp;&nbsp;
                      <Button
                        color="error"
                        variant="contained"
                        onClick={() => setModalEditar(false)}
                      >
                        Cancelar
                      </Button>
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <div>
                        <h3>Editar usuario y contraseña</h3>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        sx={{ width: "100%" }}
                        className="form-control"
                        variant="outlined"
                        label="Email"
                        type="text"
                        name="email"
                        value={ClienteSelecionado && ClienteSelecionado.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        sx={{ width: "100%" }}
                        className="form-control"
                        variant="outlined"
                        label="Contraseña"
                        type="text"
                        name="password"
                        value={
                          ClienteSelecionado && ClienteSelecionado.password
                        }
                        helperText="(La contraseña debe tener al menos 8 caracteres y un número)"
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                  >
                    <Grid item xs={8}>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => editar()}
                      >
                        Actualizar
                      </Button>
                      &nbsp;&nbsp;
                      <Button
                        color="error"
                        variant="contained"
                        onClick={() => setModalEditar(false)}
                      >
                        Cancelar
                      </Button>
                    </Grid>
                  </Grid>
                </TabPanel>
              </Box>
            </Box>
          </Modal>
          <Modal open={modalAlert}>
            <Box sx={style2}>
              <Grid
                container
                spacing={2}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={4}>
                  <Typography align="center" marginRight="20">
                    {message}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    style={{ backgroundColor: "#4CAF50", color: "white" }}
                    variant="contained"
                    onClick={() => setModalAlert(false)}
                  >
                    Ok
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Modal>
          <Modal open={modalDesactivar}>
            <Box sx={style2}>
              <Grid
                container
                spacing={2}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={4}>
                  Estás Seguro que deseas desactivar el cliente{" "}
                  {ClienteSelecionado && ClienteSelecionado.empresa}
                </Grid>
                <Grid item xs={4}>
                  <Button
                    color="error"
                    variant="contained"
                    onClick={() => desactivar()}
                  >
                    Si
                  </Button>
                  &nbsp;&nbsp;
                  <Button
                    style={{ backgroundColor: "#6d757d", color: "white" }}
                    variant="contained"
                    onClick={() => setModalDesactivar(false)}
                  >
                    No
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Modal>
          <Modal open={modalActivar}>
            <Box sx={style2}>
              <Grid
                container
                spacing={2}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={4}>
                  Estás Seguro que deseas activar el cliente{" "}
                  {ClienteSelecionado && ClienteSelecionado.empresa}
                </Grid>
                <Grid item xs={4}>
                  <Button
                    style={{ backgroundColor: "#32CD32", color: "white" }}
                    variant="contained"
                    onClick={() => activar()}
                  >
                    Si
                  </Button>
                  &nbsp;&nbsp;
                  <Button
                    style={{ backgroundColor: "#6d757d", color: "white" }}
                    variant="contained"
                    onClick={() => setModalActivar(false)}
                  >
                    No
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Modal>
          <Modal open={modalInsertar}>
            <Box sx={style}>
              <div className="form-group">
                <Grid container spacing={1}>
                  <Grid item xs={12} md={12}>
                    <div>
                      <h3>Insertar Cliente</h3>
                    </div>
                  </Grid>
                  {/* empresa: "Mun. iquique",
                  firstName: "mario",
                  lastName: "rodriguez",
                  phone: "131312313",
                  run: 123124124,
                  email: "toychato@matenme.cl",
                  password: "alga",  */}
                  <Grid item xs={12} md={4}>
                    <TextField
                    sx={{ width: "100%" }}
                      className="form-control"
                      variant="outlined"
                      label="Empresa"
                      type="text"
                      name="empresa"
                      required
                      error={formErrors.empresa}
                      value={ClienteSelecionado ? ClienteSelecionado.empresa : ""}
                      onChange={handleChange}
                    />
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <TextField
                    sx={{ width: "100%" }}
                      className="form-control"
                      variant="outlined"
                      label="Nombre"
                      type="text"
                      name="firstName"
                      required
                      error={formErrors.firstName}
                      value={
                        ClienteSelecionado ? ClienteSelecionado.firstName : ""
                      }
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                    sx={{ width: "100%" }}
                      className="form-control"
                      variant="outlined"
                      label="Apellido"
                      type="text"
                      name="lastName"
                      required
                      error={formErrors.lastName}
                      value={ClienteSelecionado ? ClienteSelecionado.lastName : ""}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                    sx={{ width: "100%" }}
                      className="form-control"
                      variant="outlined"
                      label="Telefono"
                      type="text"
                      name="phone"
                      required
                      error={formErrors.phone}
                      value={ClienteSelecionado ? ClienteSelecionado.phone : ""}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                    sx={{ width: "100%" }}
                      className="form-control"
                      variant="outlined"
                      label="Rut EJ: 12345678-9"
                      type="text"
                      name="run"
                      required
                      error={formErrors.run}
                      value={
                        ClienteSelecionado ? ClienteSelecionado.run : ""
                      }
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                    sx={{ width: "100%" }}
                      className="form-control"
                      variant="outlined"
                      label="Correo"
                      type="text"
                      name="email"
                      required
                      error={formErrors.email}
                      value={
                        ClienteSelecionado ? ClienteSelecionado.email : ""
                      }
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <TextField
                    sx={{ width: "100%" }}
                      className="form-control"
                      variant="outlined"
                      label="Contraseña"
                      type="text"
                      name="password"
                      helperText="(La contraseña debe tener al menos 8 caracteres y un número)"
                      required
                      error={formErrors.password}
                      value={
                        ClienteSelecionado ? ClienteSelecionado.password : ""
                      }
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={2}></Grid>
                </Grid>
                <Grid
                  container
                  direction="column"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                >
                  <Grid item xs={8}>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={() => insertar()}
                    >
                      Insertar
                    </Button>
                    &nbsp;&nbsp;
                    <Button
                      color="error"
                      variant="contained"
                      onClick={() => {
                        setModalInsertar(false);
                        cleanErrors();
                      }}
                    >
                      Cancelar
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Box>
          </Modal>
        </Box>
      </Grid>
    </div>
  );
}
