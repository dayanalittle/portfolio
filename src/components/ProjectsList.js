function ProjectList(props) {
    return (

        <>
            <h1>Projects</h1>
            <section>
                {props.projects.map((project) =>
                    <ul>
                        <li key={project.title}>
                            {project.title}
                            {project.image}
                        </li>
                    </ul>
                )}
            </section>
        </>
    )
}

export default ProjectList