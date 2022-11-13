import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  InputLabel,
  Select,
  MenuItem,
  FormControl  
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  formControl: {
    width: '100%',
    minWidth: 120,
  }
}));

export default function Dropdown({ label, actionType, items, handleOnChange}) {  
  const classes = useStyles();    
  const [ value, setValue ] = React.useState('')
  const handleChange = (event) => {
    const val = event.target.value;
    setValue(val);
    handleOnChange(actionType, val)
  }
  return (
    <FormControl variant="standard" className={classes.formControl}>
    <InputLabel id={`select-${label}-label`}>{label}</InputLabel>
    <Select        
        fullWidth
        labelId={label}
        id="select-type"
        variant={'standard'}
        label="Bucket"
        onChange={handleChange}
        value = {value}
    >
      {
        items && items.map((item, index)=>{
          return <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
        })
      }
    </Select>
    </FormControl>
  )
}