import React from 'react';

import './app.scss';

import Header from './header.js';
import Footer from './footer.js';
import Form from './form.js';


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

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({url: event.target.value});
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