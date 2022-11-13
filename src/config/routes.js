import Dashboard from '../pages/dashboard';
import PokemonsDetail from '../pages/pokemon_detail';
import FavoritePokemons from '../pages/favourites_pokemons';

const routes = [
  {
    component: Dashboard,
    title: 'Dashboard',
    path: '/',
    exact: true,
    isProtected: true
  },
  {
    component: PokemonsDetail,
    title: 'Pokemons Detail',
    path: '/pokemons-detail',
    exact: true,
    isProtected: true
  },
  {
    component : FavoritePokemons,
    title: 'Favorite Pokemons',
    path: '/my-favourites',
    exact: true,
    isProtected: true
  }
];
export default routes;
