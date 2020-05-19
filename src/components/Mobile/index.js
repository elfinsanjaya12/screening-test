import React from "react";
import "./style.css";

function Mobile({ data }) {
  return (
    <div id="borderimage" className="container-hp">
      <div className="header-hp activee">
        <div className="circles"></div>
        <h6>Dummy Store</h6>
        <p>Dummy Store tagline</p>
      </div>

      <div className="content-hp">
        <p className="text-hp">
          Dummy store description , pelase ignore, only for tes use! <br />
          Go check out my store and my links!
        </p>
        <div className="d-flex justify-content-center btn-hp ">
          <button className="cr-black">
            {/* <img src="img/home3.png" alt="" />  */}
            <span className="text-hp-one">Start shopping!</span>
          </button>
        </div>
        {data.map((pagelink, index1) => {
          if (pagelink.length === 0) return null;
          return (
            <div className="d-flex justify-content-center btn-hp" key={index1}>
              <button>
                <img src={pagelink.icon} alt="" className="img-fluid circle" />
                <span className="text-hp-two">{pagelink.title}</span>
              </button>
            </div>
          );
        })}
      </div>
      <hr className="hr-hp" />
    </div>
  );
}

export default Mobile;
