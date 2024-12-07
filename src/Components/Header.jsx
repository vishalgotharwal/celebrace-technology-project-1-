import React from 'react';

function Header({ onFontStyleChange, onIncreaseFontSize, onDecreaseFontSize, onUndo, onRedo }) {
  return (
    <>
      <header style={{ textAlign: 'center', padding: '10px', background: '#c3b1b1' }}>
        <div>
          <img 
            src="https://celebrare.in/assets/img/celebrare-logo.webp"
            alt="Celebrare Logo"
            style={{ width: '150px', height: 'auto' }}
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <button className="button" onClick={onUndo}>
            <img src="https://cdn-icons-png.flaticon.com/128/3894/3894646.png" alt="" />
          </button>
          <button className="button" onClick={onRedo}>
            <img src="https://cdn-icons-png.flaticon.com/128/3894/3894640.png" alt="" />
          </button>
        </div>
      </header>

      <div className="Header" style={{ textAlign: 'center', marginTop: '10px' }}>
       
        <select onChange={(e) => onFontStyleChange(e.target.value)} style={{ padding: '5px 10px', fontSize: '16px' }}>
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Tahoma">Tahoma</option>
          <option value="Georgia">Georgia</option>
          <option value="Courier New">Courier New</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Roboto">Roboto</option>
        </select>

  
        <button onClick={onIncreaseFontSize} style={{ marginLeft: '10px' }}>
          <img src="https://cdn-icons-png.flaticon.com/128/748/748113.png" alt="" />
        </button>
        <button onClick={onDecreaseFontSize} style={{ marginLeft: '5px' }}>
          <img src="https://cdn-icons-png.flaticon.com/128/4096/4096251.png" alt="" />
        </button>
      </div>
    </>
  );
}

export default Header;
