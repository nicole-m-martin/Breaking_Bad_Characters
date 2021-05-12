import React from 'react';
import PropTypes from 'prop-types';

// THIS IS WHAT DISPLAYS TO PAGE

const CharacterDetails = ({ name, img }) => (
  <>
    <img style={{ width: '200px' }} src={img} alt="picture of char" />
    <p>{name}</p>
  </>
);
CharacterDetails.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default CharacterDetails;
