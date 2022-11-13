import { render, screen } from '@testing-library/react';
import MediaCard from '../index';

const fakePokemon = {
  "id": 1,
  "name": "bulbasaur",
  "sprites": {
    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  "types": [
    {
      "id": 12,
      "name": "Grass"
    },
    {
      "id": 4,
      "name": "Poison"
    }
  ]
};

describe("Test the Pokemon cards Component", () => {
  test('renders media cards', () => {    
    render(<MediaCard index={0} content = {fakePokemon}/>);
    const media_card = screen.getByRole('media-card');
    expect(media_card).toBeInTheDocument();
  });
  test('media cards have image', () => {    
    render(<MediaCard index={0} content = {fakePokemon}/>);
    const media_image = screen.getByRole('media-image');
    expect(media_image).toBeInTheDocument();
  });
  test('media cards have heading',  () => {    
    render(<MediaCard index={0} content = {fakePokemon}/>);
    const media_heading = screen.getByRole('card-heading');
    expect(media_heading).toBeInTheDocument();
  });
  test('media cards footer text',  () => {    
    render(<MediaCard index={0} content = {fakePokemon}/>);
    const media_footer_text = screen.getAllByRole('card-footer-text');
    expect(media_footer_text.length >= 0).toBeTruthy();
  });

  
})