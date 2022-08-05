import React from "react";
import "./styles/home_user.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { green } from "@mui/material/colors";
import Icon from "@mui/material/Icon";
import Stack from '@mui/material/Stack';

export const home_user = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div>
        <h1>Visión General de tu Negocio</h1>
      </div>
      <h3>
        Artículos <Icon color="primary">add_circle</Icon>
      </h3>
      <div>
        {array.map((numero) => {
          return (
            <Card sx={{ maxWidth: 280, maxHeight: 450 ,marginLeft: 2, margin: 2, }}>
              <CardMedia
                component="img"
                height="250"
                image=""
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
              <CardActions>
              <Button sx={{ backgroundColor: "#FF0000", color: "#FFFFFF", marginRight: 1}} variant="contained"  size="small">
          Eliminar
          </Button>
          <Button sx={{ backgroundColor: "#008000", color: "#FFFFFF", marginRight: 1 }} variant="contained" size="small">
          Ventas
        </Button>
        <Button sx={{ backgroundColor: "#9ACD32", color: "#FFFFFF" }} variant="contained" size="small">
          Editar
        </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default home_user;
