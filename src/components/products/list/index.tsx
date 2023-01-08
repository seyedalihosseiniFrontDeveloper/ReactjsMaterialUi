import React from 'react'
import { TableCell, TableContainer, TableHead, TableRow, Table, TableBody } from '@material-ui/core'
import ProductItem from './ProductItem'
import IProduct from '../IProduct'
interface ProductsListProps {
    items:IProduct[],
}
export default function index ({ items }:ProductsListProps) {
  return (
    <TableContainer>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>تصویر </TableCell>
            <TableCell>عنوان </TableCell>
            <TableCell> قیمت </TableCell>
            <TableCell> موجودی </TableCell>
            <TableCell> وضعیت </TableCell>
            <TableCell> ایجاد </TableCell>
            <TableCell> به روز رسانی </TableCell>
            <TableCell> عملیات </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item:IProduct) => <ProductItem key={item._id} {...item} />)}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
