import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./shared_component/Login";
import Register from "./admin/Register";
import Crud from "./admin/home";
import { Context } from "./store/appContext";
import injectContext from "./store/appContext";

import Navbar from "./shared_component/navbar";
import HomeUser from "./user/home_user";
import HomeUserTrial from "./freetrial/home_user";
import NavbarLogin from "./shared_component/navbarLogin";
import Are from "./freetrial/are"

const Layout = () => {
	
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
  return (
    <>
      <BrowserRouter basename={basename}>
        <Switch>
          <Route exact path="/">
            <NavbarLogin />
            <Login />
          </Route>
          <Route exact path="/are">
            <NavbarLogin />
            <Are />
          </Route>
          <Route exact path="/register">

            <Register />
          </Route>
          <Route exact path="/admin">
            <Navbar />
            <Crud />
          </Route>
          <Route exact path="/user">
            <Navbar />
            <HomeUser />
          </Route>
          <Route exact path="/trial">
            <Navbar />
            <HomeUserTrial />
          </Route>
          <Route>
            <h1>Not found!</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default injectContext(Layout);
