import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Hero.scss";
import insurance from "../../assets/insurance.svg";
import easy from "../../assets/easy.svg";
import Services from "./Services";
import ServiceData from "./ServiceData";

function Hero() {
  return (
    <div className="bg-img">
      <Container>
        <Row>
          <div className="col-lg-6">
            <div className="banner-content">
              <h4>Get the best insurance plans and buy them instantly.</h4>
              <div className="sub-content">
                <div className="insurance-plans">
                  <img src={insurance} />
                  <p>
                    <span>50+ Insurers</span> with one of the best prices
                  </p>
                </div>
                <div className="insurance-plans left-space">
                  <img src={easy} />
                  <p>
                    <span>Quick, Easy </span>& Hassel Free
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6"></div>
        </Row>
        <div className="service-wrap">
          {" "}
          <Services details={ServiceData} />
        </div>
      </Container>
    </div>
  );
}

export default Hero;
