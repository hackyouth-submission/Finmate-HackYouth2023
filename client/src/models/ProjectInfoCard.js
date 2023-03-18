

const ProjectInfoCard = (info) => {
    var infocard = null
    if (info!=null) {
        infocard = {
            id: info.id,
            image: info.image,
            title: info.title,
            content: info.content
        }
    }
    return infocard;
}

export default ProjectInfoCard;