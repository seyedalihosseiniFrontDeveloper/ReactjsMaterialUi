import React from 'react'
import { VariationItem } from './Variation'
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core'
interface VariantSelectProps{
    title:string
    name:string
    type:string
    items:VariationItem[],
    onItemsChanged:(type:string, value:string) => void
}
export default function VariantSelect ({ title, name, type, items, onItemsChanged }:VariantSelectProps) {
  const handleChange = (e:React.ChangeEvent<{value:unknown}>) => {
    onItemsChanged(name, e.target.value as string)
  }
  return (
    <FormControl style={{ minWidth: '200px', margin: '20px auto' }}>
      <InputLabel id="variant_select">{`انتخاب از ${title}`}</InputLabel>
      <Select
        labelId="variant_select"
        id="variant_select"
        onChange={handleChange}
      >
        {items.map((variationItem:VariationItem, index:number) => {
          return <MenuItem key={index} value={variationItem.value}>{variationItem.title}</MenuItem>
        })}
      </Select>
    </FormControl>
  )
}
