import React, { Component } from 'react';

class Main extends Component {

  componentDidMount() {
    let endpointUrl = 'http://li468-9.members.linode.com';
    let pagesUrl = `${endpointUrl}/wp-json/wp/v2/pages`;
    let postsUrl = `${endpointUrl}/wp-json/wp/v2/posts`;

    fetch(postsUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data, "data from Main fetching posts")
        this.props.syncPosts(data)
      })
  }

  renderContent(post, i) {
    return (
      <div key={i}>
      <h2>{post.title.rendered}</h2>
      <p dangerouslySetInnerHTML={{__html: post.content.rendered}} />
      </div>
    )
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        {this.props.posts.map(this.renderContent)}
      </div>
    );
  }
}

export default Main;
