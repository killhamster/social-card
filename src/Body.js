import React from 'react';
import usericon from './kh-icon.jpg';
import card from './cardData';

function Body(props) {
  return (
    <div className="card-body">
      <div className="name-line">
        <img className="usericon"
            src={usericon}
            alt="Something went wrong." />
        <h1 className="card-name">{card.name}</h1>
      </div>
      <h2 className="card-headline">{card.headline}</h2>
      <h3 className="card-subhead">{card.subhead}</h3>
      <div className="butt-cont">
      <a href={card.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{card.urlDisplayName}</a>
      </div>
    </div>
  )
}

export default Body;
