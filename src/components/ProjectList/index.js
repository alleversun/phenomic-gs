import React, { PropTypes } from "react"

import ProjectPreview from "../ProjectPreview"

const ProjectList = ({ projects }) => {
  return (
    <section className={'cf'}>
      {
        projects.length ? 
        (
            projects.map((project) => (
              <article key={ project.title } className="fl w-100 w-50-ns w-25-l bg-black-10 tc"><ProjectPreview { ...project } /></article>
            ))
        )
        : "No projects yet."
      }
    </section>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
}

export default ProjectList
