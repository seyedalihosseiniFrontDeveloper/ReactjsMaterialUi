import React from 'react'
import { TableRow, TableCell } from '@material-ui/core'
import IProduct from '../IProduct'
import { toPersianCurrency } from '../../../services/Currency'
import { toPersianNumber } from '../../../services/Lang'
import Status from '../Status'
import ProductStatus from '../ProductStatus'
export default function ProductItem ({
  title,
  thumbnail,
  price,
  stock,
  discountedPrice,
  status,
  createdAt,
  updatedAt
}:Partial<IProduct>) {
  return (
    <TableRow>
      <TableCell align="center">
        <img src={thumbnail} alt="product thumbnail" width={60} height={60}/>
      </TableCell>
      <TableCell align="center">{title}</TableCell>
      <TableCell align="center">{toPersianCurrency(price as unknown as number)}</TableCell>
      <TableCell align="center">{toPersianNumber(stock as unknown as number)}</TableCell>
      <TableCell align="center">{<Status status={status as ProductStatus} />}</TableCell>
      <TableCell align="center">{toPersianNumber(createdAt as unknown as string)}</TableCell>
      <TableCell align="center">{toPersianNumber(updatedAt as unknown as string)}</TableCell>

    </TableRow>
  )
}
