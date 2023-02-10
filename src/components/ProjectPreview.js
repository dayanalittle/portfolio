import { Link } from "react-router-dom";
import hyphenateWords from "../Utilities/hyphenateWords";

function ProjectPreview(props) {

  return (
    <>
      <h1>Projects</h1>
      <div>

        <section>
          <h2>
            {props.project.title}
          </h2>
        
        </section>
        <Link to={hyphenateWords(props.project.title)}>
          <button>
              Learn more
          </button>
        </Link>
        <img
          src={props.project.image}
          alt={props.project.title}
        />


      </div>
    </>
  )

}

export default ProjectPreview