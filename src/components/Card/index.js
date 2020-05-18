import React from 'react';
import IconStore from '../../assets/images/icons/store.png';
import IconChecklist from '../../assets/images/icons/checklist.png';

function Card() {
  return (
    <div className="col-md-7">
      <h4>Link to display</h4>
      <hr className="hr-line" />
      <div className="card">
        <div className="row m-2">
          <div className="col-md-3 offset-3">
            <span className="text-w600">
              {' '}
              <img src={IconStore} alt="" />
              {' '}
              Store link
            </span>
          </div>
          <div className="col-md-6">
            <span>
              {/* ubah jadi checklist */}
              <img src={IconChecklist} alt="" />
              {' '}
              Active store link
            </span>
          </div>
        </div>

        <div className="form-group row m-1">
          <label className="col-sm-3 col-form-label">Password</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" placeholder="Password" />
          </div>
        </div>
        <div className="form-group row m-1">
          <label className="col-sm-3 col-form-label">Password</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" placeholder="Password" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Card;
