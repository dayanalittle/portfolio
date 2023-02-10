import projects from "../../data/Projects"

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
        </>
    )
}

export default Project