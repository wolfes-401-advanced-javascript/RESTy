import React from 'react';

import './scss/app.scss';

import Header from './components/header.js';
import Footer from './components/footer.js';
import Form from './components/form.js';
import List from './components/pokemonList/list.js'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      words: 'Default state',
      url: 'Input url',
      method: '',
      response: {},
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
    let data = await fetch(this.state.url);
    let json = await data.json();
    console.log(json);
    
    this.setState({ response: json });
     
    }

  handleMethod(method) {
    console.log(method);
    this.setState({method});
  }

  render() {
    
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
          prompt={'Go!'}
        />
         <>
        <List  
          response={this.state.response}
        />
        </>
        <Footer />
      </div>
    );
  }
}




export default App;