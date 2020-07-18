import React from 'react';
// import ReactDOM from 'react-dom';

import '../scss/form.scss';

class Form extends React.Component {

  render() {
    return (
      <section>
        <form id="form" onSubmit={this.props.onSubmit}>
          <label>Enter your URL:</label>
          <input type="text" id="url" value={this.props.value} onChange={this.props.handleChange}></input>
          <button>{this.props.prompt}</button>
          <br></br>
          <section id="methods">
            <ul>
              <li id="get" onClick={() => this.props.handleMethod('Get')}>GET</li>
              <li onClick={() => this.props.handleMethod('Post')}>POST</li>
              <li onClick={() => this.props.handleMethod('Put')}>PUT</li>
              <li onClick={() => this.props.handleMethod('Delete')}>DELETE</li>
            </ul>
          </section>
          <section>
            <p id="update">{this.props.response} {this.props.url}</p>
          </section>
        </form>
        <br></br>
      </section>
    );
  }


}

export default Form;
