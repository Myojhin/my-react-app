import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import PokemonCard from './components/pokemonCard';

const pokemonList = [
  { name: "Bulbasaur", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
  { name: "Charmander", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" },
  { name: "Squirtle", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" },
  { name: "Pikachu", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" },
  { name: "Mew", },
];

const App = () => {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar
        pokemonList={pokemonList}
        setPokemonIndex={setPokemonIndex}
        currentPokemon={pokemonList[pokemonIndex].name}
      />
    </div>
  );
};

export default App;

