import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";
import { useQuery } from '@apollo/client';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThemeCircularProgress from '../../components/loading';
import { saveToLocalStorage, loadFromLocalStorage, removeFromLocalStorage } from '../../utils/localStorage';
import { GET_POKEMON } from '../../queries';

const useStyles = makeStyles({
  list_root: {
    width: '100%',
    backgroundColor: '#fff',
  },
  root: {
    maxWidth: '80%',
  },
  media: {
    height: 300,
  },
  inline: {
    display: 'inline',
  },
  large: {
    width: 300,
    height: 300, 
  }
});

export default function PokemonsDetail() {  
  const classes = useStyles();
  const location = useLocation();
  const { loading, data } = useQuery(GET_POKEMON, {variables: {id: location.state.id}} );
  const [ pokemonsDetail, setPokemonDetail ] = useState(null);
  const [ favourite, setFavourite ] = useState(false);

  const addFavourite = () => {
    let fav = false;
    if(favourite){
      fav = removeFromLocalStorage('favourite_pokemons',pokemonsDetail.id);
      if(fav){
        setFavourite(false);
      }
    }else{
      fav = saveToLocalStorage('favourite_pokemons',pokemonsDetail);
      if(fav){
        setFavourite(true);
      }
    }
  }

  React.useEffect(() => {
    if(data){
      setPokemonDetail(data.pokemon);
      const is_fav = loadFromLocalStorage('favourite_pokemons');
      
      if(is_fav && is_fav.length > 0){
        const index = is_fav.findIndex(x => x.id === data.pokemon.id);
        if(index > -1){          
          setFavourite(true);
        }
      }
    }
  },[data])
  
  return (     
    <div>
      {
        loading && <ThemeCircularProgress></ThemeCircularProgress>
      }
      {
        !loading &&
        <>
          <Grid container spacing={2} direction='row'>
            <Grid item xs={4}>
              <Paper elevation={3} className="pokemon-image">
                <Grid container justifyContent='center'>
                  <Grid item xs={6}>
                    <Avatar variant="square" src={`${pokemonsDetail?.sprites?.front_default}`} className={classes.large} />
                    <IconButton style={{ color : favourite ? '#eb0505d9' : '#968e85d9' }} aria-label="fav" className='favourite-btn' onClick={addFavourite}>
                      <FavoriteIcon/>
                    </IconButton>
                  </Grid>
                </Grid>            
              </Paper>                    
            </Grid>
            <Grid item xs={8}>
              <Paper elevation={3} style={{padding : 20 }}>
                <Grid container spacing={1} style={{ padding : 20}}> 
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="subtitle2" style={{ fontSize : 16 }}>Name</Typography>
                    <Typography>{pokemonsDetail?.name}</Typography>              
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="subtitle2" style={{ fontSize : 16 }}>Shape</Typography>
                    <Typography>{pokemonsDetail?.shape}</Typography>              
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="subtitle2" style={{ fontSize : 16 }}>Generation</Typography>
                    <Typography>{pokemonsDetail?.generation}</Typography>                
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="subtitle2" style={{ fontSize : 16 }}>Growth Rate</Typography>
                    <Typography>{pokemonsDetail?.growth_rate}</Typography>                
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="subtitle2" style={{ fontSize : 16 }}>Weight</Typography>
                    <Typography>{pokemonsDetail?.weight}</Typography>              
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="subtitle2" style={{ fontSize : 16 }}>Height</Typography>
                    <Typography>{pokemonsDetail?.height}</Typography>              
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="subtitle2" style={{ fontSize : 16 }}>Color</Typography>
                    <Typography>{pokemonsDetail?.color}</Typography>              
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="subtitle2" style={{ fontSize : 16 }}>Is Baby</Typography>             
                    <Typography>{pokemonsDetail?.is_baby ? 'Yes' : 'No'}</Typography>              
                  </Grid>        
                </Grid>
                <Divider/>
                <Grid container spacing={1} style={{ padding : 20}}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2" style={{ fontSize : 16 }}>Locations</Typography>
                    {
                      pokemonsDetail?.locations && pokemonsDetail?.locations.length > 0 ? pokemonsDetail?.locations?.map((dt,index) => {
                        return <Chip key={index} label={dt.name} style={{ margin : 10}}/>
                      }) : <Typography style={{ margin : 10}}>Not Specified</Typography>         
                    }              
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2" style={{ fontSize : 16 }}>Abilities</Typography>
                    {
                      pokemonsDetail?.abilities && pokemonsDetail?.abilities.length > 0 ? pokemonsDetail?.abilities.map((dt,index) => {
                        return <Chip key={index} label={dt.name} style={{ margin : 10}}/>
                      }) : <Typography style={{ margin : 10}}>Not Specified</Typography>
                    }              
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2" style={{ fontSize : 16 }}>Types</Typography>
                    {
                      pokemonsDetail?.types && pokemonsDetail?.types.length > 0 ? pokemonsDetail?.types.map((dt,index) => {
                        return <Chip key={index} label={dt.name} style={{ margin : 10}}/>
                      }) : <Typography style={{ margin : 10}}>Not Specified</Typography>
                    }              
                  </Grid>
                </Grid>
              </Paper>          
            </Grid>        
          </Grid>
          <Grid container spacing={2}>        
            <Grid item xs={12}>
              <Paper elevation={3} style={{padding : 20 , maxHeight: 340, overflow: 'auto' }}>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" style={{ fontSize : 16 }}>Description</Typography>
                </Grid>
                <Divider></Divider>
                <List className={classes.list_root}>
                  { pokemonsDetail?.pokedex_entries.map((dt,index) => {
                    return(
                        <ListItem key={index}>
                          <ListItemText primary={`${ dt.description}`} />
                        </ListItem>
                    )             
                  })
                }
                </List>
              </Paper>
            </Grid>
          </Grid>
        </>
      }         
    </div>    
  );
} 