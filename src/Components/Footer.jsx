import React from 'react';

function Footer({ onMoveRight, onMoveLeft, onMoveUp, onMoveDown }) {
  return (

    <div style={{ textAlign: 'center' } } className='Header'>
      
      <button onClick={onMoveRight}>Move Right</button>
      <button onClick={onMoveLeft}>Move Left</button>
      <button onClick={onMoveUp}>Move Up</button>
      <button onClick={onMoveDown}>Move Down</button>
    </div>
  );
}

export default Footer;
