import PropTypes from "prop-types"
import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <figure>
      {pokemon.imgSrc ? (
        <img className="pokemon-image" src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
};

PokemonCard.propTypes = {

  pokemon: PropTypes.shape({
   name: PropTypes.string.isRequired,
   imgSrc: PropTypes.string,

  }).isRequired,
};

export default PokemonCard;

