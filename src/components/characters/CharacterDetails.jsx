import React from 'react';
// import PropTypes from 'prop-types';

// THIS IS WHAT DISPLAYS TO PAGE

const CharacterDetails = ({ name, image }) => (
  <>
    <img src={image} alt={name} />
    <p>{name}</p>
    <p>{image}</p>
  </>
);
// CharacterDetails.propTypes = {
//   name: PropTypes.string.isRequired,
//   img: PropTypes.string.isRequired,
// };

export default CharacterDetails;
