import React, { Component } from "react";
import Menu from "./layout/menu/index.tsx";

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1 className="App-title">React学习之旅</h1>
        </header>
        <nav>
          <Menu />
        </nav>
      </>
    );
  }
}

export default App;
