import React from 'react';
import Header from '../parts/Header';
import Sidebar from '../parts/Sidebar';
import Tabs from '../parts/Tabs';

function FrontPage(props) {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-md-3">
          <Sidebar {...props} />
        </div>
        <div className="col-md-9 m-0" style={{ marginRight: 20 }}>
          <Tabs />
        </div>
      </div>
    </>
  );
}

export default FrontPage;
