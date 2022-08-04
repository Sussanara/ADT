import React from "react";

export const navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: "rgba(26, 25, 105, 1)" }}>
      <div className="container-fluid">
        <a className="navbar-brand text-light">Business Inventory</a>
        <form className="d-flex" role="search">
          <button className="btn btn-outline-success text-light" type="submit">
            Nombre de Usuario
          </button>
          <button
            className="btn btn-outline-success text-light"
            style={{ backgroundColor: "red", borderRadius: "100%" }}
            type="submit"
          >
            <i className="fa-solid fa-power-off" />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default navbar;
