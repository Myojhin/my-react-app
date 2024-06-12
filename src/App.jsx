
import './App.css'
import React from 'react';
import PokemonCard from './components/PokemonCard.jsx';


const pokemonList = [
  { name: 'Bulbasaur', imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' },
  { name: 'Mew', imgSrc: undefined },
];


const App = () => {
  return (

    
    <div>
      <PokemonCard pokemon={pokemonList[0]} />
    </div>
  );
};

export default App;

