import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling

const DEFAULT_ANGLES = [0, 45, 60, 90, 180];

const AngleSelector = () => {
  const [selectedAngle, setSelectedAngle] = useState(0);

  const handleInputChange = (event) => {
    const inputValue = Math.max(0, Math.min(360, Number(event.target.value) || 0));
    setSelectedAngle(inputValue);
  };

  const handleSliderChange = (event) => {
    setSelectedAngle(Number(event.target.value));
  };

  const handleRadioChange = (event) => {
    setSelectedAngle(Number(event.target.value));
  };

  return (
    <div className="angle-selector">
      <div className="angle-selector-content">
        
        {/* Input for entering the angle */}
        <div className="input-container">
          <label htmlFor="angle-input">Set Angle (0° to 360°):</label>
          <input
            id="angle-input"
            type="number"
            value={selectedAngle}
            onChange={handleInputChange}
            min="0"
            max="360"
          />
        </div>

        {/* Slider for selecting the angle */}
        <label htmlFor="angle-input">Adjust Angle:</label>

        <input
          type="range"
          min="0"
          max="360"
          value={selectedAngle}
          onChange={handleSliderChange}
          className="slider"
        />
        <label htmlFor="angle-input">Select a Preset Angle:</label>

        {/* Radio buttons for common angles */}
        <div className="radio-buttons">
          {DEFAULT_ANGLES.map((angleValue) => (
            <label key={angleValue} className="radio-button">
              <input
                type="radio"
                name="angle-radio"
                value={angleValue}
                checked={selectedAngle === angleValue}
                onChange={handleRadioChange}
              />
              {angleValue}°
            </label>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default AngleSelector;
