import React from "react";

function Lishka({ value }) {
  return (
    <li>
      {value} DEN:
      <span>{new Date().getMonth()}</span>
    </li>
  );
}

export default Lishka;
