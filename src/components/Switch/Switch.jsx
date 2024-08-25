import React from "react";

const Switch = ({ isOn, handleToggle }) => {
  return (
    <div className="switch-container">
      <label className="switch">
        <input
          type="button"
          checked={isOn}
          onClick={handleToggle}
          value="Close"
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Switch;
