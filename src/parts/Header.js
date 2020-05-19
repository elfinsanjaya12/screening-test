import React from "react";
import Button from "../components/Button";
import BrandIcon from "./IconText";
import IconRocket from "../assets/images/icons/rocket.png";
import IconSmile from "../assets/images/icons/smile.png";
import IconCircle from "../assets/images/icons/circle.png";

function Header() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg mb-navbar">
        <BrandIcon />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-cs form-inline my-2 my-lg-0  ml-auto">
            {/* buat component input */}
            <input type="text" className="input-search" placeholder="&#xF002; Search for anything here" />
            <Button className="btn-upgrade" type="button">
              <img src={IconRocket} alt="icon button upgrate" /> Upgrade
            </Button>
            <span className="text-dummy">Dummy User</span>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                margin: "auto",
                position: "relative",
              }}
            >
              <img src={IconCircle} alt="" style={{ width: 45 }} />
              <img
                style={{
                  position: "absolute",
                  lineHeight: 45,
                }}
                src={IconSmile}
                alt=""
              />
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
