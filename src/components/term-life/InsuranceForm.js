import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import "./InsuranceForm.scss";
import female from "../../assets/blue-ficon.svg";
import male from "../../assets/blue-micon.svg";
import lock from "../../assets/lock.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-input-2";
import whiteico from "../../assets/blue-ficon-w.svg";
import whiteicom from "../../assets/blue-micon-w.svg";
import "react-phone-input-2/lib/style.css";

function InsuranceForm() {
  const [startDate, setStartDate] = useState(null);
  const [phone, setPhone] = useState("");
  const [selectGender, setSelectGender] = useState("");

  const handleDateChange = (event) => {
    const selectedDate = event;
    setStartDate(selectedDate);
    // Calculate the minimum allowed date (21 years ago)
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 21);

    // Compare the selected date with the minimum allowed date
    const isValidDate = new Date(selectedDate) <= minDate;

    // Update the selected date state variable only if it's valid
    if (isValidDate) {
      setStartDate(selectedDate);
    } else {
      alert("You should be 21 years of age to apply for insurance policy");
    }
  };
  return (
    <>
      <div className="outer-wrap">
        <Container>
          <div className="form-wrap">
            <div className="heading">
              <h3>
                Get Term Life Insurance <span>For You</span> &{" "}
                <span>Your Family</span>
              </h3>
            </div>
            <Row>
              <div className="col-lg-6">
                <div className="form-inputs">
                  <Form>
                    <Form.Group className="mb-3" controlId="fgender">
                      <Form.Label>Gender</Form.Label>
                      <div>
                        <Button
                         
                          onClick={() => setSelectGender("male")}
                          className={`btn-ico ${selectGender === "male" ? "selected" : ""}`}
                        >
                          <img
                            src={selectGender === "male" ? whiteicom : male}
                          />
                          Male
                        </Button>
                        <Button
                          onClick={() => setSelectGender("female")}
                          className={`btn-ico ${selectGender === "female" ? "selected" : ""}`}
                        >
                          <img
                            src={selectGender === "female" ? whiteico : female}
                          />
                          Female
                        </Button>
                      </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="fname">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Please enter your Full Name"
                      />
                    </Form.Group>
                    <Form.Label>DOB</Form.Label>

                    <DatePicker
                      className="mb-3 datep"
                      selected={startDate}
                      onChange={(date) => handleDateChange(date)}
                    />

                    <Form.Group className="mb-3" controlId="mob">
                      <Form.Label>Mobile Number</Form.Label>
                      <PhoneInput
                        country={"us"}
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                      />
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </Row>
            <div className="bottom-line">
              <h4>
                By clicking, you agree to our{" "}
                <span>Privacy policy,Terms of Use</span> &{" "}
                <span>Disclaimers</span>
              </h4>
            </div>
            <div className="butn-quotes">
              {" "}
              <Button variant="primary">View Free Quotes</Button>
            </div>
            <div className="secure-info">
              <img src={lock} />
              Your personal information is secure with us
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default InsuranceForm;
