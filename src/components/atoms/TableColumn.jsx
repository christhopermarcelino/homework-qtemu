import React from "react";

export default class TableColumn extends React.Component {
  render() {
    return <td className={this.props.className}>{this.props.text}</td>;
  }
}
