import React from 'react';

const List = (props) => {

  if (!Object.keys(props.pokemon).length) {

    return (
      <p>Give me Pokemon!</p>
    );
  } else {

    return (
      <div>
        <ul>
          {Object.keys(props.pokemon).map((pokemon, idx) => {
            return (
              <li key={idx}>
                <a href={props.pokemon[pokemon]}>{pokemon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default List;