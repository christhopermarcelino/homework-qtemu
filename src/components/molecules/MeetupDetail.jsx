import React from "react";
import TableRow from "../atoms/TableRow";
import TableColumn from "../atoms/TableColumn";
import Table from "../atoms/Table";

export default class MeetupDetail extends React.Component {
  render() {
    return (
      <Table>
        <tbody>
          <TableRow>
            <TableColumn text="Location" className="bg-transparent p-1" />
            <TableColumn
              text="Jakarta, Indonesia"
              className="bg-transparent p-1"
            />
          </TableRow>
          <TableRow>
            <TableColumn text="Members" className="bg-transparent p-1" />
            <TableColumn text="1078" className="bg-transparent p-1" />
          </TableRow>
          <TableRow>
            <TableColumn text="Organizers" className="bg-transparent p-1" />
            <TableColumn text="Adhy Wiranata" className="bg-transparent p-1" />
          </TableRow>
        </tbody>
      </Table>
    );
  }
}
