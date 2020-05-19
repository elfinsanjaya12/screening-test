import React, { useState, useEffect } from "react";
import Checkbox from "../Checkbox";
import "./style.css";
import IconTrash from "../../assets/images/icons/trash.png";

function CardCustom({ data }) {
  const [fields, setFields] = useState([{}]);
  const [value, setValue] = useState({ id: "", value: false });

  const handleChangeCheckbox = (event) => {
    console.log(!value);
    // const _temp = [...value];
    // _temp[event.target.dataset.id][event.target.name] = event.target.value;
    // setValue(!_temp);
  };

  const handleChange = (event) => {
    const _temp = [...fields];
    _temp[event.target.dataset.id][event.target.name] = event.target.value;
    setFields(_temp);
  };

  useEffect(() => {
    setFields(data);
  });

  return (
    <>
      {fields.map((pagelink, index1) => {
        return (
          <div className="card-custom" key={index1}>
            <div className="d-flex justify-content-around">
              <span className="text-gradient2 w-6">Link #{pagelink.id}</span>
              <span>
                <img
                  className="img-fluid circle"
                  src={pagelink.icon}
                  alt=""
                  style={{
                    width: 24,
                    height: 24,
                    lineHeight: 24,
                    marginRight: 5,
                    marginTop: -5,
                  }}
                />
                Icon
              </span>
              <Checkbox
                isOn={value}
                data={index1}
                handleToggle={handleChangeCheckbox}
              />
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
                  <input
                    data-id={index1}
                    className="input-card-custom w-6"
                    type="text"
                    name="title"
                    placeholder="Start shopping!"
                    value={pagelink.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group row ml-12 mt-10">
                  <span className="mw w-6">Link URL</span>
                  <input
                    data-id={index1}
                    onChange={handleChange}
                    className="input-card-custom w-6"
                    type="text"
                    name="url"
                    placeholder="www.whatsapp.com/dummystore"
                    value={pagelink.url}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
  // })
}

export default CardCustom;
