import React from "react";
import Brow from "../../assets/images/brow-envy.png";
import IconChecklist from "../../assets/images/icons/checklist.png";
import IconWarning from "../../assets/images/icons/warning.png";

function Jumbotron(props) {
  return (
    <div className="header-welcome">
      <div className="card-header d-flex justify-content-center">
        <span>www.demo.com/dummy_link</span>
      </div>
      <div className="row d-flex justify-content-between no-padding">
        <img className="img-dashboard" src={Brow} alt="Brow" />
        <div className="mt-5">
          <p className="dummy">Hi Dummy, welcome back!</p>
        </div>

        <ul className="card-header-right">
          <li>
            <div className="box-right">
              <img className="img-fluid circle m-1" src={IconChecklist} alt="" />
              <span className="text-gradient">Add Your first product</span>
            </div>
          </li>

          <li>
            <div className="box-right">
              <img className="img-fluid circle m-1" src={IconWarning} alt="" />
              <span>Set Up Payment Link</span>
            </div>
          </li>

          <li>
            <div className="box-right">
              <img className="img-fluid circle m-1" src={IconWarning} alt="" />
              <span>Share your link & sosial panel</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Jumbotron;
