import React from 'react';
import PropTypes from 'prop-types';

// THIS IS WHAT DISPLAYS TO PAGE

const CharacterDetails = ({ name, img }) => (
  <>
    <img src={img} alt={name} />
    <p>{name}</p>
  </>
);
CharacterDetails.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default CharacterDetails;
