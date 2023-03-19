// import { form } from "react-router-dom";
import "../components/css/Style.css";
import bank1 from "../assets/bank1.jpg";
import bank2 from "../assets/bank2.jpg";
import bank3 from "../assets/bank3.jpg";
import { useState } from "react";
import Header from "../components/layout/Header";

export default function CreateProject() {
  var [verify, setVerify] = useState(<hr />);

  var verifyMiniPage = () => {
    if (verify.type === "hr") {
      return (
        <div>
          <div className="row">
            <div className="col-12">
              <label>Customer survey: </label>
              <input className="full" id="cust" name="cust" type={"text"} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label>Product test results? </label>
              <input className="full" id="test" name="test" type={"text"} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label>(Beta) product link? </label>
              <input className="full" id="beta" name="beta" type={"text"} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label>Business report </label>
              <input className="full" id="business" name="business" type={"text"} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label>What are your detailed plans to use the funds you will raise? </label>
              <input className="full" id="plans" name="plans" type={"text"} />
            </div>
          </div>
        </div>
      );
    }

    return <hr/>
  }

  return (
    <div id="create-project-container">
      <Header/>
      <form>
        <div className="row">
          <div className="col-6">
            <label>Project name </label>
            <input className="half" id="pname" name="pname" type={"text"} />
          </div>
          <div className="col-6">
            <label>Project owner name </label>
            <input
              className="half"
              id="pownname"
              name="pownname"
              type={"text"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label>Fields</label>
            <select className="half">
              <option value={"Environment"}>Environment</option>
              <option value={"Science"}>Science</option>
            </select>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-4">
                <label>Phone number </label>
                <input
                  className="third"
                  id="phone"
                  name="phone"
                  type={"text"}
                />
              </div>
              <div className="col-8">
                <label>Email </label>
                <input
                  className="two-third"
                  id="email"
                  name="email"
                  type={"email"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label>Which organization does this project belong to? </label>
            <input className="full" id="company" name="company" type={"text"} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label>Project description </label>
            <input className="full" id="desc" name="desc" type={"text"} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label>Why did you launch this project? </label>
            <input className="full" id="why" name="why" type={"text"} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label>
              What are your project's risks and how would you tackle it?{" "}
            </label>
            <input className="full" id="risks" name="risks" type={"text"} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label>What is your project contribute to society? </label>
            <input className="full" id="contri" name="contri" type={"text"} />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label>How much does your project need? </label>
            <input className="half" id="money" name="money" type={"number"} />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-7">
                <label>How long do you want to call to invest? </label>
                <input
                  className="two-third"
                  id="time"
                  name="time"
                  type={"date"}
                />
              </div>
              <div className="col-4" id="date-blurb">
                *Project is approved after 5 - 7 days
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label>Which bank do you want to receive the funds in? </label>
              <div>
                <input
                  className="radio"
                  type={"radio"}
                  name="bank"
                  id="agribank"
                  value="agribank"
                />
                <label className="radio-label">
                  <img src={bank1} alt="bank1" />
                </label>
                <br />
                <input
                  className="radio"
                  type={"radio"}
                  name="bank"
                  id="visa"
                  value="visa"
                />
                <label className="radio-label">
                  <img src={bank2} alt="bank2" />
                </label>
                <br />
                <input
                  className="radio"
                  type={"radio"}
                  name="bank"
                  id="vietcombank"
                  value="vietcombank"
                />
                <label className="radio-label">
                  <img src={bank3} alt="bank3" />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div id="verifier">
          <input
            type={"checkbox"}
            id="verify"
            name="verify"
            value={"verify"}
            onClick={() => {
              setVerify(verifyMiniPage())
              console.log(verify)
              }
            }
          />
          <label className="radio-label">
            Do you want to be verified by ___?
          </label>
        </div>

        {verify}

        <div id="button-box">
          <button type="Submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
