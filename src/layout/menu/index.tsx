import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import { routes } from "../../routes";
import styles from "./index.module.scss";

class Menu extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.menu}>
          <ul>
            {routes.map((route, idx) => (
              <li key={idx}>
                <NavLink to={route.path}>{route.text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.content}>
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
