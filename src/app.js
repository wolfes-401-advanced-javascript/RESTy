import React from 'react';

import './scss/app.scss';

import Header from './components/header.js';
import Footer from './components/footer.js';
import Form from './components/form.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      words: 'Default state',
      url: 'Input url',
      method: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMethod = this.handleMethod.bind(this);
    this.handleStateWords = this.handleStateWords.bind(this);
  }

  handleStateWords(event) {
    let url = event.target.value;
    console.log('url', url);
    this.setState({ url });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let data = await fetch('https://pokeapi.co/api/v2/pokemon');
    let json = await data.json
    
    let count = json.count;

    let pokemon = json.results.reduce((list, pokemon) => {
      list[pokemon.name] = pokemon.url;
      return list;
    }, {});

    this.props.handler(count, pokemon);
  }

  handleMethod(method) {
    console.log(method);
    this.setState({method});
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <Header
          words={this.state.words}
          
        />
        
        <Form
          onSubmit={this.handleSubmit}
          handleMethod={this.handleMethod}
          method={this.state.method}
          handleChange={this.handleStateWords}
          url={this.state.url}
        />
        <Footer/>
      </div>
    );
  }
}




export default App;