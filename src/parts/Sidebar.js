import React from 'react';
import Button from '../components/Button';
// import IconDashboard from '../assets/dashboard.png';
// import IconFrontPage from '../assets/fontpage.png';

function Sidebar(props) {
  const getNavLinkClass = (path) => (props.location.pathname === path ? ' active' : '');

  return (

    <section className="menu d-flex">
      <div className="sidebar">
        <ul className="nav flex-column mt-5 text-center">
          <li className={`nav-item${getNavLinkClass('/')}`}>
            <Button className="nav-link" type="link" href="/">
              Dasboard
            </Button>
          </li>
          <li className={`nav-item${getNavLinkClass('/front-page')}`}>
            <Button className="nav-link" type="link" href="/front-page">
              Front Page
            </Button>
          </li>

        </ul>
      </div>
    </section>

  );
}

export default Sidebar;
