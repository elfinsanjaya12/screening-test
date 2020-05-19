import React from "react";
import IconStore from "../../assets/images/icons/store.png";
import "./style.css";

function CardTemplate() {
  return (
    <div className="row">
      <div className="col-6">
        <div className="boxs">
          <div className="bg-header1">
            <div className="circles"></div>
          </div>

          <div className="content-btn text-center">
            <div className="btn1">
              <button className="btn-home">
                <img src={IconStore} alt="" />
              </button>
            </div>

            <div className="btn2">
              <button className="btn-link">Your link</button>
            </div>
          </div>
        </div>

        <div className="text-f">
          <span>Basic Templete</span>
          <label className="switch">
            <span className="tombol-active">active</span>
            <input type="checkbox"  />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <div className="col-6">
        <div className="boxs">
          <div className="bg-header2">
            <div className="circles"></div>
          </div>

          <div className="content-btn text-center">
            <div className="btn1">
              <button className="btn-home-left">
                <img src={IconStore} alt="" />
              </button>
            </div>

            <div className="btn2">
              <button className="btn-link">Your link</button>
            </div>
          </div>
        </div>
        <div className="text-f">
          <span>Basic Templete</span>
          <label className="switch">
            <span className="tombol-active">active</span>
            <input type="checkbox"  />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default CardTemplate;
