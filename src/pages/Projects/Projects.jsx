import Projects from "../../data/Projectsdata.js"
import ProjectList from "../../components/ProjectsList"

function Project() {
    return (

        <>
        <ProjectList projects={Projects} />


        </>
    )
}

export default Project