// import { useLoaderData } from "react-router";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import sample2 from "../assets/sample2.jpg";
import sample3 from "../assets/sample3.mp4";
import "../components/css/Style.css"
import Header from "../components/layout/Header";
function DetailsProduct() {

    //get project on id
    var project = {
      id: 1,
      img: sample2,
      title: "SETS- Smart Emission Trading System",
      overview: (
        <div>
          <h2>Overview</h2>
          <div className="proj-info" id="overview-content">
            <video controls src={sample3} id="overview-vid" />
            <div className="content">
              International credits demand for 2013-2020 was 1,600 Mt CO2/ year,
              in which: The EU ETS demand: &#60; 1,400 Mt CO2 Other demands: ~ 250
              Mt CO2 From 2021: 8,000 – 13,000Mt/ year Seller’s status: By April
              2021, Vietnam has 275 CDM projects accredited and registered by the
              CDM Executive Board (EB). Energy projects account for 87.6%, waste
              treatment 10.2%, reforestation and afforestation 0.4% and other
              projects 1.8%. Buyer’s status: By the end of 2021, the demand for
              carbon credits will peak up gradually due to compliance
              requirements. Main sectors include energy, transport, construction,
              agriculture, land use, land use change & forestry (LULUCF) and
              waste. SETS is a gamified blockchain social-commerce platform which
              allows users to: Share voice chats, photos, music, videos and take
              part in green games Measure carbon footprints in daily activities
              via carbon calculator Be recommended and receive suitable
              seller/buyer recommendations automatically Purchase carbon
              credits/emission reduction certificates and green products Pay in
              VND, USD or green tokens
            </div>
          </div>
        </div>
      ),
      campaign: (
        <div>
          <h2>Campaign</h2>
          <div className="proj-info">
            <div className="content">
              Coke started its Share a Coke campaign by replacing its brand name
              on the bottle of Coke with 150 popular names and adding the “Share a
              Coke” tagline. Because of its low price point, it was easy to
              encourage customers to buy a bottle for themselves and one for their
              friends or loved ones. Share a Coke became a way to tell someone you
              were thinking of them. The genius of this highly successful campaign
              was its simplicity. By using “Share a Coke” as its call to action,
              Coke inspired customers to buy more than they usually would.
              Consider: Can you personalize your product so your target customer
              feels a special connection they want to share with others?
            </div>
          </div>
        </div>
      ),
      risk: (
        <div>
          <h2>Risk</h2>
          <div className="proj-info">
            <div className="content">
              A commonly used entity in HTML is the non-breaking space: &nbsp; A
              non-breaking space is a space that will not break into a new line.
              Two words separated by a non-breaking space will stick together (not
              break into a new line). This is handy when breaking the words might
              be disruptive. Examples: § 10 10 km/h 10 PM Another common use of
              the non-breaking space is to prevent browsers from truncating spaces
              in HTML pages. If you write 10 spaces in your text, the browser will
              remove 9 of them. To add real spaces to your text, you can use the
              &nbsp; character entity.
            </div>
          </div>
        </div>
      ),
      faq: (
        <div>
          <h2>FAQ</h2>
          <div className="proj-info">
            <div className="content">
              A diacritical mark is a "glyph" added to a letter. Some diacritical
              marks, like grave ( ̀) and acute ( ́) are called accents. Diacritical
              marks can appear both above and below a letter, inside a letter, and
              between two letters. Diacritical marks can be used in combination
              with alphanumeric characters to produce a character that is not
              present in the character set (encoding) used in the page. Here are
              some examples:
            </div>
          </div>
        </div>
      ),
      plans: (
        <div>
          <h2>Plans</h2>
          <div className="proj-info">
            <div className="content">
              Some characters are reserved in HTML. If you use the less than
              (&lt;) or greater than (&gt;) signs in your text, the browser might
              mix them with tags. Character entities are used to display reserved
              characters in HTML. A character entity looks like this:
            </div>
          </div>
        </div>
      ),
    };
  
    return (
      <div id="dashboard-container">
        <Header/>
        <div className="row">
          <div className="col-5">
            <img src={project.img} alt="project-avatar" id="project-avatar" />
          </div>
          <div className="col-7" id="title-container">
            <h1 id="project-title">{project.title}</h1>
          </div>
        </div>
        <div id="article-container">
          <Tabs defaultActiveKey={"overview"}>
            <Tab eventKey={"overview"} title="Overview">
              {project.overview}
            </Tab>
            <Tab eventKey={"campaign"} title="Campaign">
              {project.campaign}
            </Tab>
            <Tab eventKey={"risk"} title="Risk">
              {project.risk}
            </Tab>
            <Tab eventKey={"faq"} title="FAQ">
              {project.faq}
            </Tab>
            <Tab eventKey={"plans"} title="Plans to use funds">
              {project.plans}
            </Tab>
          </Tabs>
        </div>
      </div>
    );
}

export default DetailsProduct;
