import React from 'react'
import {
  Paper, Typography, Divider, Button, List,
  Dialog, DialogActions, DialogTitle, DialogContent,
  FormControl, TextField
} from '@material-ui/core'
import { VariationItem } from './Variation'
import DropDownItem from './DropDownItem'
interface DropDownProps {
    hash:string
    title:string
    items:VariationItem[],
    onItemAdded:(hash:string, title:string, value:string) => void
}
export default function DropDown ({ hash, title, items, onItemAdded }:DropDownProps) {
  const [showDropDownDialog, setShowDropDownDialog] = React.useState<boolean>(false)
  const [dropDownTitle, setDropDownTitle] = React.useState<string>('')
  const [dropDownValue, setDropDownValue] = React.useState<string>('')

  const addDropDownItem = (e:React.MouseEvent) => {
    onItemAdded(hash, dropDownTitle, dropDownValue)
    setShowDropDownDialog(false)
  }
  return (
    <Paper elevation={1} style={{ marginBottom: '20px' }}>
      <Dialog open={showDropDownDialog}>
        <DialogTitle>اضافه کردن مقدار جدید</DialogTitle>
        <DialogContent>
          <FormControl fullWidth style={{ marginBottom: '20px' }}>
            <TextField
              onChange ={(e:React.ChangeEvent<HTMLInputElement>) => { setDropDownTitle(e.target.value) }}
              variant="outlined" id="dropDown_title" name="dropDown_title" label="عنوان آیتم"/>
          </FormControl >
          <FormControl fullWidth style={{ marginBottom: '20px' }}>
            <TextField
              onChange ={(e:React.ChangeEvent<HTMLInputElement>) => { setDropDownValue(e.target.value) }}
              variant="outlined" id="dropDown_value" name="dropDown_value" label="مقدار آیتم"/>
          </FormControl >
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { setShowDropDownDialog(false) }} color="primary">لغو</Button>
          <Button onClick={addDropDownItem} color="primary">ایجاد</Button>
        </DialogActions>
      </Dialog>
      <Typography variant='h6'>{title}</Typography>
      <Divider/>
      <List>
        {items.map((item:VariationItem, index:number) => (<DropDownItem key={index} {...item} />))}
      </List>
      <FormControl style={{ margin: '30px' }}>
        <Button color="primary" variant='outlined' onClick={() => { setShowDropDownDialog(true) }}>اضافه کردن آیتم جدید</Button>
      </FormControl>
    </Paper>
  )
}
