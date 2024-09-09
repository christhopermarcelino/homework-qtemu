import React from "react";
import Brand from "../molecules/Brand";
import NavbarLink from "../molecules/NavbarLink";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container gap-2">
          <Brand />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <NavbarLink />
          </div>
        </div>
      </nav>
    );
  }
}
