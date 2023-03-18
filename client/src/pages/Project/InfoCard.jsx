import { Container, Row, Col, Image } from "react-bootstrap";


const MiniInfoCard = (ProjectInfo) => {
  var img = ProjectInfo.image;
  var title = ProjectInfo.title;
  var content = ProjectInfo.content.substring(0, ProjectInfo.content.length > 50? 50 : ProjectInfo.content.length) + "...";

  return (
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
  );
};

const LargeInfoCard = (ProjectInfo) => {
  var img = ProjectInfo.image;
  var title = ProjectInfo.title;
  var content = ProjectInfo.content;

  return (
    <Container className="rounded" key={ProjectInfo.id}>
      <Row xs={12}>
        <Row xs={12}>
          <h2>{title}</h2>
        </Row>

        <Row xs={12}>
          <Col xs={5}>
            <Image src={img} fluid={true} rounded={true} />
          </Col>
          <Col xs={7}>
            <h3>{content}</h3>
          </Col>
        </Row>
        
      </Row>
    </Container>
  );
};

export { MiniInfoCard, LargeInfoCard };
