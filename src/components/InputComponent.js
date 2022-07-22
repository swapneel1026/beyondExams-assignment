import React from "react";
import "../components/InputComponent.css";

const InputComponent = ({ is, st }) => {
  return (
    <div className="inputComponent">
      <textarea
        type="text"
        rows={4}
        cols={40}
        onChange={(e) => st(e.target.value)}
      />
    </div>
  );
};

export default InputComponent;
