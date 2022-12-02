import React from "react";

export default function GetCurrentDate(separator = " ") {
  let myCurrentDate = new Date();
  let date = myCurrentDate.getDate();
  let month = myCurrentDate.getMonth() + 1;
  let year = myCurrentDate.getFullYear();
  let hours = myCurrentDate.getHours();
  let time = myCurrentDate.getMinutes();

  return `${date}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${year}${separator}${hours}:${time}`;
}
