import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <div>
      <img
        src={require("./logo.png")}
        alt="RailTel_Logo"
        class="rounded-left float-start img-custom-1"
      />
      <img
        src={require("./download.png")}
        alt="RailTel_Logo"
        class="rounded-left float-end img-custom-2"
      />{" "}
      <div className="Container">
        <div className="row row-header">
          <div class="heading-text main-heading">
            <h1>VSS DASHBOARD</h1>
            <h2>Video Surveillance System</h2>
          </div>
        </div>
        <div className="nav-bottom">
          <input type="text" placeholder="Station Name"></input>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
