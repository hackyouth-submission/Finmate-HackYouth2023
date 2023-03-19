import {
  updateInfo,
  deleteInfo,
  getImage,
  createInfo,
  getAllInfo,
  getInfo,
} from "../network/API_Interactions";
import ProjectInfoCard from "./ProjectInfoCard";

const EDIT_API_GATE = "";
const DELETE_API_GATE = "";
const READ_API_GATE = "";
const GET_API_GATE = "";
const CREATE_API_GATE = "";
const IMAGE_API_GATE = "";

const waitImg = (id) => {
  let imgURL = "";
  getImage(IMAGE_API_GATE, id).then((value) => {
    imgURL = value;
  });
  return imgURL;
};

const updateProject = (clientInfo, infoCard) => {
  let newCard = infoCard;
  let input = {
    image: waitImg(clientInfo.id),
    title: clientInfo.title,
    content: clientInfo.content,
    id: infoCard.id,
  };
  updateInfo(EDIT_API_GATE, input)
    .then((value) => {
      if (value !== null) {
        newCard = ProjectInfoCard(input);
      }
    })
    .catch((reason) => {
      return reason;
    });

  return newCard;
};

const deleteProject = (infoCard) => {
  let status;
  let input = {
    id: infoCard.id,
  };
  deleteInfo(DELETE_API_GATE, input)
    .then((value) => {
      status = value;
    })
    .catch((reason) => {
      status = reason;
    });

  return status;
};

const createProject = (clientInfo) => {
  let newCard;
  let input = {
    image: waitImg(clientInfo.id),
    title: clientInfo.title,
    content: clientInfo.content,
    id: clientInfo.id,
  };
  createInfo(CREATE_API_GATE, input)
    .then((value) => {
      if (value === true) {
        newCard = ProjectInfoCard(input);
      }
    })
    .catch((reason) => {
      newCard = null;
    });

  return newCard;
};

const getProject = (clientInfo) => {
  let card;
  let input = {
    id: clientInfo.id,
  };
  getInfo(READ_API_GATE, input)
    .then((value) => {
      card = ProjectInfoCard(value);
    })
    .catch((reason) => {
      card = null;
    });

  return card;
};

const getAllProject = () => {
  let allProjects = [];
  getAllInfo(GET_API_GATE)
    .then((value) => {
      allProjects = value.items;
    })
    .catch((reason) => {});
  return allProjects;
};

export {updateProject, createProject, deleteProject, getAllProject, getProject};
