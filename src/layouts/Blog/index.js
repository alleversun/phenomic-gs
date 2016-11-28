import React from "react"
import axios from "axios"

import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"

class Blog extends React.Component {
  constructor(props){
    super(props);

	this.state = {
		title: ''
	};

	axios.get("http://kwsr.godzspeed.com/wp-json/wp/v2/posts/949")
		.then((response) => {
			this.setState({title:response.data.title.rendered});
		}).catch(err => {
			alert(err.message);
		});
  }

  render(){

	let title = 'Loading';

	if(this.state.title){
		title = this.state.title;
	}

    return (
    <Page { ...this.props }>
      <LatestPosts title={ title } />
    </Page>
    )
  }
}

export default Blog
