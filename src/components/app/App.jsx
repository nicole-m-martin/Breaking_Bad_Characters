import React, { Component } from 'react';
import CharacterList from '../characters/CharacterList';
import CharacterDetails from '../characters/CharacterDetails';
import HomePage from '';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={CharacterList} />
            <Route path="/:id" exact component={CharacterDetails} />
          </Switch>
        </Router>
      </div>
    );
  }
}
