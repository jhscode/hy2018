import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
  state = {
    post: null
  }

  componentDidMount() {
    this.getPost()
  }

  getPost = async () => {
    const { postId } = this.props.match.params
    const res = await axios.get(`/posts/${postId}`)
    console.log(res)
    this.setState({
      post: res.data.data[0]
    })
  }

  

  render() {
    const { post } = this.state
    if (!post) return <h2>Loading...</h2>
    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </div>
    )
  }
}

export default Post