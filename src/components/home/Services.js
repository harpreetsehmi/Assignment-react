import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.scss";

function Services(props) {
  const navigate = useNavigate();

  const handleNavigation = (value) => {
    if (value.link) {
      navigate(value.link);
    }
  };

  return (
    <>
      {props.details.map((value, index) => (
        <div
          className="service-card"
          key={index}
          onClick={() => handleNavigation(value)}
        >
          <div className="inner-wrap">
            <div className="img-wrap">
              {" "}
              <img src={value.img} />
            </div>
            <div className="box-text">
              <p>{value.title}</p>
              <span>{value.subtext}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Services;
