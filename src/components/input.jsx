import React from "react";

export const Input = ({ label, value, setValue, type, placeholder }) => {
  return (
    <div className="inputBox">
      <div className="inputLabel">{label}</div>
      {type === "textArea" ? (
        <textarea
          rows="10"
          cols="30"
          className="inputMessage textArea"
          placeholder={placeholder}
        />
      ) : (
        <input className="inputMessage normalInput" placeholder={placeholder} />
      )}
    </div>
  );
};
