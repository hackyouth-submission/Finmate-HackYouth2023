import { Container, Row, Col, Image } from "react-bootstrap";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import "../assets/css/Home.css";
import logo from "../assets/images/logo.png";

function Home() {
  return (
    <Container>
      <header>
        <Row>
          <Col xs={4} id="header-logo">
            <Link to={"/"}>
              <Image className="logo" src={logo} />
            </Link>
          </Col>
          <Col xs={8} id="header-links">
            <Row>
              <Col className="header-link"><Link to={"/project/1"}>Project</Link></Col>
              <Col className="header-link"><Link to={"/finance"}>Finance</Link></Col>
            </Row>
          </Col>
        </Row>
        <hr/>
      </header>
      <div id="body">
        <Outlet />
      </div>
      <footer>
        <hr/>
        <div id="footer-text">Finmate</div>
      </footer>
    </Container>
  );
}

export default Home;
