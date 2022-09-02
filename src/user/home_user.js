import * as React from "react";
import "./styles/home_user.css";
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
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";


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

export const HomeUser = () => {
  const array = [
    { name: "mayo", stock: "123", sold_stock: "33", price: "2590" },
    { name: "coca-cola", stock: "77", sold_stock: "25", price: "2990" },
    { name: "lays", stock: "322", sold_stock: "200", price: "500" },
    { name: "donuts", stock: "44", sold_stock: "12", price: "900" },
    { name: "orange", stock: "65", sold_stock: "33", price: "2750" },
    { name: "bimbo", stock: "22", sold_stock: "11", price: "4580" },
    { name: "sprite", stock: "83", sold_stock: "32", price: "1990" },
    { name: "chettos", stock: "287", sold_stock: "22", price: "550" },
    { name: "chocolitos", stock: "50", sold_stock: "12", price: "680" },
    { name: "lapiz", stock: "300", sold_stock: "147", price: "130" },
  ];
  const [modalEdit, setModalEdit] = React.useState(false);

  // const [modalDelete, setModalDelete] = React.useState(false);
  const [modalDelete2, setModalDelete2] = React.useState(false);

  const [modalVentas, setModalventas] = React.useState(false);
  const [modalAddArticles, setModalAdd] = React.useState(false);
  // const ingresarVentas = () => setModalAdd(false);

  const [open, setOpen] = React.useState(true);

  return (
    <>
      <div>
        <Chartbar />
      </div>
      <div className="title_icon">
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
      </div>
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 3,
              mx: 2,
              my: 8,
              width: 270,
              height: 460,
            },
          }}
        >
          {array.map((product) => {
            return (
              <Paper
                elevation={8}
                sx={{ maxWidth: 280, maxHeight: 470, marginLeft: 2, margin: 2 }}
              >
                <Card sx={{ maxWidth: 280, maxHeight: 560 }}>
                  
                  {/* alert message, low stock */}
                  <Stack sx={{ width: "100%" }} spacing={2}>
                    <Alert severity="warning" aria-label="close">
                      <AlertTitle>Alerta!</AlertTitle>
                      Revisar el stock disponible{" "}
                      <strong>Baja cantidad de stock</strong>
                    </Alert>
                  </Stack>

                  <CardMedia
                    className="img"
                    component="img"
                    width=""
                    height="240"
                    image="https://picsum.photos/200/300"
                    alt=""
                  />
                  {/*   id = db.Column(db.Integer, primary_key = True)
  owner_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
  name = db.Column(db.String(200), nullable = False)
  stock  = db.Column(db.Integer, nullable = False)
  sold_stock = db.Column(db.Integer, nullable = False)
  price = db.Column(db.Integer, nullable = False)  */}
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
                  <CardActions
                    sx={{ marginBottom: 2, justifyContent: "center" }}
                  >
                    {/*Buton Card delete */}
                    <Button
                      style={{ backgroundColor: "#F44336", color: "white" }}
                      variant="contained"
                      onClick={() => {
                        setModalDelete2(true);
                      }}
                    >
                      <DeleteOutlineOutlinedIcon />
                    </Button>
                    {/* button Card Edit */}
                    <Button
                      style={{ backgroundColor: "#FF9800", color: "white" }}
                      variant="contained"
                      onClick={() => {
                        setModalEdit(true);
                      }}
                    >
                      <ModeEditOutlineOutlinedIcon />
                    </Button>
                    {/* button Card sales */}
                    <Button
                      style={{ backgroundColor: "#32CD32", color: "white" }}
                      variant="contained"
                      onClick={() => {
                        setModalventas(true);
                      }}
                    >
                      <AttachMoneyIcon />
                    </Button>
                    {/* button upload image*/}
                    <IconButton
                      style={{
                        marginLeft: 6,
                        border: "solid",
                        borderColor: "#F0F8FF",
                      }}
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                    >
                      <input hidden accept="image/*" type="file" />
                      <PhotoCamera />
                    </IconButton>
                  </CardActions>
                </Card>
              </Paper>
            );
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
            <div className="AddForm">
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
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                style={{ width: 330, marginBottom: 15 }}
                id="outlined-number"
                label="Stock de productos"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                style={{ width: 330, marginBottom: 15 }}
                id="outlined-number"
                label="Valor de productos"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            {/*Button Add Articles*/}
            <div className="buttonAdd">
              <Button
                style={{ backgroundColor: "#32CD32", color: "white" }}
                variant="contained"
                onClick={() => {
                  setModalAdd(false);
                }}
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

        {/* <Modal
          open={modalDelete}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="deleteForm">
              <TextField
                style={{ width: 330, marginBottom: 15 }}
                required
                id="outlined-required"
                label="Nombre de Productos"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                style={{ width: 330, marginBottom: 15 }}
                id="outlined-number"
                label="Stock de productos"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                style={{ width: 330, marginBottom: 15 }}
                id="outlined-number"
                label="Valor de productos"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="buttonDelete">
              <Button
                style={{ backgroundColor: "#32CD32", color: "white" }}
                variant="contained"
                onClick={() => {
                  setModalDelete(true);
                  {
                    
                  }
                }}
              >
                Aceptar
              </Button>
              &nbsp; &nbsp;
              <Button
                style={{ backgroundColor: "#F44336", color: "white" }}
                variant="contained"
                onClick={() => {
                  setModalDelete(false);
                }}
              >
                Cancelar
              </Button>
            </div>
          </Box>
        </Modal> */}

        {/*Este modal corresponde a la pregunta para el cliente de si esta seguro que desea eliminar el produto*/}
        <Modal
          open={modalDelete2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              ¿Esta seguro que desea Desactivar este producto?
            </Typography>
            {/*Button modal delete */}
            <div className="buttonEdit">
              <Button
                style={{ backgroundColor: "#32CD32", color: "white" }}
                variant="contained"
                onClick={() => {
                  setModalDelete2(false);
                }}
              >
                Si
              </Button>
              &nbsp; &nbsp;
              <Button
                style={{ backgroundColor: "#F44336", color: "white" }}
                variant="contained"
                onClick={() => {
                  setModalDelete2(false);
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
              {/*Form modal Edit */}
              <div className="editForm">
                <Typography
                  className="titleModalEdit"
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Editar Productos
                </Typography>
                <TextField
                  style={{ width: 330, marginBottom: 15, marginTop: 20 }}
                  required
                  id="outlined-required"
                  label="Nombre de Productos"
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <TextField
                  style={{ width: 330, marginBottom: 15 }}
                  id="outlined-number"
                  label="Stock de productos"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <TextField
                  style={{ width: 330, marginBottom: 15 }}
                  id="outlined-number"
                  label="Unidades Vendidas"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <TextField
                  style={{ width: 330, marginBottom: 15 }}
                  id="outlined-number"
                  label="Valor de productos"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </div>
            {/*Button modal edit */}
            <div className="buttonEdit">
              <Button
                style={{ backgroundColor: "#32CD32", color: "white" }}
                variant="contained"
                onClick={() => {
                  setModalEdit(false);
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
                style={{ width: 330, marginBottom: 15, marginTop: 20 }}
                id="outlined-number"
                label="Unidades Vendidas"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            {/*buton sales */}
            <div className="buttonSales">
              <Button
                style={{ backgroundColor: "#32CD32", color: "white" }}
                variant="contained"
                onClick={() => {
                  setModalventas(false);
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
