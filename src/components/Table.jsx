import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableFooter, TablePagination } from '@mui/material';
import TablePaginationActionsComponent from './TablePaginationActionsComponent';





export default function BasicTable({ data }) {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer component={Paper} sx={{
        maxHeight: '80vh', maxWidth: '100%'
      }}>
        <Table aria-label="table" stickyHeader>
          <TableHead className='bg-gray-100 border-2' sx={{ backgroundColor: 'red' }}>
            <TableRow sx={{backgroundColor:'red'}}>
              <TableCell align="center" sx={{
                fontSize: '18px', '@media (max-width: 640px)': {
                  fontSize: '16px', 
                }
              }}>Name</TableCell>
              <TableCell align="center" sx={{
                fontSize: '18px', '@media (max-width: 640px)': {
                  fontSize: '16px',
                }
              }}>Contact</TableCell>
              <TableCell align="center" sx={{
                fontSize: '18px', '@media (max-width: 640px)': {
                  fontSize: '16px',
                }
              }}>Lead Created</TableCell>
              <TableCell align="center" sx={{
                fontSize: '18px', '@media (max-width: 640px)': {
                  fontSize: '16px',
                }
              }}>Status</TableCell>
              <TableCell align="center" sx={{
                fontSize: '18px', '@media (max-width: 640px)': {
                  fontSize: '16px',
                }
              }}>Msg Exchanged</TableCell>
              <TableCell align="center" sx={{
                fontSize: '18px', '@media (max-width: 640px)': {
                  fontSize: '16px',
                }
              }}>Last Active</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center" sx={{
                  '@media (max-width: 640px)': {
                    fontSize: '12px',
                  }
                }}>
                  {row.name}
                </TableCell>
                <TableCell align="center" sx={{
                  '@media (max-width: 640px)': {
                    fontSize: '12px',
                  }
                }}  >{row.contact}</TableCell>
                <TableCell align="center" sx={{
                  '@media (max-width: 640px)': {
                    fontSize: '12px',
                  }
                }}>{row.leadCreated}</TableCell>
                <TableCell align="center" sx={{
                  color: (row.status === "Hot") ? 'green' : (row.status === "Dead") ? 'red' : '',
                  '@media (max-width: 640px)': {
                    fontSize: '12px',
                  }
                }}>{row.status}</TableCell>
                <TableCell align="center" sx={{
                  '@media (max-width: 640px)': {
                    fontSize: '12px',
                  }
                }}>{row.msgExchanged}</TableCell>
                <TableCell align="center" sx={{
                  '@media (max-width: 640px)': {
                    fontSize: '12px',
                  }
                }}>{row.lastActive}</TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow className='bg-gray-100 border-2'>
              <TableCell align="center" sx={{
                fontSize: '20px', '@media (max-width: 640px)': {
                  fontSize: '16px',
                }
              }}>Total: {data.length}</TableCell>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={6}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActionsComponent}

              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
}