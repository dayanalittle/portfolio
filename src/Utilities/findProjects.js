import Projects from "../data/Projects";
import hyphenateWords from "./hyphenateWords";


function findProject(string) {
  const title = Projects.find(project => {
    return hyphenateWords(project.title) === string
  })
  return title
}

export default findProject