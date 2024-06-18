// src/components/NavBar.jsx
import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ handlePrevious, handleNext, canGoPrevious, canGoNext }) => {
  return (
    <div>
      <button onClick={handlePrevious} disabled={!canGoPrevious}>Précédent</button>
      <button onClick={handleNext} disabled={!canGoNext}>Suivant</button>
    </div>
  );
};

NavBar.propTypes = {
  handlePrevious: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  canGoPrevious: PropTypes.bool.isRequired,
  canGoNext: PropTypes.bool.isRequired,
};

export default NavBar;
