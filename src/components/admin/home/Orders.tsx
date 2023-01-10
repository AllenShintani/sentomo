import * as React from 'react'
import Link from '@mui/material/Link'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Title from './Title'

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  amount: number
) {
  return { id, date, name, shipTo, paymentMethod, amount }
}

const rows: {
  id: number
  date: string
  name: string
}[] = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99
  ),
]

function preventDefault(event: React.MouseEvent) {
  event.preventDefault()
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>メンバーの出勤時間</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>出勤</TableCell>
            <TableCell>名前</TableCell>
            {/*<TableCell>Ship To</TableCell>*/}
            {/*<TableCell>Payment Method</TableCell>*/}
            {/*<TableCell align="right">Sale Amount</TableCell>*/}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              {/*<TableCell>{row.shipTo}</TableCell>*/}
              {/*<TableCell>{row.paymentMethod}</TableCell>*/}
              {/*<TableCell align="right">{`$${row.amount}`}</TableCell>*/}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link
        color="primary"
        href="#"
        onClick={preventDefault}
        sx={{ mt: 3 }}
      >
        詳細{' '}
      </Link>
    </React.Fragment>
  )
}
