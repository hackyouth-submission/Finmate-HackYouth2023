import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const MiniInfoCard = (ProjectInfo) => {
  var img = ProjectInfo.image;
  var title = ProjectInfo.title;
  var content =
    ProjectInfo.content.substring(
      0,
      ProjectInfo.content.length > 50 ? 50 : ProjectInfo.content.length
    ) + "...";

  return (
    <Link to={"/project/info/"+ProjectInfo.id}>
      <Container className="rounded" key={ProjectInfo.id}>
        <Row xs={12}>
          <Col xs={4}>
            <Image src={img} fluid={true} thumbnail={true} />
          </Col>
          <Col xs={8}>
            <Row xs={12}>
              <h2>{title}</h2>
            </Row>

            <Row xs={12}>
              <h3>{content}</h3>
            </Row>
          </Col>
        </Row>
      </Container>
    </Link>
  );
};



export { MiniInfoCard };
