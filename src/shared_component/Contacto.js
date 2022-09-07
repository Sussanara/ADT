import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../styles/Contacto.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { display } from "@mui/system";

function Contacto() {
    return (
        <>
            <h2 align="center" style={{ marginTop: "15px" }}>Nuestros Planes</h2>
            <div className="row g-2 m-4 ">
                <div className="col-3 mx-5">
                    <div className="card border-primary mb-3" style={{ maxWidth: "18rem", height: "345px" }}>
                        <div className="card-header" align="center"><h5>Plan Mensual</h5></div>
                        <div className="card-body text-primary">
                            <p className="card-text">
                                <ul>
                                    <li>Ajustes de inventario en tiempo real.</li>
                                    <li>Alerta por baja de stock.</li>
                                    <li>Visualización del rendimiento del negocio/Comparación mensual.</li>
                                </ul>
                                <br></br>
                                <h5 align="center" class="text-dark">$10.000 mensual</h5>
                            </p>
                            <div className="Button">
                                <button type="button" class="btn btn-primary btn-sm">Suscríbete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 mx-5">
                    <div className="card border-secondary mb-3" style={{ maxWidth: "18rem" }}>
                        <div className="card-header" align="center"><h5>Plan 6 meses</h5></div>
                        <div className="card-body text-secondary">
                            <p className="card-text">
                                <ul>
                                    <li>Ajustes de inventario en tiempo real.</li>
                                    <li>Alerta por baja de stock.</li>
                                    <li>Visualización del rendimiento del negocio/Comparación mensual.</li>
                                </ul>
                                <h5 align="center" class="text-dark">$54.000 por 1/2 año</h5>
                                <p align="center" class="text-dark">$9.000 mensual</p>
                            </p>
                            <div className="Button">
                                <button type="button" class="btn btn-primary btn-sm">Suscríbete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 mx-5">
                    <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
                        <div className="card-header" align="center"><h5>Plan Anual</h5></div>
                        <div className="card-body text-success">
                            <p className="card-text">
                                <ul>
                                    <li>Ajustes de inventario en tiempo real.</li>
                                    <li>Alerta por baja de stock.</li>
                                    <li>Visualización del rendimiento del negocio/Comparación mensual.</li>
                                </ul>
                                <h5 align="center" class="text-dark">$96.000 anual</h5>
                                <p align="center" class="text-dark">$8.000 mensual</p>
                            </p>
                            <div className="Button">
                                <button type="button" class="btn btn-primary btn-sm">Suscríbete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container" rowSpacing={2}>
                <h2 align="center" style={{ marginTop: "15px", marginBottom: "15px" }}>Contáctanos</h2>
                <div className="row">
                    <div className="col-4 m-1">
                        <TextField id="outlined-basic" label="Nombre" variant="outlined" />
                    </div>
                    <div className="col-4 m-1">
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 m-1">
                        <TextField id="outlined-basic" label="Teléfono" variant="outlined" />
                    </div>
                    <div className="col-4 m-1">
                        <TextField id="outlined-basic" label="Empresa" variant="outlined" />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary m-3">Enviar</button>

                <h2 align="center" style={{ marginTop: "15px", marginBottom: "15px" }}>¿Dónde encontrarnos?</h2>
                <p><b>Mail:</b> info@businessinventory.cl</p>
                <p><b>Teléfono:</b> +569 42559768</p>
                <InstagramIcon />
                <FacebookIcon />
                <LinkedInIcon />
                <br></br>
                <br></br>
            </div>
        </>
    )
}

export default Contacto;