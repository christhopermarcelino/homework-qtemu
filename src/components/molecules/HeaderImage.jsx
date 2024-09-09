import React from "react";
import Image from "../atoms/Image";

export default class HeaderImage extends React.Component {
  render() {
    return (
      <Image
        src="/images/hacktiv8.jpg"
        alt="Meetup logo"
        className="img-fluid"
        width={225}
      />
    );
  }
}
