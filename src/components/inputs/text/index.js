import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
    minWidth: 120,
  }
}));

export default function TextField({label, actionType, handleOnChange}) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClickSearch = () => {
    handleOnChange(actionType,value)
  };

  return (
    <FormControl className={classes.formControl}>
        <InputLabel htmlFor="standard-adornment-search">{label}</InputLabel>
        <Input
        id="standard-adornment-search"
        type={'text'}
        value={value}
        onChange={handleChange}
        endAdornment={
            <InputAdornment position="end">
            <IconButton
                aria-label="search"
                onClick={handleClickSearch}                
            >
                <SearchIcon/>
            </IconButton>
            </InputAdornment>
        }
        />
    </FormControl>
  );
}
