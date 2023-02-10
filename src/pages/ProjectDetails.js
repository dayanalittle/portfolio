import { useParams } from "react-router-dom"
import findProject from "../Utilities/findProjects"

function ProjectDetails() {
  const {projectDetails} = useParams()
  const project = findProject(projectDetails)
  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
      <button>GitHub</button>
      <button>Deployed Site</button>
    </>
  )
}

export default ProjectDetails