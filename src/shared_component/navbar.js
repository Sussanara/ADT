import React from "react";
import "./styles/navbar.css";

export const navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand text-light">Business Inventory</a>
        <form className="d-flex" role="search">
          <div className="name_user">
            <p>Nombre Usuario</p>
          </div>
          <button
            className="btn_off "
            type="submit"
          >
            <i className="fa-solid fa-power-off" />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default navbar
