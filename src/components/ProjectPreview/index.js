import React, { PropTypes } from "react"
import { Link } from "phenomic"

const ProjectPreview = ({ __url, title, topics, photo }) => {

  let style ={
    backgroundImage: "url(" + photo + ")"
  };

  return (
    <Link to={ __url } className="link w-100 dt hide-child cover bg-center" style={ style }>
      <div className="white dtc v-mid w-100 child bg-black-70 h5 ph3">
        <h2 className="f4 lh-title mt0 mb1">{ title }</h2>
        <h3 className="pink f5 lh-title mv0">{ topics }</h3>
      </div>
    </Link>
  )
}

ProjectPreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  topics: PropTypes.string.isRequired,
  photo: PropTypes.string,
}

export default ProjectPreview
