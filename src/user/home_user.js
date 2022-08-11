import * as React from "react";
import "./styles/home_user.css";
import axios from "axios";
import Chartbar from "./chartbar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import Paper from "@mui/material/Paper";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
let userId = 1;
export const HomeUser = () => {
  const dataFalsa = [
    { id: 1, name: "mayo", stock: "123", sold_stock: "33", price: "2500" },
    { id: 2, name: "coca-cola", stock: "77", sold_stock: "25", price: "2000" },
    { id: 3, name: "lays", stock: "322", sold_stock: "200", price: "500" },
    { id: 4, name: "donuts", stock: "44", sold_stock: "12", price: "900" },
    { id: 5, name: "orange", stock: "65", sold_stock: "33", price: "2000" },
    { id: 6, name: "bimbo", stock: "22", sold_stock: "11", price: "4500" },
    { id: 7, name: "sprite", stock: "83", sold_stock: "32", price: "2000" },
    { id: 8, name: "chettos", stock: "287", sold_stock: "22", price: "500" },
    { id: 9, name: "chocolitos", stock: "50", sold_stock: "12", price: "600" },
    { id: 10, name: "lapiz", stock: "300", sold_stock: "147", price: "100" },
  ];
  const [data, setData] = React.useState(dataFalsa);
  const [modalEdit, setModalEdit] = React.useState(false);
  const [modalDesactivar, setModalDesactivar] = React.useState(false);
  const [modalActivar, setModalActivar] = React.useState(false);
  const [modalVentas, setModalventas] = React.useState(false);
  const [modalAddArticles, setModalAdd] = React.useState(false);
  const [productSelected, setProductSelected] = React.useState({
    name: "",
    stock: 0,
    sold_stock: 0,
    price: 0,
    sold_stock2: 0,
    is_active: true
  });
  React.useEffect(() => {
    /* securityLogin(token) */
    getDataUser(userId);
  }, []);
  const restedProducSeleted = () => {
    setProductSelected({
      name: "",
      stock: 0,
      sold_stock: 0,
      price: 0,
      sold_stock2: 0,
      is_active: true
    });
  };
  const selectProduct = (product, caso) => {
    setProductSelected(product);
    caso === "Editar"
      ? setModalEdit(true)
      : caso === "Ventas"
      ? setModalventas(true)
      : caso === "Desactivar"
      ? setModalDesactivar(true)
      : setModalActivar(true)
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductSelected((prevState) => ({
      ...prevState,
      [name]: Number(value),
    }));
  };
  const handleChangeText = (e) => {
    const { name, value } = e.target;
    setProductSelected((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const editProduct = (id) => {
    console.log(productSelected);
    var dataNueva = data;
    dataNueva.map((product) => {
      if (product.id === productSelected.id) {
        product.name = productSelected.name;
        product.sold_stock = productSelected.sold_stock;
        product.stock = productSelected.stock;
        product.price = productSelected.price;
        editDataProduct(productSelected.id, userId);
      }
    });

    setModalventas(false);
    setModalEdit(false);
  };
  const editProductSold = (id) => {
    console.log(productSelected);
    var dataNueva = data;
    dataNueva.map((product) => {
      if (product.id === productSelected.id) {
        product.name = productSelected.name;
        product.stock = productSelected.stock;
        product.sold_stock = productSelected.sold_stock + productSelected.sold_stock2;
        productSelected.sold_stock = product.sold_stock;
        product.price = productSelected.price;
        editDataProduct(productSelected.id, userId);
      }
    });
    setModalventas(false);
    setModalEdit(false);
  };
  const editProductDesactive = (id) => {
    console.log(productSelected);
    var dataNueva = data;
    dataNueva.map((product) => {
      if (product.id === productSelected.id) {
        product.is_active = false;
        productSelected.is_active = false;

        editDataProduct(productSelected.id, userId);
      }
    });
    setModalventas(false);
    setModalEdit(false);
    setModalDesactivar(false);
  };
  const editProductActive = (id) => {
    console.log(productSelected);
    var dataNueva = data;
    dataNueva.map((product) => {
      if (product.id === productSelected.id) {
        product.is_active = true;
        productSelected.is_active = true;
        editDataProduct(productSelected.id, userId);
      }
    });
    setModalventas(false);
    setModalEdit(false);
    setModalActivar(false);
  };

  const insertNewProduct = () => {
    var dataNueva = data;
    var valorInsertar = productSelected;
    console.log("en insertaBoton ", valorInsertar);

    // here loader for user;
    const response = addRequest(userId);
    console.log("AQUII RESPONSE", response);

    //setData
    console.log("Cliente creado correctamente");
    setData(dataNueva);
    setModalAdd(false);
    return;
  };
  function test() {
    console.log(data);
  }
  /* ******************************************************************************** */
  /* ------------------------funciones de peticion de data--------------------------- */
  /* ******************************************************************************** */

  const getDataUser = (userId) => {
    fetch(
      `https://api-project-business-inventory.herokuapp.com/api/users/${userId}`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        console.log(response);

        return response.json();
      })
      .then((data) => {
        console.log(data);
        restedProducSeleted();
        setData(data.products);
      })

      .catch((error) => {
        console.log("fallo la peticion");
        console.log(error);
      });
  };

  const editDataProduct = (id, idUser) => {
    fetch(
      `https://api-project-business-inventory.herokuapp.com/api/users/${idUser}/products/${id}`,
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productSelected),
      }
    )
      .then((response) => {
        console.log("1");
        console.log(response);

        return response.json();
      })
      .then((data) => {
        console.log("2");
        console.log(data);
        restedProducSeleted();
        getDataUser(userId);
      })

      .catch((error) => {
        console.log(productSelected);
        console.log("fallo la peticion");
        console.log(error);
      });
  };
  const addRequest = (idUser) => {
    console.log("PRE REGISTER CLIENTE: ", productSelected);
    return axios({
      method: "POST",
      url: `https://api-project-business-inventory.herokuapp.com/api/users/${idUser}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: productSelected,
    })
      .then((response) => {
        console.log(response);
        return response;
      })
      .then((data) => {
        console.log(data);
        getDataUser(userId);
      })
      .catch((error) => {
        console.log("ESTE ES EL ERROR DEL CATCH");
        console.log(error);
        console.log(error.response);
        console.log("abajo");
      });
  };
  /* *************************************************************************************** */
  /* *****************************codigo de las cartas************************************** */
  /* *************************************************************************************** */
  function CardProduct(props) {
    const { product } = props;

    return (
      <React.Fragment>
        <Paper
          elevation={8}
          sx={{ maxWidth: 280, maxHeight: 470, marginLeft: 2, margin: 2 }}
        >
          <Card sx={{ maxWidth: 280, maxHeight: 460 }}>
            <CardMedia
              className="img"
              component="img"
              width=""
              height="240"
              image="https://picsum.photos/200/300"
              alt=""
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.primary">
                Stock: {product.stock}
              </Typography>
              <Typography variant="body2" color="text.primary">
                Vendidas: {product.sold_stock}
              </Typography>
              <Typography variant="body2" color="text.primary">
                valor: ${product.price}
              </Typography>
              <Typography variant="body2" color="text.primary">
                Ganancia: ${product.price * product.sold_stock}
              </Typography>
            </CardContent>
            <CardActions sx={{ marginBottom: 2, justifyContent: "center" }}>
              <Button
                style={{ backgroundColor: "#F44336", color: "white" }}
                variant="contained"
                onClick={() => selectProduct(product, "Desactivar")}
              >
                <DeleteOutlineOutlinedIcon />
              </Button>

              <Button
                style={{ backgroundColor: "#FF9800", color: "white" }}
                variant="contained"
                onClick={() => selectProduct(product, "Editar")}
              >
                <ModeEditOutlineOutlinedIcon />
              </Button>

              <Button
                style={{ backgroundColor: "#32CD32", color: "white" }}
                variant="contained"
                onClick={() => selectProduct(product, "Ventas")}
              >
                <AttachMoneyIcon />
              </Button>
            </CardActions>
          </Card>
        </Paper>
      </React.Fragment>
    );
  }
  function CardProduct2(props) {
    const { product } = props;

    return (
      <React.Fragment>
        <Paper
          elevation={8}
          sx={{ maxWidth: 280, maxHeight: 470, marginLeft: 2, margin: 2 }}
        >
          <Card sx={{ maxWidth: 280, maxHeight: 460 }}>
            <CardMedia
              className="img"
              component="img"
              width=""
              height="240"
              image="https://picsum.photos/200/300"
              alt=""
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.primary">
                Stock: {product.stock}
              </Typography>
              <Typography variant="body2" color="text.primary">
                Vendidas: {product.sold_stock}
              </Typography>
              <Typography variant="body2" color="text.primary">
                valor: ${product.price}
              </Typography>
              <Typography variant="body2" color="text.primary">
                Ganancia: ${product.price * product.sold_stock}
              </Typography>
            </CardContent>
            <CardActions sx={{ marginBottom: 2, justifyContent: "center" }}>
              <Button
                style={{ backgroundColor: "#32CD32", color: "white" }}
                variant="contained"
                onClick={() => selectProduct(product, "Activar")}
              >
                <AddShoppingCartIcon />
              </Button>

            </CardActions>
          </Card>
        </Paper>
      </React.Fragment>
    );
  }
  return (
    <>
            <Button onClick={() => {test()}}>
          holo
        </Button>
      <div>
        <Chartbar />
      </div>
      <Typography inline variant="h4" align="right" mr={6} mt={6}>
        Artículos
        <Button onClick={() => {setModalAdd(true)}}>
          <Icon sx={{ color: "#32CD32", fontSize: 50 }} color="primary">add_circle</Icon>
        </Button>
      </Typography>
      {/* <div className="title_icon">
        <h3 className="subtitleHomeUser">Artículos</h3>
        <Button
          onClick={() => {
            setModalAdd(true);
          }}
        >
          <Icon sx={{ color: "#32CD32", fontSize: 50 }} color="primary">
            add_circle
          </Icon>
        </Button>
      </div> */}
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 3,
              mx: 2,
              my: 5,
              width: 270,
              height: 440,
            },
          }}
        >
          {data.map((product) => {
            return <CardProduct key={product.id} product={product} />;
          })}
        </Box>

      <Typography inline variant="h4" align="right" mr={6}>Articulos Desactivados</Typography>
      <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 3,
              mx: 2,
              my: 5,
              width: 270,
              height: 440,
            },
          }}
        >
          {data.map((product) => {
            if(product.is_active){
              return <CardProduct2 key={product.id} product={product} />;
            }
          })}
          
        </Box>
      </div>
      {/*Cards Modals */}
      <div>
        {/*Modal Add Articles */}
        <Modal
          style={{}}
          open={modalAddArticles}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="boxAdd" sx={style}>
            <div className="AddForm form-group">
              <Typography
                className="titleModalAdd"
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Agregar Productos
              </Typography>
              {/*Form modal Add Articles*/}
              <TextField
                style={{ width: 330, marginBottom: 15, marginTop: 20 }}
                required
                id="outlined-required"
                label="Nombre de Productos"
                className="form-control"
                type="text"
                name="name"
                value={productSelected ? productSelected.name : ""}
                onChange={handleChangeText}
              />
              <TextField
                style={{ width: 330, marginBottom: 15 }}
                id="outlined-number"
                label="Stock de productos"
                type="number"
                className="form-control"
                name="stock"
                value={productSelected ? productSelected.stock : 0}
                onChange={handleChange}
              />
              <TextField
                style={{ width: 330, marginBottom: 15 }}
                id="outlined-number"
                label="Valor de productos"
                type="number"
                className="form-control"
                name="price"
                value={productSelected ? productSelected.price : 0}
                onChange={handleChange}
              />
            </div>
            {/*Button Add Articles*/}
            <div className="buttonAdd">
              <Button
                style={{ backgroundColor: "#32CD32", color: "white" }}
                variant="contained"
                onClick={() => insertNewProduct()}
              >
                Aceptar
              </Button>
              &nbsp; &nbsp;
              <Button
                style={{ backgroundColor: "#F44336", color: "white" }}
                variant="contained"
                onClick={() => {
                  setModalAdd(false);
                }}
              >
                Cancelar
              </Button>
            </div>
          </Box>
        </Modal>

        <Modal
          open={modalDesactivar}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
              ¿Esta seguro que desea ELIMINAR este producto?
            </Typography>
            {/*Button modal delete */}
            <div className="buttonEdit">
              <Button
                style={{ backgroundColor: "#32CD32", color: "white" }}
                variant="contained"
                onClick={() => {
                  editProductDesactive();
                }}
              >
                Si
              </Button>
              &nbsp; &nbsp;
              <Button
                style={{ backgroundColor: "#F44336", color: "white" }}
                variant="contained"
                onClick={() => {
                  setModalDesactivar(false);
                }}
              >
                No
              </Button>
            </div>
          </Box>
        </Modal>
        <Modal
          open={modalActivar}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
              ¿Esta seguro que desea volver a AGREGAR este producto?
            </Typography>
            {/*Button modal delete */}
            <div className="buttonEdit">
              <Button
                style={{ backgroundColor: "#32CD32", color: "white" }}
                variant="contained"
                onClick={() => {
                  editProductActive();
                }}
              >
                Si
              </Button>
              &nbsp; &nbsp;
              <Button
                style={{ backgroundColor: "#F44336", color: "white" }}
                variant="contained"
                onClick={() => {
                  setModalActivar(false);
                }}
              >
                No
              </Button>
            </div>
          </Box>
        </Modal>

        {/*Modal Edit*/}
        <Modal
          open={modalEdit}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Modal Editar
              </Typography>
              <TextField
                style={{ width: 330, marginBottom: 15, marginTop: 20 }}
                required
                id="outlined-required"
                className="form-control"
                label="Nombre de Productos"
                type="text"
                name="name"
                value={productSelected && productSelected.name}
                onChange={handleChangeText}
              />

              <TextField
                style={{ width: 330, marginBottom: 15 }}
                id="outlined-number"
                className="form-control"
                label="Stock de productos"
                type="number"
                name="stock"
                value={productSelected && productSelected.stock}
                onChange={handleChange}
              />

              <TextField
                style={{ width: 330, marginBottom: 15 }}
                id="outlined-number"
                label="Unidades Vendidas"
                type="number"
                name="sold_stock"
                value={productSelected && productSelected.sold_stock}
                onChange={handleChange}
              />

              <TextField
                style={{ width: 330, marginBottom: 15 }}
                id="outlined-number"
                label="Valor de productos"
                type="number"
                name="price"
                value={productSelected && productSelected.price}
                onChange={handleChange}
              />
            </div>

            {/*Button modal edit */}
            <div className="buttonEdit">
              <Button
                style={{ backgroundColor: "#32CD32", color: "white" }}
                variant="contained"
                onClick={() => {
                  editProduct();
                }}
              >
                Aceptar
              </Button>
              &nbsp; &nbsp;
              <Button
                style={{ backgroundColor: "#F44336", color: "white" }}
                variant="contained"
                onClick={() => {
                  setModalEdit(false);
                }}
              >
                Cancelar
              </Button>
            </div>
          </Box>
        </Modal>

        {/*Modal sales */}
        <Modal
          open={modalVentas}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {/*Sales form */}
            <div className="salesForm">
              <Typography
                className="titleModalSales"
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Productos Vendidos
              </Typography>
              <TextField
                style={{ width: 330, marginBottom: 15 }}
                id="outlined-number"
                className="form-control"
                label="Unidades Vendidas"
                type="number"
                name="sold_stock2"
                value={productSelected && productSelected.sold_stock2}
                onChange={handleChange}
              />
            </div>
            {/*buton sales */}
            <div className="buttonSales">
              <Button
                style={{ backgroundColor: "#32CD32", color: "white" }}
                variant="contained"
                onClick={() => {
                  editProductSold();
                }}
              >
                Aceptar
              </Button>
              &nbsp; &nbsp;
              <Button
                style={{ backgroundColor: "#F44336", color: "white" }}
                variant="contained"
                onClick={() => {
                  setModalventas(false);
                }}
              >
                Cancelar
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default HomeUser;
