// import { Container, Row, Col } from "react-bootstrap";
import { useLoaderData } from "react-router";
import { Nav } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import ProjectPage from "./ProjectPage";
import sampleImage from "../assets/images/sample.png";
// import { getAllProject } from "../../models/ProjectInfoCardDAO";
import "../assets/css/Project.css"

const NUM_PER_PAGE = 9;
const NUM_PER_ROW = 3;
const MAX_PAGE_DISPLAY = 5;

export function loader({ params }) {
  var pageNumber = params.pageNum;
  return pageNumber;
}

export default function Project() {
  var pageNumber = useLoaderData();
  var projectList = [
    { id: 1, image: sampleImage, title: "AA", content: "BB" },
    { id: 2, image: sampleImage, title: "CC", content: "DD" },
  ];

  let items = [];
  for (
    let number = pageNumber - 2 < 1 ? 1 : pageNumber;
    number <= ~~(projectList.length / NUM_PER_PAGE)+1 && number <= pageNumber + 2;
    number++
  ) {
    items.push(
      <Pagination.Item key={number} active={number === pageNumber}>
        {number}
      </Pagination.Item>
    );
  }

  

  let paging = [
    <Pagination.First key={"first"}/>,
    <Pagination.Prev key={"prev"} />
  ];

  if (~~(projectList.length / NUM_PER_PAGE) >
   pageNumber + 2) {
    paging.push(<Pagination.Item key={"firstItem"}>{1}</Pagination.Item>);
  }
  
  if (~~(projectList.length / NUM_PER_PAGE) > MAX_PAGE_DISPLAY) {
    paging.push(<Pagination.Ellipsis key={"ellipsis1"} />);
  }

  paging = paging.concat(items);

  if (~~(projectList.length / NUM_PER_PAGE) > MAX_PAGE_DISPLAY) {
    paging.push(<Pagination.Ellipsis key={"ellipsis1"} />);
  }
  if (~~(projectList.length / NUM_PER_PAGE) > pageNumber + 2) {
    paging.push(
      <Pagination.Item key={"last-page"}>{~~(projectList.length / NUM_PER_PAGE)}</Pagination.Item>
    );
  }
  paging.push(<Pagination.Next key={"next"}/>, <Pagination.Last key={"last"}/>);

  return (
    <article>
      <ProjectPage
      id ="page"
        pageNum={pageNumber}
        projectList={projectList}
        perPage={NUM_PER_PAGE}
        perRow={NUM_PER_ROW}
      />
      <Nav>
        <Pagination>
          {paging}
        </Pagination>
      </Nav>
    </article>
  );
}