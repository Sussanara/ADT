import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./shared_component/Login";
import Register from "./admin/Register";
import Crud from "./admin/home";

import Navbar from "./shared_component/navbar";
import HomeUser from "./user/home_user";

function Layout() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
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
          <Route>
            <h1>Not found!</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Layout;
