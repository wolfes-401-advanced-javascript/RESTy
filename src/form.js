import React from 'react';
import ReactDOM from 'react-dom';

import './form.scss';

class Form extends React.Component {
  render() {
    return (
      <form>
        <p>Enter your URL:</p>
        <input type="text"/>
        <button type="submit">Go</button>
      </form>
      
    );
  }


}

ReactDOM.render(<Form/>, document.getElementById('root'));
export default Form;
