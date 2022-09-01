import * as React from "react";
import orden1 from "../asset/orden1.jpg";
import "../styles/Somos.css";
import BS2 from "../asset/BS2.png";
import Banner1 from "../asset/Banner1.png";
import Somos1 from "../asset/Somos1.png";
import Somos2 from "../asset/Somos2.png";




function Somos() {
    return (
        <>
            <div className="row d-flex m-5">
                <iframe width="560" height="400" src="https://www.youtube.com/embed/DlTBCQK1Pw8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            {/*     <div className="row d-flex m-5 p-5">
            <div className="col-3 ms-5 ps-5">
            <img src={orden1} alt="" class="img-fluid rounded-circle" style={{ height: "350px" }} />
            </div>
            <div className="col-3 ms-5 ps-5">
                    <img src={BS2} alt="" style={{ height: "350px" }} />
                </div>
            </div>
            <div className="row ms-5">
                <div className="col-4 ms-5 ps-5">
                    <h4>Bienvenido</h4>
                    <hr width="20%" color="black" />
                    <h1><span className="text-dark">Quiénes Somos</span></h1>
                    <h4>Somos una empresa chilena que desarrolló Business Inventory, una interfaz que permite realizar inventarios online. La aplicación nace de la idea de ayudar a pequeños y medianos negocios a tener un espacio en donde puedan registrar sus productos y obtener datos relevantes de ellos.</h4>
                </div>
                <div className="col-4 ms-5 ps-5">
                    <hr width="20%" color="black" />
                    <h1><span className="text-dark">¿Qué nos diferencia?</span></h1>
                    <h4>Desarrollamos una aplicación simple
                        y amigable, que fue pensada desde las necesidades del usuario, procurando entregar una respuesta inmediata. Business Inventory te permite registrar el stock de cada producto, cantidad de
                        productos vendidos y su valor, lo que arroja automáticamente las ganancias obtenidas.</h4>
                </div>
            </div > */}
            <div className="row d-flex m-5">
                <div className="col-7">
                    <h4>Bienvenido</h4>
                    <hr width="20%" color="black" />
                    <h1><span className="text-dark">Quiénes Somos</span></h1>
                    <h4>Somos una empresa chilena que desarrolló Business Inventory, una interfaz que permite realizar inventarios online. La aplicación nace de la idea de ayudar a pequeños y medianos negocios a tener un espacio en donde puedan registrar sus productos y obtener datos relevantes de ellos.</h4>
                </div>
                <div className="col-md-3">
                    <img src={Somos1} alt="" style={{ height: "350px" }} />
                </div>
            </div>
            <div className="row d-flex m-5">
                <div className="col-md-3">
                    <img src={Somos2} alt="" style={{ height: "350px" }} />
                </div>
                <div className="col-7">
                    <hr width="20%" color="black" />
                    <h1><span className="text-dark">¿Qué nos diferencia?</span></h1>
                    <h4>Desarrollamos una aplicación simple
                        y amigable, que fue pensada desde las necesidades del usuario, procurando entregar una respuesta inmediata. Business Inventory te permite registrar el stock de cada producto, cantidad de
                        productos vendidos y su valor, lo que arroja automáticamente las ganancias obtenidas.</h4>
                </div>
            </div>
            <div className="row">
            <img src={Banner1} alt="" style={{ height: "400px" }} />
            </div>
        </>
    )

}

export default Somos;