import { Chip } from '@material-ui/core'
import React from 'react'
import ProductStatus from './ProductStatus'
interface statusProps{
    status:ProductStatus
}
function Status ({ status }:statusProps) {
  return (
    <>
      {status === ProductStatus.INIT && <Chip style={{ backgroundColor: '#ff9800' }} label='در حال آماده سازی'/>}
      {status === ProductStatus.INACTIVE && <Chip style={{ backgroundColor: '#f44336' }} label='غیر فعال'/>}
      {status === ProductStatus.PUBLISHED && <Chip style={{ backgroundColor: '#4caf50' }} label='فعال'/>}
    </>
  )
}
export default React.memo(Status)
