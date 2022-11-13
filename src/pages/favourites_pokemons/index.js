import React from 'react';
import Grid from '@material-ui/core/Grid';
import ThemeCircularProgress from '../../components/loading';
import Paper from '@material-ui/core/Paper';
import { loadFromLocalStorage } from '../../utils/localStorage';
import Typograhpy from '@material-ui/core/Typography';

import VirtualizeGrid from '../../components/virtualizeGrids';
export default function FavoritePokemons() {  

  const [ favPokemons, setFavPokemons ] = React.useState([]);
  const [ loading, setLoading ] = React.useState(true)
  React.useEffect( () => {
    const pokemons = loadFromLocalStorage('favourite_pokemons');
    if(pokemons && pokemons.length > 0){      
      setFavPokemons(pokemons);
    };
    setLoading(false)
  },[])

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={3}>
          {
            loading && <ThemeCircularProgress></ThemeCircularProgress>
          }
          {
            favPokemons.length > 0 && <VirtualizeGrid listItems={favPokemons}></VirtualizeGrid>
          }
          { favPokemons.length === 0 && 
            <Grid container justifyContent='center'>
              <Typograhpy variant="h6">No Records Found...</Typograhpy>
            </Grid>
          }
        </Paper>        
      </Grid>            
    </Grid>
  );
} 