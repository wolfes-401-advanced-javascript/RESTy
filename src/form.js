import React from 'react';
import ReactDOM from 'react-dom';

import './form.scss';

class Form extends React.Component {
 
  render() {
    return (
      <section>
        <form id="form" onSubmit={this.props.handleSubmit}>
          <label>Enter your URL:</label>
          <input type="text" id="url" value={this.props.value} onChange={this.props.handleChange}></input>
          <button>Go</button>
          <br></br>
          <section id="methods">
            <ul>
              <li onClick={() => this.props.handleMethod('Get')}>GET</li>
              <li onClick={() => this.props.handleMethod('Post')}>POST</li>
              <li onClick={() => this.props.handleMethod('Put')}>PUT</li>
              <li onClick={() => this.props.handleMethod('Delete')}>DELETE</li>
            </ul>
          </section>
          <section>
            <p id="update">{this.props.method} {this.props.url}</p>
          </section>
        </form>
        <br></br>
      </section>
    );
  }


}

ReactDOM.render(<Form />, document.getElementById('root'));
export default Form;
