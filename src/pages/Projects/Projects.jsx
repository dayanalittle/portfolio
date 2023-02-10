import Projects from "../../data/Projects.js"
import ProjectList from "../../components/ProjectsList"

function Project() {
    return (

        <>
        <ProjectList projects={Projects} />


        </>
    )
}

export default Project