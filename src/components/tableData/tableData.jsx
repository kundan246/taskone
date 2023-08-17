import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../../redux/action";


const TableData = ({setopenUpdateForm}) => {
  const data = useSelector((res) => res.data);
  const myDispatch = useDispatch()

  const handleSubmit=(response)=>{
     setopenUpdateForm(true)
     myDispatch(showUser(response))
  }

  return (
    <TableContainer sx={{p:4}} >
      <Table
        sx={{
          border: "2px solid black",
        }}
      >
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "gray",
              borderBottom: "2px solid black",
              "& th": {
                fontSize: "1.25rem",
                color: "black",
              },
            }}
          >
            <TableCell>Sl.No</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.users.map((response, index) => {
            return (
              <TableRow
                hover
                key={index}
                onClick={()=>handleSubmit(response)}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{response.first_name}</TableCell>
                <TableCell>{response.last_name}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default React.memo(TableData);
