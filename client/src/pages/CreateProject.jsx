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
              <label>Bảng khảo sát khách hàng của bạn: </label>
              <input className="full paragraph" id="cust" name="cust" type={"text"} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label>Kết quả thử nghiệm sản phẩm của bạn:</label>
              <input className="full paragraph" id="test" name="test" type={"text"} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label>Sản phẩm (bản beta) </label>
              <input className="full paragraph" id="beta" name="beta" type={"text"} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label>Tổng hợp kết quả kinh doanh của bạn:</label>
              <input className="full paragraph" id="business" name="business" type={"text"} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label>Kế hoạch sử dụng nguồn quỹ gọi vốn của bạn?</label>
              <input className="full paragraph" id="plans" name="plans" type={"text"} />
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
            <label>Tên dự án </label>
            <input className="half" id="pname" name="pname" type={"text"} />
          </div>
          <div className="col-6">
            <label>Tên chủ dự án</label>
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
            <label>Lĩnh vực của bạn</label>
            <select className="half">
              <option value={"Environment"}>Môi trường</option>
              <option value={"Science"}>Khoa học</option>
            </select>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-4">
                <label>Số điện thoại </label>
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
            <label>Dự án này được quản lý bởi tổ chức nào?</label>
            <input className="full" id="company" name="company" type={"text"} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label>Miêu tả sơ lược dự án</label>
            <input className="full paragraph" id="desc" name="desc" type={"text"} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label>Tại sao bạn muốn bắt đầu dự án này?</label>
            <input className="full paragraph" id="why" name="why" type={"text"} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label>
              Dự án của bạn có những rủi ro như thế nào và bạn có kế hoạch nào để đối đầu với nó
            </label>
            <input className="full paragraph" id="risks" name="risks" type={"text"} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label>Dự án của bạn đóng góp thế nào cho xã hội? </label>
            <input className="full paragraph" id="contri" name="contri" type={"text"} />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label>Dự án của bạn yêu cầu nguồn vốn bao nhiêu? </label>
            <input className="half" id="money" name="money" type={"number"} />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-7">
                <label>Bạn muốn gọi vốn bao lâu?</label>
                <input
                  className="two-third"
                  id="time"
                  name="time"
                  type={"date"}
                />
              </div>
              <div className="col-4" id="date-blurb">
                *Dự án sẽ được phê duyệt sau 5-7 ngày
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label>Bạn muốn nhận tiền gọi vốn qua đâu? </label>
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
            Bạn có muốn được xác thực bởi Công ty Kiểm toán DeLotte?
          </label>
        </div>

        {verify}

        <div id="button-box">
          <button type="Submit">Hoàn thành</button>
        </div>
      </form>
    </div>
  );
}
