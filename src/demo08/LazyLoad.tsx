import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import AvoidFallback from "./AvoidFallback";
import BasicLazyload from "./BasicLazyload";

class LazyLoad extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to={"/demo08/basic"}>基础懒加载</NavLink>
          </li>
          <li>
            <NavLink to={"/demo08/avoid"}>Avoiding fallbacks</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path={"/demo08/basic"} component={BasicLazyload} />
          <Route path={"/demo08/avoid"} component={AvoidFallback} />
        </Switch>
      </div>
    );
  }
}

export default LazyLoad;
