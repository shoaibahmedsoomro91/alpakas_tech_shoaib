import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/client';
import VirtualizeGrid from '../../components/virtualizeGrids';
import ThemeCircularProgress from '../../components/loading';
import Errors from '../../components/dialog/errors';
import Paper from '@material-ui/core/Paper';
import Typograhpy from '@material-ui/core/Typography';
import { GET_ALL_POKEMONS, GET_ALL_TYPES } from '../../queries';
import Dropdown from '../../components/inputs/dropdown';
import TextField from '../../components/inputs/text';
export default function Dashboard() {

  const { loading, error, data } = useQuery(GET_ALL_POKEMONS);
  const { data : GET_ALL_TYPES_POKEMONS } = useQuery(GET_ALL_TYPES);
  const [ showError, setShowError ] = useState(false);
  const [ pokemons, setPokemons ] = useState([])
  const [ menuItemsFilter, setMenuItemsFilter ] = React.useState([]);
  const menuItemsSort = [{ name : 'name'}];
    
  const handleClose = () => {
    setShowError(false); 
  }
  const handleActions = ( type, value) => { 
    const {allPokemon} = data; 
    if(type === 'find'){
      try {
        let foundPokemons = [];
        if(value === ''){
          foundPokemons = allPokemon;        
        }else{
          foundPokemons = allPokemon.filter((element) => element.name === value );  
        }
        setPokemons(foundPokemons)
      } catch (error) {
        console.log('error',error)
      }            
    }else if(type === 'sort'){
      try {
        const sortedPokemons = pokemons.slice().sort((a,b) => {                    
          return (a[value] > b[value]) ? 1 : ((b[value] > a[value]) ? -1 : 0);
        });
        setPokemons(sortedPokemons)
      } catch (error) {
        console.log('error',error)
      }
    }else if(type === 'filter'){
      try {        
        const filteredPokemons = pokemons.filter((element) => element.types.some((subElement) => subElement.name === value ));        
        setPokemons(filteredPokemons)
      } catch (error) {
        console.log('error',error)
      }            
    }
  }
  React.useEffect( () => {
    if(data){
      setPokemons(data.allPokemon)
    }
  },[data]);

  React.useEffect( () => {
    if(GET_ALL_TYPES_POKEMONS && GET_ALL_TYPES_POKEMONS.allTypes){
      setMenuItemsFilter(GET_ALL_TYPES_POKEMONS.allTypes)
    }
  },[GET_ALL_TYPES_POKEMONS])

  return (
    <Grid container spacing={2}>      
      {
        error && showError && <Errors title='Error' content='Something Went wrong...' open={showError} closeDialog={handleClose}></Errors>
      }
      {
        loading && <ThemeCircularProgress></ThemeCircularProgress>
      }
      <Grid item xs={12}>
        <Paper elevation={3}>          
          <Grid container spacing={3} justifyContent='center'>
            <Grid item xs={3}>
              <TextField label = 'Search Pokemon' actionType='find' handleOnChange={(type,value)=>{handleActions(type,value)}}></TextField>
            </Grid>
            <Grid item xs={3}>
              <Dropdown label = 'Sort Pokemon'  actionType='sort' handleOnChange={(type,value)=>{handleActions(type,value)}} items={menuItemsSort}></Dropdown>
            </Grid>
            <Grid item xs={3}>
              <Dropdown label = 'Filter Pokemon' actionType='filter' handleOnChange={(type,value)=>{handleActions(type,value)}} items={menuItemsFilter}></Dropdown>
            </Grid>
          </Grid>
        </Paper>        
      </Grid>
      <Grid item xs={12} id='search_pokemons'>
        <Paper elevation={3}>          
          {
            pokemons.length > 0 && <VirtualizeGrid listItems={pokemons}></VirtualizeGrid>
          }
          { pokemons.length === 0 && 
            <Grid container justifyContent='center'>
              <Typograhpy variant="h6">No Records Found...</Typograhpy>
            </Grid>
          }
        </Paper>        
      </Grid>            
    </Grid>
  );
} 