import React from "react";
import "./styles/navbar.css";

export const navbar = () => {
  const usuario = "nombre usuario";
  return (
    <nav className="navbar">
      <div className="container-fluid">
      <a className="navbar-brand text-light" href="#">
      <img src={require("../asset/logo4.png")} alt="" width="60" height="50" className="d-inline-block align-text-top mx-1"/>
      Business Inventory
    </a>  
        <form className="d-flex" role="search">
          <div className="name_user">
            <p>{usuario}</p>
          </div>
          <i className="off fa-solid fa-power-off" />
        </form>
      </div>
    </nav>
  );
};

export default navbar;
