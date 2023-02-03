import projects from "../../data/projects"

function Projects() {
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
        </>
    )
}

export default Projects