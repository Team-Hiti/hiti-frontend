import React, { useEffect, useRef } from "react";
import "./SlidingDialog.css";

function SlidingDialog({ isOpen, onClose, data }) {
  const dialogRef = useRef();

  const handleClickOutside = (event) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    console.log(data, "data");
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dialogRef} className={`dialog ${isOpen ? "open" : ""}`}>
      <h2>Hiti Name: {data.name}</h2>

      <h4>Current Status: {data.existence}</h4>
      <p>Hiti Description</p>
      <p>Content Ideas:</p>
      <ul>
        <li>images</li>
        <li>current situation</li>
        <li>google map link</li>
        <li>other stuffs</li>
      </ul>
    </div>
  );
}

export default SlidingDialog;
