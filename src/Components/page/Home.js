import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import StationData from "../resource/Stationsdata";
import Yearly from "../resource/yearly";
import GetCurrentDate from "../date.js";
import NewAddedStations from "./newaddedstation.js";

const date = GetCurrentDate();

function Home() {
  const { push } = useHistory();

  return (
    <div className="container">
      <div className="row row-header ">
        <div className="col-sm-3 block">
          <h4 className="card-header">Stations commissioned in last 30 days</h4>
          <NewAddedStations />
        </div>
        <div className=" col-sm-5 block-2">
          <h4 className="card-header">Status as on {date} </h4>
          <div className="col-12  text-center block-center">
            <span>288</span>
          </div>

          <div class="btn-group" role="group">
            <button
              className="btn bg-warning text-start "
              type="btn"
              onClick={() => push("/Zone")}
            >
              Zone Wise Info
            </button>
            <span> </span>
            <button
              className="btn bg-warning text-end "
              type="btn"
              onClick={() => push("/Region")}
            >
              Region Wise Data
            </button>
          </div>
        </div>
        <div className=" col-sm-3 block">
          <h4 className="card-header">Stations to be commisioned</h4>
          <StationData />
        </div>
      </div>
      <Yearly />
    </div>
  );
}

export default Home;
