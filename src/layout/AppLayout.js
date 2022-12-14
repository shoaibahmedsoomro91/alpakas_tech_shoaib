import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import BackButton from '../components/back_button';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 2,
    padding: theme.spacing(3)
  }
}));

export default function AppLayout(props) {
  const classes = useStyles();
  const history = useHistory();

  const handleRoute = (path) => {
    history.push(path)
  }
  return (
    <div className={classes.root}>       
      <AppBar
        id = 'app-bar'
        position='fixed'
        className={classes.appBar}
        role = 'app-bar'
      >
        <Toolbar>        
          <BackButton></BackButton>
          <Typography align='center' variant='h4' noWrap style={{ flexGrow: 6}}>
            My Pokemons
          </Typography>
          <Button color="inherit" onClick={()=>{ handleRoute('/my-favourites')}}>My Favorites</Button>
        </Toolbar>
      </AppBar>
      <Container role = 'app-container' className={classes.content} maxWidth = {false}>      
        <div className={classes.toolbar} />        
        {props.children}
      </Container>
    </div>
  );
}
