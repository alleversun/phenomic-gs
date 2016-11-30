import React, { PropTypes } from "react"
import { Link } from "phenomic"
import Svg from "react-svg-inline"

import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"

import styles from "./index.css"


class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const menu = [
      {url: '/', label: 'Home'},
      {url: 'process', label: 'Process'},
      {url: 'projects', label: 'Projects'},
      {url: 'blog', label: 'Blog'}
    ];

    return (
      <header className={ styles.header }>
        <nav className={ styles.nav }>
          <div className={ styles.navPart1 }>
            {
              menu.map((obj, key) => {

                let className = styles.link;

                if( this.context.router.isActive( obj.url) )
                  className = styles.link + " " + styles.active;

                return (
                  <Link key={ key } className={ className } to={ obj.url }>{ obj.label }</Link>
                );
              })
            }
          </div>
          <div className={ styles.navPart2 }>
            {
              this.context.metadata.pkg.twitter &&
              <a href={ `https://twitter.com/${this.context.metadata.pkg.twitter}` } className={ styles.link } target="_blank">
                <Svg svg={ twitterSvg } cleanup />
                { "Twitter" }
              </a>
            }
            {
              this.context.metadata.pkg.repository &&
              <a href={ this.context.metadata.pkg.repository } className={ styles.link } target="_blank">
                <Svg svg={ gitHubSvg } cleanup />
                { "GitHub" }
              </a>
            }
          </div>
        </nav>
      </header>
    )
  }
}

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
  router: React.PropTypes.object
}

export default Header
