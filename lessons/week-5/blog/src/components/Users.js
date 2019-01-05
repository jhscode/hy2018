import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Users extends Component {
  state = {	
    users: []
  }

  getUsers = async () => {
    const res = await axios.get('/users')
    console.log(res.data.data)  // gives the users 
    return res.data.data
  }

  async componentDidMount() {
    // get users from api (GET /users)
    try {
      const users = await this.getUsers()
      this.setState({
        users
      })
    } catch(e) {
      console.log(e)
    }
  }
  render() {
    return(
      <div>
        <h2>Users</h2>
        <ul>
          {this.state.users.map( user => (
            <li key={user._id}>
              <Link to={`/users/${user._id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
        <pre>
          {JSON.stringify(this.state.users, null, 3)}
        </pre>
      </div>
    )
  }
}

export default Users