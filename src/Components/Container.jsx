import React, { useState } from 'react';
import Header from './Header';
import Textarea from './Textarea';
import Footer from './Footer';
import Canvas from './Canvas';

function Container() {
  const [text, setText] = useState('');
  const [fontStyle, setFontStyle] = useState('Arial');
  const [fontSize, setFontSize] = useState(20);
  const [textPosition, setTextPosition] = useState({ x: 10, y: 50 });
  const [history, setHistory] = useState([]);
  const [currentStep, setCurrentStep] = useState(-1);

  const saveToHistory = () => {
    const newState = { text, fontStyle, fontSize, textPosition };
    const updatedHistory = history.slice(0, currentStep + 1);
    setHistory([...updatedHistory, newState]);
    setCurrentStep(updatedHistory.length);
  };

  const handleFontStyleChange = (newFontStyle) => {
    setFontStyle(newFontStyle);
    saveToHistory();
  };

  const changeFontSize = (size) => {
    setFontSize(size);
    saveToHistory();
  };

  const moveText = (dx, dy) => {
    setTextPosition({
      x: textPosition.x + dx,
      y: textPosition.y + dy,
    });
    saveToHistory();
  };

  const undo = () => {
    if (currentStep > 0) {
      const prevState = history[currentStep - 1];
      setText(prevState.text);
      setFontStyle(prevState.fontStyle);
      setFontSize(prevState.fontSize);
      setTextPosition(prevState.textPosition);
      setCurrentStep(currentStep - 1);
    }
  };

  const redo = () => {
    if (currentStep < history.length - 1) {
      const nextState = history[currentStep + 1];
      setText(nextState.text);
      setFontStyle(nextState.fontStyle);
      setFontSize(nextState.fontSize);
      setTextPosition(nextState.textPosition);
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="container">
      <Header 
        onFontStyleChange={handleFontStyleChange} 
        onIncreaseFontSize={() => changeFontSize(fontSize + 2)} 
        onDecreaseFontSize={() => changeFontSize(fontSize - 2)} 
        onUndo={undo} 
        onRedo={redo} 
      />
      <Textarea value={text} onChange={(e) => setText(e.target.value)} />
      <Canvas
  text={text}
  fontStyle={fontStyle}
  fontSize={fontSize}
  textPosition={textPosition}
  onTextPositionChange={(newPosition) => {
    setTextPosition(newPosition);
    saveToHistory();
  }}
/>

     
    </div>
  );
}

export default Container;
