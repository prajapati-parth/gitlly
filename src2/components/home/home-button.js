import React from 'react';

import './home-button.scss';

const HomeButton = ({icon, label, onSelect}) => {
  return (
    <div className='home-button-container' onClick={onSelect}>
      {icon}
      <span className='home-button-label'>{label}</span>
    </div>
  )
}

export default HomeButton;