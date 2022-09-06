import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "./styles/navbar.css";
import Typography from "@mui/material/Typography";




export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const usuario = "admin";
  const securityLogin =(msg)=>{
    if(msg=="Successful Login" || msg=="Successful admin login"){console.log("te logeaste bien tienes permitido seguir")}
    else{window.location.href="http://localhost:3000/"  }
  }
  function goHome(){
    window.location.href="http://localhost:3000/"
  }
  React.useEffect(()=>{
    // securityLogin(store.msg)
  },[])   
  return (

    <nav className="navbar navbar-expand-lg">

  <div className="container-fluid">
  <a className="navbar-brand text-light" href="#">
      <img src={require("../asset/logo4.png")} alt="" width="55" height="45" className="d-inline-block align-text-top mx-1"/>
      Business Inventory
    </a>  
    
    <div
    
      className="navbar-collapse collapse"
      id="navbarSupportedContent"
      style={{}}
    >
      <Typography inline variant="h6" align="right" style={{color:"white",display:"block", marginLeft:"auto" }}>{store.userName?store.userName:store.email?store.email:"Nombre de usuario"}  </Typography>
      
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form> */}
    </div>
    <i className="off fa-solid fa-power-off" style={{display:"block", marginLeft:10}} onClick={goHome} 
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"/>
  </div>
</nav>


     
  
  );
};

export default Navbar;



