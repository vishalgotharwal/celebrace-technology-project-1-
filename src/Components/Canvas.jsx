import React, { useRef, useEffect, useState } from 'react';

function Canvas({ text, fontStyle, fontSize, textPosition, onTextPositionChange }) {
  const canvasRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const drawText = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.font = `${fontSize}px ${fontStyle}`;
    ctx.fillText(text, textPosition.x, textPosition.y);
  };

  useEffect(() => {
    drawText();
  }, [text, fontStyle, fontSize, textPosition]);

  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Check if mouse is over the text
    const ctx = canvas.getContext('2d');
    const textWidth = ctx.measureText(text).width;
    const textHeight = fontSize; 
    if (
      mouseX >= textPosition.x &&
      mouseX <= textPosition.x + textWidth &&
      mouseY >= textPosition.y - textHeight &&
      mouseY <= textPosition.y
    ) {
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

   
      onTextPositionChange({ x: mouseX, y: mouseY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <canvas
      ref={canvasRef}
      width={900}
      height={285}
      style={{ border: '1px solid black', cursor: isDragging ? 'grabbing' : 'grab' }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    ></canvas>
  );
}

export default Canvas;
