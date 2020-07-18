import React from 'react';
import prettyPrintJSON from 'pretty-print-json';


const List = (props) => {
  console.log(props);

  let pretty = prettyPrintJSON.toHtml(props.response);
  console.log(pretty);

  if (!Object.keys(props.response).length) {

    return (
      <p>Give me Pokemon!</p>
    );
  } else {

    return (
      <div>
        <pre dangerouslySetInnerHTML={{ __html: pretty }} />
        
      </div>
    );
  }
};

export default List;