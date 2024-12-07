import React from 'react';
import "./global.css"
function Textarea({ value, onChange }) {
  return (
    <div className="Textarea1  ">
      <textarea className='Textarea2'
        value={value}
        onChange={onChange}
        placeholder="Type your text here..."
       
      />
    </div>
  );
}

export default Textarea;
