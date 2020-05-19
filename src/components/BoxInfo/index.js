import React from 'react';
import IconStaticVisitor from '../../assets/images/static_visitor.png';
// import IconUp from '../assets/img/up.png';
// import IconDown from '../assets/img/down.png';

function CardDashboard({ data }) {
  if (!data) return '';
  return (
    <div className="box-info-body">
      <div className="c_t0">
        <img style={{ marginRight: 5 }} src={data.icon} alt="" />
        <span>
          <b>{data.title}</b>
        </span>
      </div>

      <div className="c_t1">
        <span>{data.value}</span>
      </div>

      <div className="c_t1">
        <img className="img-static" src={data.imageUrl} alt="" />
      </div>

      <div className="mini-text">
        <div className="uk mini-1">
          <span>{data.visitoroneweek}</span>
          <span>{data.visitoramounth}</span>
        </div>
        <div className="uk mini-1">
          <span>
            -
            {' '}
            {data.parsoneweek}
          </span>
          <span>
            -
            {' '}
            {data.parsamounht}
          </span>

        </div>
        <div className="uk mini-1">
          <span>
            <img src={data.up} alt="icon up" />
            {' '}
            {data.persenoneweek}
          </span>
          <span>
            <img src={data.down} alt="icon down" />
            {' '}
            {data.persenamounht}
          </span>
        </div>
      </div>
    </div>

  );
}

export default CardDashboard;
