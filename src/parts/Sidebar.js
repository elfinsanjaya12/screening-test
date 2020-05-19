import React from "react";
import Button from "../components/Button";
import IconDashboard from "../assets/images/icons/dashboard.png";
import IconFrontPage from "../assets/images/icons/fontpage.png";

function Sidebar(props) {
  const getNavLinkClass = (path) => (props.location.pathname === path ? " active" : "");

  return (
    <section className="menu d-flex">
      <div className="sidebar">
        <ul className="nav flex-column mt-5 text-center">
          <li className={`nav-item${getNavLinkClass("/")}`}>
            <Button className="nav-link text-dashboard" type="link" href="/">
              <img className="ic-sidebar" src={IconDashboard} alt="" /> Dasboard
            </Button>
          </li>
          <hr className="line" />
          <li className={`nav-item${getNavLinkClass("/front-page")}`}>
            <Button className="nav-link text-frontpage" type="link" href="/front-page">
              <img className="ic-sidebar" src={IconFrontPage} alt="" /> Front Page
            </Button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;
