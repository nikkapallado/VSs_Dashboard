import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import "./Zone.css";
function Zone() {
  const { push } = useHistory();
  return (
    <div className="container">
      <button className=" btn-custom  " type="btn" onClick={() => push("/")}>
        Go Back To DashBoard
      </button>
      <div className="row row-content ">
        <h4>Zones Wise Completed Stations</h4>
        <div className="  align-center table-responsive ">
          <table className="table table-striped ">
            <thead className="thead-dark text-center">
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Zone</th>
                <th scope="col">Total Completed Stations(Phase-IA+IB+IBV)</th>
                <th scope="col">Total Completed Stations(Phase-IA+IB+IB)</th>
                <th scope="col">Balance Stations</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <th scope="row">1</th>
                <td>CR</td>
                <td>24</td>
                <td>20</td>
                <td>4</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>ECor</td>
                <td>15</td>
                <td>15</td> <td>0</td>
              </tr>

              <tr>
                <th scope="row">3</th>
                <td>ECR</td>
                <td>17</td>
                <td>14</td>
                <td>3</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>ER</td>
                <td>11</td>
                <td>11</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>NCR</td>
                <td>16</td>
                <td>16</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>NER</td>
                <td>16</td>
                <td>16</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>NFR</td>
                <td>12</td>
                <td>11</td>
                <td>1</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>NR</td>
                <td>49</td>
                <td>49</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>NWR</td>
                <td>24</td>
                <td>24</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>SCR</td>
                <td>19</td>
                <td>18</td>
                <td>1</td>
              </tr>
              <tr>
                <th scope="row">11</th>
                <td>SECR</td>
                <td>3</td>
                <td>3</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">12</th>
                <td>SER</td>
                <td>3</td>
                <td>3</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">13</th>
                <td>SR</td>
                <td>40</td>
                <td>40</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">14</th>
                <td>SWR</td>
                <td>17</td>
                <td>14</td>
                <td>3</td>
              </tr>
              <tr>
                <th scope="row">15</th>
                <td>WCR</td>
                <td>15</td>
                <td>15</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">16</th>
                <td>WR</td>
                <td>19</td>
                <td>19</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">17</th>
                <td>Total</td>
                <td>300</td>
                <td>288</td>
                <td>12</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Zone;
