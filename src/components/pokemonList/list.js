import React from 'react';


const List = (props) => {

  if (!Object.keys(props.response).length) {

    return (
      <p>Give me Pokemon!</p>
    );
  } else {

    return (
      <div>
        <ul>
          {Object.keys(props.response).map((response, idx) => {
            return (
              <li key={idx}>
                <a href={props.response[response]}>{response}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default List;