import * as React from 'react';
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

export const HomeUser = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [modalEditar, setModalEditar] = React.useState(false);
  const handleOpen = () => setModalEditar(true);
  const handleClose = () => setModalEditar(false);

  
  return (
    <>
      <div>
        <Chartbar />
      </div>
      <div className="title_icon">
        <h3>Artículos</h3>
        <Icon sx={{ color: "#32CD32", fontSize: 50 }} color="primary">
          add_circle
        </Icon>
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
              my: 5,
              width: 270,
              height: 440,
            },
          }}
        >
          {array.map((numero) => {
            return (
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
                      Nombre producto
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      Stock: 10
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      Vendidas: 15
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      valor: $1.000
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      Ganancia: $3.000
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ marginBottom: 2, justifyContent: "center" }}
                  >
                    <Button
                      style={{ backgroundColor: "#F44336", color: "white" }}
                      variant="contained"
                    >
                      <DeleteOutlineOutlinedIcon />
                    </Button>

                    <Button
                      style={{ backgroundColor: "#FF9800", color: "white" }}
                      variant="contained"
                      onClick={handleOpen}
                    >
                      <ModeEditOutlineOutlinedIcon />
               
                    </Button>

                    <Button
                      style={{ backgroundColor: "#32CD32", color: "white" }}
                      variant="contained"
                    >
                      <AttachMoneyIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Paper>
            );
          })}
        </Box>
      </div>
      <div>
      <Modal
        open={modalEditar}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Modal Editar
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
    </>
  );
};

export default HomeUser;
