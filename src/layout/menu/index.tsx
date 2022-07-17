import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Counter from "../../demo01/Counter";
import LifeCycle from "../../demo02/LifeCycle";
import ConditionRender from "../../demo03/ConditionRender";
import { routes } from "../../routes";

class Menu extends Component {
  render() {
    return (
      <div>
        <div className="menu">
          <ul>
            {routes.map((route, idx) => (
              <li key={idx}>
                <NavLink to={route.path}>{route.text}</NavLink>
              </li>
            ))}
          </ul>
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
