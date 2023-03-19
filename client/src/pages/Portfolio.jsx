import "../components/css/Style.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Header from "../components/layout/Header";

const Portfolio = () => {

  let invested = [].map((value) => <div>{value}</div>);
  let followed = [].map((value) => <div>{value}</div>);

  return (
    <div id="portfolio-container">
      <Header />
      <Tabs defaultActiveKey={"invested"} id="tab">
        <Tab eventKey={"invested"} title="Invested">
          {invested}
        </Tab>
        <Tab eventKey={"followed"} title="Followed">
          {followed}
        </Tab>
      </Tabs>
    </div>
  );
};

export default Portfolio;
