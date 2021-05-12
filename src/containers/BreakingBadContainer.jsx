import React, { Component } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { findCharacters } from '../services/breakingBadAPI';
export default class BreakingBadContainer extends Component {
  state = {
    loading: true,
    characters: [],
  };

  async componentDidMount() {
    const characters = await findCharacters();
    this.setState({
      characters,
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;

    if (loading) return <h1>Loading....</h1>;

    return <CharacterList characters={characters} />;
  }
}
