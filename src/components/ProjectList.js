function ProjectsList(props) {

  return (
  <>
  <h1>Projects</h1>
  <section>
      {props.projects.map((project, idx) =>
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

export default ProjectsList