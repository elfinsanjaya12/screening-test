import React from "react";
import "./style.css";

const Checkbox = ({ isOn, handleToggle, data }) => {
  return (
    <>
      <input
        className="react-switch-checkbox2"
        id={`react-switch-new2`}
        type="checkbox"
        data-id={data}
        checked={isOn}
        onChange={handleToggle}
      />
      <label className="react-switch-label2" htmlFor={`react-switch-new2`}>
        <span className={`react-switch-button2`} />
      </label>
    </>
  );
};

export default Checkbox;
