import React from "react";
import info from "./info.json"
import PortCard from "../PortCard/PortCard"
const Portfolio = () => {

    console.log(info)
  return (
    <div className="container">
      <div className="row">
      {info.map((info) => (
            <PortCard
              title={info.project_name}
              src={info.image}
              bio={info.about}
              link={info.link}
            />
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
