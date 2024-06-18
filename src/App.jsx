// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import PokemonCard from './components/PokemonCard';

const pokemonList = [
  { name: "Bulbasaur", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
  { name: "Charmander", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" },
  { name: "Squirtle", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" },
  { name: "Pikachu", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" },
  { name: "Mew", },
];

const App = () => {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePrevious = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const handleNext = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        canGoPrevious={pokemonIndex > 0}
        canGoNext={pokemonIndex < pokemonList.length - 1}
      />
    </div>
  );
};

export default App;
