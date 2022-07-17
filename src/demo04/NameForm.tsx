import React, { Component } from "react";

class NameForm extends Component<{ name: string }, { value: string }> {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit() {
    alert("提交的名字" + this.state.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.value}
          />
          <button type="submit">Submit</button>
        </form>

        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default NameForm;
