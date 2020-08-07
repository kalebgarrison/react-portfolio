import React from "react";
import "./style.css";

const PortCard = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.src} className="card-img-top" alt="pro" />
        <div className="card-body">
          <h5 className="card-title">
            <a href={props.link}>{props.title}</a>
          </h5>
          <p className="card-text">{props.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default PortCard;
