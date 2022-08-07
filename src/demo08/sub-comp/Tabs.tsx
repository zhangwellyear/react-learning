import React, { Component } from "react";
import styles from "./tabs.module.scss";
import classnames from "classnames";

class Tabs extends Component<
  {
    tabs: string[];
    tabChange: (v) => void;
  },
  {
    currTab: string;
  }
> {
  constructor(props) {
    super(props);

    const tabs = this.props.tabs;
    this.state = {
      currTab: tabs[0],
    };
  }

  render() {
    const tabs = this.props.tabs;

    return (
      <div>
        <ul className={styles.tabs}>
          {tabs.map((tab, idx) => (
            <li
              className={this.state.currTab === tab ? styles.active : ""}
              onClick={() => {
                this.props.tabChange(tab);
              }}
              key={idx}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Tabs;
