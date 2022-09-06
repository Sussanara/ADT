import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Contacto() {
    return (
        <>
            <h2 align="center" style={{ marginTop: "15px" }}>Nuestros Planes</h2>
            <div className="row g-2 m-4" >
                <div className="col">
                    <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
                        <div className="card-header"><h5>Plan Mensual</h5></div>
                        <div className="card-body text-primary">
                            <p className="card-text">
                                <ul>
                                    <li>Ajustes de inventario en tiempo real.</li>
                                    <li>Alerta por baja de stock.</li>
                                    <li>Visualización del rendimiento del negocio/Comparación mensual.</li>
                                </ul>
                                <h5>$10.000 mensual</h5>
                            </p>
                            <button type="button" class="btn btn-primary btn-sm">Suscríbete</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-secondary mb-3" style={{ maxWidth: "18rem" }}>
                        <div className="card-header"><h5>Plan 6 meses</h5></div>
                        <div className="card-body text-secondary">
                            <p className="card-text">
                                <ul>
                                    <li>Ajustes de inventario en tiempo real.</li>
                                    <li>Alerta por baja de stock.</li>
                                    <li>Visualización del rendimiento del negocio/Comparación mensual.</li>
                                </ul>
                                <h5>$9.000 mensual</h5>
                            </p>
                            <button type="button" class="btn btn-primary btn-sm">Suscríbete</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
                        <div className="card-header"><h5>Plan Anual</h5></div>
                        <div className="card-body text-success">
                            <p className="card-text">
                                <ul>
                                    <li>Ajustes de inventario en tiempo real.</li>
                                    <li>Alerta por baja de stock.</li>
                                    <li>Visualización del rendimiento del negocio/Comparación mensual.</li>
                                </ul>
                                <h5>$8.000 mensual</h5>
                            </p>
                            <button type="button" class="btn btn-primary btn-sm">Suscríbete</button>
                        </div>
                    </div>
                </div>
            </div>
            <h2 align="left" style={{ marginTop: "15px", marginBottom: "15px", marginLeft: "130px" }}>Contáctanos</h2>
            <div className="container">
                <div className="row">
                    <div className="col-3 m-2">
                        <TextField id="outlined-basic" label="Nombre" variant="outlined" />
                        </div>
                        <div className="col-3 m-2">
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 m-2">
                        <TextField id="outlined-basic" label="Teléfono" variant="outlined" />
                        </div>
                        <div className="col-3 m-2">
                        <TextField id="outlined-basic" label="Empresa" variant="outlined" />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
            <h2 align="left" style={{ marginTop: "15px", marginBottom: "15px", marginLeft: "130px" }}>¿Dónde encontrarnos?</h2>
            <div className="container">
            <p><b>Mail:</b> info@businessinventory.cl</p>
            <p><b>Teléfono:</b> +569 42559768</p>
            </div>
        </>
    )
}

export default Contacto;