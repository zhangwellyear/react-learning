import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import { routes } from "../../routes";
import "./index.css";

class Menu extends Component {
  render() {
    return (
      <div className={"app"}>
        <div className="menu">
          <ul>
            {routes.map((route, idx) => (
              <li key={idx}>
                <NavLink to={route.path}>{route.text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="content">
          <Switch>
            {routes.map((route, idx) => (
              <Route key={idx} path={route.path} component={route.component} />
            ))}
          </Switch>
        </div>
      </div>
    );
  }
}

export default Menu;
