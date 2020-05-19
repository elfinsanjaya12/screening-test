import React from "react";
import MyTemplate from "./MyTemplate";
import PageLink from "./PageLink";
//import IconTemplate from "../assets/images/icons/templates.svg";

function Tabs({data}) {
  return (
    <>
      <ul className="container nav nav-tabs d-flex justify-content-between" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab">
            {" "}
            <div className="text-icon"></div>
            <span className="material-icons">important_devices</span>
            Page Information
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link active" data-toggle="tab" href="#page-link" role="tab">
            <div className="text-icon"></div>
            <span className="material-icons">add_box</span>
            Page links
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" data-toggle="tab" href="#my-template" role="tab">
            <div className="text-icon"></div>
            <span className="material-icons">cloud_queue</span>
            My Templete
          </a>
        </li>

        <li className="nav-item" role="presentation">
          <a className="nav-link" id="tes-tab" data-toggle="tab" href="#tes" role="tab">
            <div className="text-icon"></div>
            <span className="material-icons">poll</span>
            Link analytics
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade" id="home" role="tabpanel">
          <br />
          <p>No Content</p>
        </div>
        <PageLink data={data} />
        <MyTemplate data={data} />
        <div className="tab-pane fade" id="tes" role="tabpanel">
          <br />
          <p>No Content</p>
        </div>
      </div>
    </>
  );
}

export default Tabs;
