import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import WelcomDialog from "./sub-comp/WelcomDialog";

class Composition extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to={"/demo06/composition"}>组合</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path={"/demo06/composition"} component={WelcomDialog} />
        </Switch>
      </div>
    );
  }
}

export default Composition;
