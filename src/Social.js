import React from 'react';
import { twitterIcon, facebookIcon, soundcloudIcon, githubIcon, bandcampIcon } from './Icons.js';
import card from './cardData';

function Social(props) {
  return (
    <div className="card-social">
      <h2 className="social-head">Social Media</h2>
      <div className="social-links">
      <div><a href={card.githubUrl} target="_blank" rel="noopener noreferrer">{githubIcon}</a></div>
      <div><a href={card.twitterUrl} target="_blank" rel="noopener noreferrer">{twitterIcon}</a></div>
      <div><a href={card.soundcloudUrl} target="_blank" rel="noopener noreferrer">{soundcloudIcon}</a></div>
      <div><a href={card.bandcampUrl} target="_blank" rel="noopener noreferrer">{bandcampIcon}</a></div>
      <div><a href={card.facebookUrl} target="_blank" rel="noopener noreferrer">{facebookIcon}</a></div>
      </div>
    </div>
  )
}

export default Social;
