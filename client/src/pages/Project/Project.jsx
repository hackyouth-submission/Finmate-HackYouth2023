// import { Container, Row, Col } from "react-bootstrap";
import { useLoaderData } from "react-router";
import { Nav } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import ProjectPage from "./ProjectPage";
import sampleImage from "../../assets/images/sample.png";
// import { getAllProject } from "../../models/ProjectInfoCardDAO";

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
    number <= projectList.length || number <= pageNumber + 2;
    number++
  ) {
    items.push(
      <Pagination.Item key={number} active={number === pageNumber}>
        {number}
      </Pagination.Item>
    );
  }

  let paging = [
    <Pagination.First />,
    <Pagination.Prev />
  ];
  
  if (~~(projectList.length / NUM_PER_PAGE) > MAX_PAGE_DISPLAY) {
    paging.push(<Pagination.Ellipsis />);
  }
  paging = paging.concat(items);
  if (~~(projectList.length / NUM_PER_PAGE) > MAX_PAGE_DISPLAY) {
    paging.push(<Pagination.Ellipsis />);
  }
  if (~~(projectList.length / NUM_PER_PAGE) > pageNumber + 2) {
    paging.push(
      <Pagination.Item>{~~(projectList.length / NUM_PER_PAGE)}</Pagination.Item>
    );
  }
  paging.push(<Pagination.Next />, <Pagination.Last />);

  return (
    <article>
      <ProjectPage
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
