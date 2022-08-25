import { useMemo } from 'react';
import { Grid } from '@mui/material';
import './style.scss'

const blockClassname = 'grid-list'

interface ICellSizeOptions {
  xs?: number | boolean,
  sm?: number | boolean,
  md?: number | boolean,
  lg?: number | boolean,
  xl?: number | boolean,
}

interface IGridEl {
  children?: JSX.Element | string | number,
  className?: string,
  options?: ICellSizeOptions
}

interface ICol {
  label: string,
  title?: string,
  options?: ICellSizeOptions
}

interface IRowsOptions {
  spacing?: number,
  columnSpacing?: number,
  rowSpacing?: number,
  hide?: boolean
}

interface ICells {
  [colName: string]: {
    content?: string | number | JSX.Element
  }
}

interface IGridRow {
  cols: ICol[],
  cells?: ICells,
  options?: IRowsOptions,
  className?: string
}

interface IGridList {
  cols: ICol[],
  rows?: {
    cells?: ICells,
    options?: IRowsOptions,
  }[],
  options?: {
    showHeading?: boolean,
    spacing?: number,
    columnSpacing?: number,
    rowSpacing?: number,
  },
  className?: string
}

const createGridEl = ({ children, className, options }: IGridEl): JSX.Element => {
  const key = `cell_${Math.random()}`

  return (
    <Grid item key={key} className={className} {...options}>
      {children}
    </Grid>
  )
}

const createGridRow = ({ cols, cells, options, className }: IGridRow): JSX.Element => {

  const rowCells = cols.map((col, i) => {
    const className = `${blockClassname}__cell col-${i + 1}`
    const options = col.options || { xs: true }
    if (cells![col.label] === undefined) { return createGridEl({ children: '', className: className, options: options }) }

    return createGridEl({ children: cells![col.label].content, className: className, options: options })
  })

  const key = `row_${Math.random()}`

  return (
    <Grid item xs={12} key={key}
      sx={{
        display: options?.hide ? 'none' : 'block',
      }}
    >
      <Grid
        container
        spacing={options?.spacing || 1}
        columnSpacing={options?.columnSpacing || 1}
        rowSpacing={options?.rowSpacing || 1}
        alignItems="center"
        className={className}
      >
        {rowCells}
      </Grid>
    </Grid>
  )
}

/**
 * @param options - obj( showHeading: bool, spacing, columnSpacing, rowSpacing ) 
 * 
 * @param cols - array ( obj( label, title, options ) )
 * @param cols.label - str* - connected with cells from rows
 * @param cols.title - str - name for heading
 * @param cols.options - obj: xs, sm, md, lg, xl
 * 
 * @param rows - array ( obj( cells, options ) )
 * @param rows.cells - obj (  'name === column label': obj ( content ) )
 * @param rows.options - options - obj( spacing , columnSpacing , rowSpacing , hide: bool )
 */

export default ({ cols, rows, options, className }: IGridList): JSX.Element | null => {

  if (!cols || !rows) return null


  const bgColor = '#fff'

  const heading = options?.showHeading ? useMemo(() => {
    const headingCells = {}

    //Перебираем массив колонок и формируем ячейки для заголовков
    cols.forEach(col => headingCells[col.label] = { content: col.title || col.label })

    return createGridRow({
      cols: cols,
      cells: headingCells,
      className: `${blockClassname}__row ${blockClassname}__heading col-heading`
    })
  }, [cols]) : null

  const gridRows = useMemo(() => {
    return rows.map((row, i) => {

      const className = `${blockClassname}__row row-${i + 1}`

      return createGridRow({ cols: cols, cells: row.cells, options: row.options, className: className })
    })
  }, [rows, cols])

  return (
    <div
      className={`${blockClassname}__wrapper ${className || ''}`}
      style={{ backgroundColor: bgColor }}
    >
      <Grid container
        spacing={options?.spacing || 1}
        columnSpacing={options?.columnSpacing || 1}
        rowSpacing={options?.rowSpacing || 1}
        alignItems="center"
        className={`${blockClassname}__list`}
      >
        {heading || null}
        {gridRows}
      </Grid>
    </div>

  )
}
