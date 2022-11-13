import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
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

export default function Dropdown(props) {  
  const classes = useStyles();    
  const [ value, setValue ] = React.useState('')
  const handleChange = (event) => {
    const val = event.target.value;
    setValue(val);
    props.handleOnChange(props.actionType, val)
  }
  return (
    <FormControl variant="standard" className={classes.formControl}>
    <InputLabel id={`select-${props.label}-label`}>{props.label}</InputLabel>
    <Select        
        fullWidth
        labelId={props.label}
        id="select-type"
        variant={'standard'}
        label="Bucket"
        onChange={handleChange}
        value = {value}
    >
      {
        props.items && props.items.map((item, index)=>{
          return <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
        })
      }
    </Select>
    </FormControl>
  )
}
Dropdown.propTypes = {
  label: PropTypes.string,
  handleOnChange: PropTypes.func,
  actionType : PropTypes.string,
  items : PropTypes.array
};