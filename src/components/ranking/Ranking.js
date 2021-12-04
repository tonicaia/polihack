import { Col, Row, Container } from 'react-bootstrap'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from "react";
import wcertified from "../../assets/wcertified.png"

const columns = [
  { id: 'ranking', label: 'Ranking', minWidth: 100 },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'country', label: 'Country', minWidth: 100 },
  { id: 'footprint', label: 'Footprint(kgCO2)', minWidth: 100 },
  { id: 'certification', label: 'Certification', minWidth: 100 },
];

function createData(ranking, name, country, footprint, certification) {
  return { ranking, name, country, footprint, certification };
}

const rows = [
  createData('#1', 'VW', 'Germany', 1050, true),
  createData('#2', 'EMag', 'Romania', 2000, true),
  createData('#3', 'Samsung', 'South Korea', 1000, false),
  createData('#4', 'Dacia', 'Romania', 700, true),
  createData('#5', 'Michelin', 'France', 4000, false),
  createData('#6', 'Continental', 'Germany', 5500, true),
  createData('#7', 'Ford', 'USA', 10000, false),
  createData('#8', 'Lidl', 'Germany', 3000, true),
  createData('#9', 'Porsche', 'Germany', 2300, true),
  createData('#10', 'Farmec', 'Romania', 1200, false),
];


function Ranking() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Container>
        <h1>Top rated companies</h1>
        <TableContainer >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  let i = 0;
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        i++;
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {(i === 5 && value) ? <img width="70" src={wcertified}/> : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  )
}

export default Ranking;
