import React from "react";
import "../styles/Login.css";

function Login() {
  return (
    <div className="container-form sign-in">
      <form className="formulario">
        <h2 className="create-account">¡Bienvenido!</h2>
        <div className="email">
        <input type="email" placeholder="Email" />
        </div>
        <div className="contraseña">
          <input type="password" placeholder="Contraseña" />
        </div>
        <div className="iniciarsesión">
        <input type="button" defaultValue="Iniciar Sesión" />
        </div>
        <div className="pregunta">
        <p className="cuenta-gratis">¿Aún no tienes una cuenta?</p>
        </div>
        <div className="registrarse">
        <input type="button" defaultValue="Registrarse" />
        </div>
      </form>
    </div>
  );
}

export default Login;