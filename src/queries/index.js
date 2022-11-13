import { gql } from '@apollo/client';

export const GET_POKEMON = gql`
  query pokemon($id: Int!) {
    pokemon(id: $id) {
      id,
      name,
      sprites { front_default },    
      height,
      weight,
      color,
      shape,
      growth_rate,
      is_baby,
      evolution_trigger,
      generation,
      abilities {
        name
      },
      locations {
        name
      },
      types {
        name
      },
      pokedex_entries {
        description
      }
    }
  }
`;
export const GET_ALL_POKEMONS = gql`
  query {
    allPokemon{
      id,
      name,
      sprites {      
        front_default      
      }
      types {
        id,
        name
      }
    }
  }`
export const GET_ALL_TYPES = gql`
  query {
    allTypes {    
      id,
      name
    }
  }`
  