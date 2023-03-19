<<<<<<< HEAD
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
=======
import '../components/css/Style.css'
import Header from "../components/layout/header";

function Portfolio() {
    return (
        <div>
            <Header />
            Portfolio
        </div>
    );
}

export default Portfolio;
>>>>>>> 2e76fa4a69ec05fe20f61355003f01bcbb6bf4d5
