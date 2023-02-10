import { useParams } from "react-router-dom"
import findProject from "../Utilities/findProjects"

function ProjectDetails() {
  const { projectDetails } = useParams()
  const project = findProject(projectDetails)
  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
      <button>
        <a href={project.repositoryLink}>GitHub</a>
      </button>
      <button>
        <a href={project.deploymentLink}>Explore App</a>
      </button>
    </>
  )
}

export default ProjectDetails