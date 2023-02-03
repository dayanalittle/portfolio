import projects from "../../data/Projects"
import ProjectsList from "../../components/ProjectList"

function Project() {
    return (

        <>
            <h1>Projects</h1>
            <section>
                {projects.map((project, idx) =>
                    <ul>
                        <li key={idx}>
                            {project.title}
                        </li>
                    </ul>
                )}
            </section>
            <ProjectsList projects={Project} />
        </>
    )
}

export default Project