import TableHead from "./TableHead";
import TableBody from "./TableBody";

const fakeTableData = [
  {
    status: "Delayed",
    destination: "Vancouver (BC), CAN",
    airline: ["Air Canada"],
    flightNumber: ["AC103"],
    previousSchedule: "08:00",
    departing: "11:00",
    terminal: "1",
    gate: "D45",
  },
];

const Table = ({ data }) => {
  return (
    <table>
      <TableHead />
      <TableBody data={data} />
    </table>
  );
};

export default Table;
