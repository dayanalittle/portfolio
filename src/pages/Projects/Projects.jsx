import Projects from "../../data/projects"
import ProjectList from "../../components/ProjectsList"

function Project() {
    return (

        <>
        <ProjectList projects={Projects} />


        </>
    )
}

export default Project