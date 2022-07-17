import React, { Component } from "react";
import BoilingVerdict from "./sub-comp/BoilingVerdict";
import TemperatureInput from "./sub-comp/TemperatureInput";
import { toCelsius, toFahrenheit, tryConvert } from "./utils/convert";

class Calculator extends Component<any, any> {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {
      scale: "c",
      temperature: "",
    };
  }

  handleCelsiusChange(temperature) {
    this.setState({
      temperature,
      scale: "c",
    });
  }

  handleFahrenheitChange(temperature) {
    this.setState({
      temperature,
      scale: "f",
    });
  }

  render(): React.ReactNode {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}

export default Calculator;
