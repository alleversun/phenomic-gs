import React, { PropTypes } from "react"

import LatestProjects from "../../components/LatestProjects"
import Page from "../Page"

const Project = (props) => {
  // it's up to you to choose what to do with this layout ;)
  const pageDate = props.head.date ? new Date(props.head.date) : null

  return (
    <Page
      { ...props }
      header={
        <div>
          <header>
            {
              pageDate &&
              <time key={ pageDate.toISOString() }>
                { pageDate.toDateString() }
              </time>
            }
          </header>
        </div>
      }
    >
      <hr />
      <LatestProjects />
    </Page>
  )
}

Project.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Project
