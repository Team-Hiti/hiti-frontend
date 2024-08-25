import React from "react";

const Switch = ({ isOn, handleToggle }) => {
  return (
    <div className="switch-container">
      <label className="switch">
        <input
          style={{
            background: "none",
            border: "none",
            textDecoration: "underline",
            cursor: "pointer",
          }}
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
