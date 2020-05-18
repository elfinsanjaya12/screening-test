/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ImageAndroid from '../../assets/images/brown.png';

function Template() {
  return (
    <div className="col-md-5">
      <form>
        <ul className="list-style d-flex justify-content-between" style={{ listStyle: 'none' }}>
          <li>
            <input type="radio" name="web" value="web" />
            <span className="text-li">Web</span>
          </li>
          <li>
            <input type="radio" name="web" value="mobile" />
            <span className="text-li">Mobile</span>
          </li>
          <li>
            <input type="radio" name="web" value="layout" />
            <span className="text-li">Layout</span>
          </li>
        </ul>
      </form>
      <div className="row d-flex justify-content-center">
        <img src={ImageAndroid} alt="" width="200" />
      </div>
    </div>
  );
}

export default Template;
