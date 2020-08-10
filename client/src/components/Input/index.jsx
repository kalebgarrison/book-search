import React from "react";
import "./style.css";

function index(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Default
              </span>
            </div>
            <input
              onChange={props.handleInputChange}
              value={props.search}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </div>
        <div className="row">
          <button
            id="search"
            onClick={props.handleFormSubmit}
            type="button"
            className="btn btn-primary"
          >
            Primary
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
