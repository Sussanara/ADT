import * as React from "react";
import orden1 from "../asset/orden1.jpg";
import "../styles/Somos.css";
import BS2 from "../asset/BS2.png";
import Banner1 from "../asset/Banner1.png";
import Somos1 from "../asset/Somos1.png";
import Somos2 from "../asset/Somos2.png";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';




function Somos() {
    return (
        <>
            <Grid container>
                <Grid xs={12} md={12}>
                    <div className="row d-flex m-5">
                        <iframe width="560" height="400" src="https://www.youtube.com/embed/DlTBCQK1Pw8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Grid>
                <Grid xs={12} md={12}>
                    <div className="row">
                        <div className="col-7 m-5">
                            <h4>Bienvenido</h4>
                            <hr width="20%" color="black" />
                            <h1><span className="text-dark">Quiénes Somos</span></h1>
                            <h4>Somos una empresa chilena que desarrolló Business Inventory, una interfaz que permite realizar inventarios online. La aplicación nace de la idea de ayudar a pequeños y medianos negocios a tener un espacio en donde puedan registrar sus productos y obtener datos relevantes de ellos.</h4>
                        </div>
                        <div className="col-3 m-5">
                            <img src={Somos1} alt="" style={{ height: "300px" }} />
                        </div>
                    </div>
                </Grid>

                <Grid xs={12} md={12}>
                    <div className="row">
                        <div className="col-3 m-5">
                            <img src={Somos2} alt="" style={{ height: "300px" }} />
                        </div>
                        <div className="col-7 m-5">
                            <hr width="20%" color="black" />
                            <h1><span className="text-dark">¿Qué nos diferencia?</span></h1>
                            <h4>Desarrollamos una aplicación simple
                                y amigable, que fue pensada desde las necesidades del usuario, procurando entregar una respuesta inmediata. Business Inventory te permite registrar el stock de cada producto, cantidad de
                                productos vendidos y su valor, lo que arroja automáticamente las ganancias obtenidas.</h4>
                        </div>
                    </div>
                </Grid>
                <Grid xs={12} md={12}>
                    <div className="row">
                        <img src={Banner1} alt="" style={{ height: "300px", width: "100%" }} />
                    </div>
                </Grid>
            </Grid>
            {/* <div className="container">

                <div className="row sm-12 m-5">
                        <iframe width="560" height="400" src="https://www.youtube.com/embed/DlTBCQK1Pw8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>


                <div className="row">
                    <div className="col-sm-8">
                        <h4>Bienvenido</h4>
                        <hr width="20%" color="black" />
                        <h1><span className="text-dark">Quiénes Somos</span></h1>
                        <h4>Somos una empresa chilena que desarrolló Business Inventory, una interfaz que permite realizar inventarios online. La aplicación nace de la idea de ayudar a pequeños y medianos negocios a tener un espacio en donde puedan registrar sus productos y obtener datos relevantes de ellos.</h4>
                    </div>
                    <div className="col-sm-4">
                        <img src={Somos1} alt="" style={{ height: "300px" }} />
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-4">
                        <img src={Somos2} alt="" style={{ height: "300px" }} />
                    </div>
                    <div className="col-sm-8">
                        <hr width="20%" color="black" />
                        <h1><span className="text-dark">¿Qué nos diferencia?</span></h1>
                        <h4>Desarrollamos una aplicación simple
                            y amigable, que fue pensada desde las necesidades del usuario, procurando entregar una respuesta inmediata. Business Inventory te permite registrar el stock de cada producto, cantidad de
                            productos vendidos y su valor, lo que arroja automáticamente las ganancias obtenidas.</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <img src={Banner1} alt="" style={{ height: "300px" }} />
                    </div>
                </div>
            </div> */}
        </>
    )

}

export default Somos;