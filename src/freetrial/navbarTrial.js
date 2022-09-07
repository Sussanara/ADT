import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../shared_component/styles/navbar.css";
import Typography from "@mui/material/Typography";

export const NavbarTrial = () => {
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
    /* securityLogin(store.msg) */
  },[])   
  return (
    <nav className="navbar">
      <div className="container-fluid">
      <a className="navbar-brand text-light" href="#">
      <img src={require("../asset/logo4.png")} alt="" width="55" height="45" className="d-inline-block align-text-top mx-1"/>
      Business Inventory
    </a>  
    <Typography inline variant="h6" align="right" style={{color:"white"}}><i className="off fa-solid fa-power-off" onClick={goHome} /></Typography>
        {/* <form className="d-flex" role="search">
          <div className="name_user">
            <p>{store.userName?store.userName:store.email}  
          </div>
          <i className="off fa-solid fa-power-off" />
        </form> */}
      </div>
    </nav>
  );
};

export default NavbarTrial;
