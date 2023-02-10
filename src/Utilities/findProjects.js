import Projects from "../data/Projects";
import hyphenateWords from "./hyphenateWords";


unction findProject(string) {
  const title = Projects.find(project => {
    return hyphenateWords(project.title) === string
  })
  return title
}

export default findProject