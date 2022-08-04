import React from "react";
import "../styles/Login.css";

function Register() {
  return (
    <div className="container-form sign-in">
      <form className="formulario">
        <h2 className="create-account">Crear una cuenta</h2>
        <i className="fa-solid fa-envelope"></i>
        <div className="email">
        <input type="email" placeholder="Email" />
        </div>
        <div className="contraseña">
          <input type="password" placeholder="Contraseña" />
        </div>
        <div className="iniciarsesión">
        <input type="button" defaultValue="Iniciar Sesión" />
        </div>
        <div className="registrarse">
        <input type="button" defaultValue="Registrarse" />
        </div>
      </form>
    </div>
  );
}

export default Register;