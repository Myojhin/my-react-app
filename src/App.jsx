import "./App.css";

import React, { useState } from "react";
import PokemonCard from "./components/PokemonCard.jsx";


const pokemonList = [

  { name: "Bulbasaur", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",},
  { name: "charmander", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" },
  { name: "squirtle", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" },
  { name: "pikachu", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" },
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
      {pokemonIndex > 0 && <button onClick={handlePrevious}>Précédent</button>}
      {pokemonIndex < pokemonList.length - 1 && <button onClick={handleNext}>Suivant</button>}
    </div>
    
  );
};

export default App;
