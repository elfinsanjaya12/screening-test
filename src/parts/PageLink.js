import React from "react";
import Card from "../components/Card";
import CardCustom from '../components/CardCustom'
import Layout from "../components/Layout";
import Button from "../components/Button";

function PageLink({data}) {
  return (
    <div className="tab-pane fade show active" id="page-link" role="tabpanel">
      <div className="row">
        <div className="col-md-7 mt-3">
          <Card />
          <CardCustom data={data} />
          <Button className="box3 text-center" href=''>
              + add new link
          </Button>
        </div>
        <Layout data={data} />
      </div>
    </div>
  );
}

export default PageLink;
