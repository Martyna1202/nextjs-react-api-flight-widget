import { useState, useEffect } from "react";
import TableRow from "./TableRow";

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((flight, _index) => (
        <TableRow key={_index} flight={flight} />
      ))}
    </tbody>
  );
};

export default TableBody;
