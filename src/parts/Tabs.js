import React from 'react';
import MyTemplate from './MyTemplate';
import PageLink from './PageLink';

function Tabs() {
  return (
    <>
      <ul className="container nav nav-tabs d-flex justify-content-between" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
          >
            Page Information
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            data-toggle="tab"
            href="#page-link"
            role="tab"
          >
            Page links
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            data-toggle="tab"
            href="#my-template"
            role="tab"
          >
            My Templete
          </a>
        </li>

        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="tes-tab"
            data-toggle="tab"
            href="#tes"
            role="tab"
          >
            Link analytics
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade" id="home" role="tabpanel">
          <br />
          <p>No Content</p>
        </div>
        <PageLink />
        <MyTemplate />

        <div className="tab-pane fade" id="tes" role="tabpanel">
          <br />
          <p>No Content</p>
        </div>
      </div>
    </>
  );
}

export default Tabs;
