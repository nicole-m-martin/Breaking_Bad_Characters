import React, { Component } from 'react';
import CharacterList from '../components/characters/CharacterList';

export default class BreakingBadContainer extends Component {
  state = {
    loading: true,
    characters: [],
  };

  render() {
    const { loading } = this.state;

    if (loading) return <h1>Loading....</h1>;

    return <div></div>;
  }
}
