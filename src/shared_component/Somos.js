import * as React from "react";
import orden1 from "../asset/orden1.jpg";
import "../styles/Somos.css";
import BS2 from "../asset/BS2.png";
import Banner1 from "../asset/Banner1.png";
import Somos1 from "../asset/Somos1.png";
import Somos2 from "../asset/Somos2.png";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Icono1 from "../asset/Icono1.png";
import Icono2 from "../asset/Icono2.png";

function Somos() {
    return (
        <>
            <Grid container>
                <Grid xs={12} md={12}>
                    <div className="row d-flex m-5">
                        <iframe
                            width="560"
                            height="400"
                            src="https://www.youtube.com/embed/DlTBCQK1Pw8"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </Grid>

                <Grid xs={12} md={7}>
                    <div className=" m-5">
                        <h4>Bienvenido</h4>
                        <hr width="20%"/>
                        <h1>
                            <span className="text-dark">Quiénes Somos</span>
                        </h1>
                        <h4>
                            Somos una empresa chilena que desarrolló Business Inventory, una
                            interfaz que permite realizar inventarios online. La aplicación
                            nace de la idea de ayudar a pequeños y medianos negocios a tener
                            un espacio en donde puedan registrar sus productos y obtener
                            datos relevantes de ellos.
                        </h4>
                    </div>
                </Grid>
                <Grid xs={12} md={3}>
                    <div className=" m-5">
                        <img src={Somos1} alt="" style={{ height: "300px" }} />
                    </div>
                </Grid>




                <Grid xs={12} md={3}>

                    <div className="m-5">
                        <img src={Somos2} alt="" style={{ height: "300px" }} />
                    </div>
                </Grid>
                <Grid xs={0} md={2}></Grid>
                <Grid xs={12} md={7}>

                    <div className=" m-5">
                        {/* <hr width="100%" align="right" /> */}

                        <h1>
                            <p className="text-dark" align="right">¿Qué nos diferencia?</p>
                        </h1>
                        <h4 align= "right">
                            Desarrollamos una aplicación simple y amigable, que fue pensada
                            desde las necesidades del usuario, procurando entregar una
                            respuesta inmediata. Business Inventory te permite registrar el
                            stock de cada producto, cantidad de productos vendidos y su valor,
                            lo que arroja automáticamente las ganancias obtenidas.
                        </h4>
                    </div>
                </Grid>


                {/* <Grid xs={12} md={12}>

          <img
            src={Banner1}
            alt=""
            style={{ height: "300px", width: "100%" }}
          />

        </Grid> */}
         <Grid container style={{ backgroundColor: "#1a1969", width: "100%", height: "80px" }}>
                    <Grid xs={3} md={3}>
                        <img src={Icono1} alt="left" style={{ height: "80px", width: "80px", marginLeft: "25px" }} />
                    </Grid>
                    <Grid xs={6} md={6}>
                    <h4 className="text-white text-center mt-2"><b>Control de inventario en tiempo real</b></h4>
                    </Grid>
                    <Grid xs={3} md={3}>
                    <img src={Icono2} align="right" alt="" style={{ height: "80px", width: "100px", marginRight: "25px"}} />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Somos;