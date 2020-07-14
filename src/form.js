import React from 'react';
import ReactDOM from 'react-dom';

import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <form>
          <label>Enter your URL:</label>
          <input type="text" id="url" />
          <button type="submit">Go</button>
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
            <p>{this.props.method}</p>
          </section>
        </form>
        <br></br>
      </section>
    );
  }


}

ReactDOM.render(<Form />, document.getElementById('root'));
export default Form;
