import React, { Component } from "react";

class LifeCycle extends Component {
  static propTypes = {};

  static defaultProps = {};

  // 1. 顺序1执行
  constructor(props) {
    super(props);
    console.log("constructor");
    console.log(props, "<--- props");
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      count: 1,
    };
  }

  // 2. 顺序2执行
  componentWillMount() {
    console.log("component will mount");
  }

  // 4. 顺序4执行
  componentDidMount() {
    console.log("component did mount");
  }

  // 更新1. 更新时顺序1执行
  shouldComponentUpdate() {
    console.log("should component update");
    return true;
  }

  // 更新2. 更新时顺序2执行
  componentWillUpdate() {
    console.log("component will update");
  }

  // 更新4. 更新时顺序4执行
  componentDidUpdate() {
    console.log("component did update");
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  // 3. 顺序3执行
  // 更新3. 更新3执行
  render() {
    console.log("render");
    return (
      <div>
        <span>{this.state.count}</span>
        <button onClick={this.handleClick}>更新count</button>
      </div>
    );
  }
}

export default LifeCycle;
