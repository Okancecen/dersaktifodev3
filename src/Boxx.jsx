import React, { useState } from 'react';

function Boxx() {
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(100);

  const handleCreateDiv = () => {
    const newHeight = parseInt(document.getElementById('heightInput').value);
    const newWidth = parseInt(document.getElementById('widthInput').value);
    if (!isNaN(newHeight) && !isNaN(newWidth)) {
      setHeight(newHeight);
      setWidth(newWidth);
    }
  };

  return (
    <div className="App">
      <input
        id="heightInput"
        type="text"
        placeholder="Height"
      />
      <input
        id="widthInput"
        type="text"
        placeholder="Width"
      />
      <button onClick={handleCreateDiv}>Create Div</button>

      <div
        style={{
          height: `${height}px`,
          width: `${width}px`,
          backgroundColor: 'lightblue',
          marginTop: '20px',
        }}
      >
        Div boyutu burasıdır.
      </div>
    </div>
  );
}

export default Boxx;
