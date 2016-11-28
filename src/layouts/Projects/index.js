import React from "react"

import LatestProjects from "../../components/LatestProjects"
import Page from "../Page"


const Projects = (props) => {
  return (
    <Page { ...props }>
      <LatestProjects />
    </Page>
  )
}

export default Projects