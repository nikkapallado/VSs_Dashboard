import React from "react";
import "../styles.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
  }
  getKeys = function () {
    return Object.keys(this.props.data[0]);
  };
  getHeader = function () {
    var keys = this.getKeys();
    return keys.map((key) => {
      return <th key={key}>{key.toUpperCase()}</th>;
    });
  };

  getRowsData = function () {
    var items = this.props.data;
    var keys = this.getKeys();
    return items.map((row, index) => {
      return (
        <tr key={index}>
          <RenderRow key={index} data={row} keys={keys} />
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="table-responsive-lg ">
        <table className="table table-striped table-bordered">
          <thead className=" text-start">
            <tr>
              <th>S.No</th>
              <th>Station Name</th>
              <th>Station Code</th>
              <th>Phase</th>
              <th>Region</th>
              <th>Zone</th>
              <th>Division</th>
              <th>Date of Commissioning</th>
            </tr>
          </thead>
          <tbody className="text-start">{this.getRowsData()}</tbody>
        </table>
      </div>
    );
  }
}

const RenderRow = (props) => {
  return props.keys.map((key) => {
    return <td key={props.data[key]}>{props.data[key]}</td>;
  });
};
