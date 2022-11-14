import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';


export default function BackButton() {
  const history = useHistory();

  const handleClick = () => {        
    history.push('/')
  }
  return (
    <Typography onClick={handleClick} gutterBottom variant="h6" component="h6" role='card-heading'>
        Back
    </Typography>
  );
}