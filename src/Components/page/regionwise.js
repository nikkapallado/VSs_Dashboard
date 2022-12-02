import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import "./Zone.css";
function Regionwise() {
  const { push } = useHistory();
  return (
    <div className="container">
      <button className=" btn-custom  " type="btn" onClick={() => push("/")}>
        Go Back To DashBoard
      </button>
      <div className="row row-content ">
        <h4>Region Wise Completed Stations</h4>
        <div className="  align-center table-responsive ">
          <table className="table table-striped ">
            <thead className="thead-dark text-center">
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Zone</th>
                <th scope="col">
                  Total Completed Stations
                  <sup>
                    <storng>*</storng>
                  </sup>
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <th scope="row">1</th>
                <td>NR</td>
                <td>105</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>ER</td>
                <td>57</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>SR</td>
                <td>72</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>WR</td>
                <td>54</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Total</td>
                <td>288</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Regionwise;
