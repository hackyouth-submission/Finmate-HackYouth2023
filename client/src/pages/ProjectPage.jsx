import { MiniInfoCard } from "./InfoCard";

import { Container, Row, Col } from "react-bootstrap";
//main products

//perPage % perRow == 0!!!

const ProjectPage = ({ projectList, pageNum, perPage, perRow}) => {
  var rowList = [[]];
  var unRowList = projectList
    .slice(pageNum - 1, pageNum * perPage > projectList.length? pageNum * perPage : projectList.length)
    .map((value) => <Col className="info-card" key={value.id}>{MiniInfoCard(value)}</Col>);
  for (var index = 0; index < unRowList.length; index++) {
    rowList[~~(index / perRow)][index % perRow] = unRowList[index];
  }
  var allRowList = rowList.map((value,index) => (<Row key={index}>{value}</Row>))
  return (
    <Container>
      {allRowList}
    </Container>
  );
};

export default ProjectPage;
