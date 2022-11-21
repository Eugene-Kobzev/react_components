import { Table, TableBody, TableCell, TableHead, TableRow, TablePagination, TableContainer, Box } from '@mui/material';
import { ReactFragment, useState } from 'react'

interface IColsCell {
  label: string,
  title: string,
  options?: {
    hidden?: boolean,
    width?: string | number,
    align?: string,
    className?: string
  }
}

interface IRow {
  [label: string]: string | ReactFragment | any,
  hidden?: boolean,
}

interface ITableProps {
  cols: IColsCell[],
  rows: IRow[],
  className?: string,
  pagination?: boolean,
  rowsPerPageOptions?: number[],
}

/**
 * @param {array} cols (required) - arr ( obj( label, title, options ) )
 * @param cols.label - string (required)- label for correlation with rows labels
 * @param cols.title - string - title of the col
 * @param cols.options - obj (hidden: bool , width: str OR int, align: str, className: str)
 * 
 * @param {array} rows (required) - arr ( obj( [label]: React OR str,  hidden: bool )
 * @param {string} className - str - table className
 * 
 * @param {bool} pagination - bool - false by default. Include pagination if true
 * @param {bool} rowsPerPageOptions - arr( int )
 */
export default ({ cols, rows, className, pagination, rowsPerPageOptions }: ITableProps) => {
  rowsPerPageOptions = rowsPerPageOptions || [5, 10, 25]

  const [page, setpage] = useState(0)
  const [rowsPerPage, setrowsPerPage] = useState(pagination ? rowsPerPageOptions[1] : 0)

  const handleChangePage = (e, newPage) => {
    setpage(newPage)
  }

  const handleChangeRowsPerPage = (e) => {
    setrowsPerPage(parseInt(e.target.value, 10))
    setpage(0)
  }

  return (
    <Box>
      <TableContainer>
        <Table className={`${className || ''}`}>
          <TableHead>
            <TableRow className={`col`}>
              {cols.map((col, colI) => (
                <TableCell key={colI}
                  sx={{
                    width: col.options && col.options.width || 'auto',
                    display: col.options && col.options.hidden ? 'none' : 'table-cell',
                    textAlign: col.options && col.options.align || 'left'
                  }}
                  className={`col-${colI} heading-cell ${col.options && col.options.className || ''}`}
                >
                  {col.title || ''}
                </TableCell>
              )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              (rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
              ).map((row, rowI) => (
                <TableRow key={`row-${rowI}`}
                  className={`row-${rowI} row`}
                  sx={{
                    display: row.hidden ? 'none' : ''
                  }}
                >
                  {cols.map((col, colI) => (
                    <TableCell key={`row-cell-${colI}`} className={`row-cell-${colI} row-cell`}>
                      {row[col.label]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {
        pagination
          ? <TablePagination
            rowsPerPageOptions={rowsPerPageOptions}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          : null
      }
    </Box>
  )
}