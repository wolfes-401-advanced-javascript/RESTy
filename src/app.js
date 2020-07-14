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
    };
    this.handleStateWords = this.handleStateWords.bind(this);
  }

  handleStateWords(words) {
    this.setState({ words });
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <Header
          words={this.state.words}
          handleState={this.handleStateWords}
        />
        <h2>Hello World</h2>
        <Form></Form>
        <Footer/>
      </div>
    );
  }
}




export default App;