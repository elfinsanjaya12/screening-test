import React from 'react';
import Button from '../Button/index';
import IconCony from '../../assets/images/cony.png';
import IconBrown from '../../assets/images/brown.png';

function Feedback() {
  return (
    <div className="card-feedback">
      <h4 className="card-feedback-h4">Send feedbacks to us!</h4>
      <span>We want Dazlink to always evolve and help you better.</span>
      <br />
      <span>Your feedbacks and ideas would mean a lot to us!</span>
      <div className="card-feedback-body">
        <img className="img-feetback-left" src="img/cinta.png" alt="" />
        <img className="img-feetback-right" src="img/sayang.png" alt="" />
        <p className="text-center">Enter your feedbacks and ideas here</p>
      </div>
      <div>
        <img className="img-card-feedback-left" src={IconCony} alt="" />
        <img className="img-card-feedback-right" src={IconBrown} alt="" />
      </div>

      <Button className="btn-feedback" type="button" style={{ marginTop: -1000 }}>
        SUBMIT
      </Button>
    </div>
  );
}

export default Feedback;
