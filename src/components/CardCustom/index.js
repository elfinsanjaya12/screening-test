import React from "react";
import Checkbox from '../Checkbox';
import "./style.css";
import IconTrash from "../../assets/images/icons/trash.png";

function CardCustom({data}) {
  return data.map((pagelink, index1) => {
    if (pagelink.length === 0) return null;
    return (
      <div className="card-custom" key={index1}>
        <div className="d-flex justify-content-around">
          <span className="text-gradient2 w-6">Link #{pagelink.id}</span>
          <span>
            <img className="img-fluid circle" src={pagelink.icon} alt="" style={{width: 24, height:24, lineHeight:24, marginRight:5, marginTop:-5}} />
            Icon
          </span>
          <Checkbox />
          <span style={{ alignSelf: "center" }}>Display on page</span>
          <span style={{ alignSelf: "center" }}>
            <img className="icon-custom-card" src={IconTrash} alt="" />
            Remove link
          </span>
        </div>

        <div className="d-flex mt-3">
          <div className="img-titik">
            <span className="material-icons">drag_indicator</span>
          </div>
          <div className="w-10">
            <div className="form-group row ml-12">
              <span className="mw w-6">Link title</span>
              <input className="input-card-custom w-6" type="text" placeholder="Whatsapp" value={pagelink.title} />
            </div>
            <div className="form-group row ml-12 mt-10">
              <span className="mw w-6">Link URL</span>
              <input className="input-card-custom w-6" type="text" placeholder="www.whatsapp.com/dummystore" value={pagelink.url} />
            </div>
          </div>
        </div>
      </div>
    );
  })
}

export default CardCustom;
