import React from 'react';

import Form from '../form.js';
import List from './list.js';

class PokemonList extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      count: 0,
      results: [],
    };
  }

  handleForm = (count, results) => {
    this.setState({ count, results });
  }

  render() {
    return (
      <>
      <Form prompt='Click here for pokemon...' handler={this.handleform} />
      <List pokemon={this.state.results} />
      </>
    )
  }
}

export default PokemonList;