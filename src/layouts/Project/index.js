import React, { PropTypes } from "react"

import LatestProjects from "../../components/LatestProjects"
import Page from "../Page"

const Project = (props) => {

  return (
    <Page { ...props }>
      <LatestProjects />
    </Page>
  )
}

Project.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Project
