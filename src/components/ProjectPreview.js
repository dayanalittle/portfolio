function ProjectPreview(props) {
  console.log("PROPS", props);
  return (
    <>
      <h1>Projects</h1>
      <div>

        <section>
          <h3>
            {props.project.title}
          </h3>
          <button>
            Learn more
          </button>
        </section>
        <img
          src={props.project.image}
          alt={props.project.title}
        />


      </div>
    </>
  )

}

export default ProjectPreview