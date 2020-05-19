import React from "react";
import IconStore from "../../assets/images/icons/store.png";
import "./style.css";

function Card() {
  return (
    <>
      <h4>Link to display</h4>
      <hr className="hr-line" />
      <div className="cards">
        <div className="d-flex justify-content-around">
          <span className="w-6">
            {" "}
            <img src={IconStore} alt="" /> Store link
          </span>
          <span>
            Active store link
          </span>
        </div>
        <div className="d-flex mt-3">
          <div className="img-titik">
            <span className="material-icons">drag_indicator</span>
          </div>
          <div className="w-10">
            <div className="form-group row ml-12">
              <span className="mw w-6">Link title</span>
              <input className="input-card w-6" type="text" placeholder="Start shopping!" />
            </div>
            <div className="form-group row ml-12 mt-10">
              <span className="mw w-6">Link URL</span>
              <input className="input-card colorr" type="text" placeholder="demo.link/dummylink/store" />
            </div>
          </div>
        </div>
      </div>
      </>
  );
}

export default Card;
