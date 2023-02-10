import ProjectPreview from "./ProjectPreview"

function ProjectList(props) {
    return (

        <>
            <h1>Projects</h1>
            <section>
                {props.projects.map((project) =>
                    <ul>
                        <li key={project.title}>
                            <ProjectPreview project={project} />
                        </li>
                    </ul>
                )}
            </section>
        </>
    )
}

export default ProjectList