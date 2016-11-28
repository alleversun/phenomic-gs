import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import ProjectList from "../../components/ProjectList"

const defaultNumberOfProjects = 6

const LatestProjects = (props, { collection }) => {
  const Projects = enhanceCollection(collection, {
    filter: { layout: "Project" },
    sort: "date",
    reverse: true,
  })
  .slice(0, props.numberOfProjects || defaultNumberOfProjects)

  return (
    <div>
      <ProjectList projects={ Projects } />
    </div>
  )
}

LatestProjects.propTypes = {
  numberOfProjects: PropTypes.number,
}

LatestProjects.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default LatestProjects
