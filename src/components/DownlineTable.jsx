import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('1233444', "$159", "20/09/2022", "10:00am", 4.0),
  createData('3455443', "$237","20/09/2022", "10:00am", 4.3),
  createData('2344567', "$262", "20/09/2022", "10:00am", 6.0),
  createData('1234443', "$305", "20/09/2022", "10:00am", 4.3),
  createData('1223344', "$356", "20/09/2022", "10:00am", 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{color:"blue"}}>Transaction Code</TableCell>
            <TableCell  sx={{color:"blue"}} align="center">Commision</TableCell>
            <TableCell  sx={{color:"blue"}} align="center">Date</TableCell>
            <TableCell  sx={{color:"blue"}} align="center">Time</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" align="center" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
