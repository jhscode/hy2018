import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Posts extends Component {
  state = {	
    posts: []
  }

  getPosts = async () => {
    const res = await axios.get('/posts')
    console.log(res.data.data)  // gives the posts 
    return res.data.data
  }

  async componentDidMount() {
    // get users from api (GET /posts)
    try {
      const posts = await this.getPosts()
      this.setState({
        posts
      })
    } catch(e) {
      console.log(e)
    }
  }
  render() {
    return(
      <div>
        <h2>Posts</h2>
        <ul>
          {this.state.posts.map( post => (
            <li key={post._id}>
              <Link to={`/posts/${post._id}`}>
                {post.title}
              </Link> - {post.user.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Posts