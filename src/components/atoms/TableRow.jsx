import React from "react";

export default class TableRow extends React.Component {
  render() {
    return <tr className={this.props.children}>{this.props.children}</tr>;
  }
}
