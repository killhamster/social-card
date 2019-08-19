import React from 'react';
import Social from './Social';
import Body from './Body';

function Card(props) {
    return (
      <div className="card">
        <div className="body">
          <Body />
        </div>
        <div className="social">
          <Social />
        </div>
      </div>
    );
}

export default Card;
