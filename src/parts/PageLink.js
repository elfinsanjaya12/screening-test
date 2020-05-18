import React from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';

function PageLink() {
  return (
    <div className="tab-pane fade show active" id="page-link" role="tabpanel">
      <div className="row">
        <Card />
        <Layout />
      </div>
    </div>
  );
}

export default PageLink;
