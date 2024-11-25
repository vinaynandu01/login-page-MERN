import React from "react";
import "./css files/tabledata.css";

export default function Tabledata() {
  return (
    <div>
      <h1 className="tbhead">Tabledata</h1>
      <table>
        <tr>
          <th>
            <b>Name</b>
          </th>
          <th>
            <b>email-ID</b>
          </th>
          <th>
            <b>phoneno.</b>
          </th>
        </tr>
        <tr>
          <td>John</td>
          <td>john@gmail.com</td>
          <td>1234567890</td>
        </tr>
      </table>
    </div>
  );
}
