import React from 'react';
// import PropTypes from 'prop-types';
import CharacterDetails from '../characters/CharacterDetails';

const CharacterList = ({ characters }) => (
  <ul aria-label="characters">
    {characters.map((character) => (
      // Unique Key
      <li key={character.char_id}>
        <CharacterDetails
          id={character.char_id}
          name={character.name}
          image={character.img}
        />
      </li>
    ))}
  </ul>
);

// CharacterList.propTypes = {
//   characters: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       image: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };
export default CharacterList;
