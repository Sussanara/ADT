import React from "react";
import "./styles/home_user.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import Paper from "@mui/material/Paper";

export const home_user = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div>
        <h1>Visión General de tu Negocio</h1>
      </div>
      <h3>
        Artículos <Icon sx={{ color: "#32CD32", fontSize: 40,   borderBottom: 2  }} color="primary">add_circle</Icon>
      </h3>
      <div>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
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
                <CardMedia component="img" height="240" image="" alt="" />

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
                <CardActions sx={{ marginBottom: 2 }}>
                  <Button
                    style={{ backgroundColor: "#F44336", color: "white" }}
                    variant="contained"
                  >
                    Eliminar
                  </Button>

                  <Button
                    style={{ backgroundColor: "#FF9800", color: "white" }}
                    variant="contained"
                  >
                    Editar
                  </Button>

                  <Button
                    style={{ backgroundColor: "#32CD32", color: "white" }}
                    variant="contained"
                  >
                    Ventas
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          );
        })}
    </Box>
      </div>
    </>
  );
};

export default home_user;
