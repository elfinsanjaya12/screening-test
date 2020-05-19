import React from "react";
import "./style.css";

const Checkbox = () => {
  return (
    <>
      <input className="react-switch-checkbox2" id={`react-switch-new2`} type="checkbox" />
      <label className="react-switch-label2" htmlFor={`react-switch-new2`}>
        <span className={`react-switch-button2`} />
      </label>
    
    </>
  );
};

export default Checkbox;
