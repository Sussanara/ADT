import React from "react";
import Login from "./shared_component/Login";
import Register from "./admin/Register";
import Crud from "./admin/home";
import Somos from "./shared_component/Somos";
import Contacto from "./shared_component/Contacto";

import Navbar from "./shared_component/navbar";
import HomeUser from "./user/home_user";

function App() {
  return (
    <>
      <Navbar />
      <Contacto />
    </>
  );
}

export default App;
 