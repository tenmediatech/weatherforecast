import React from 'react'
import axios from 'axios'
import apiUrl from '../src/apiConfig.js'
import { Link, withRouter, Redirect } from 'react-router-dom'

class CreateNew extends React.Component {
  state = {
    profile:{
      name: '',
      location: '',
      new: false
    },
    flashMessage: ''
  }

  handleChange = (event) => {
    const newProfile = { ...this.state.profile, [event.target.name]: event.target.value }
    this.setState({
      profile: newProfile
    })
  }

  createProfile = (event, user) => {
    event.preventDefault()
    const profile = this.state.profile

    return fetch(apiUrl + '/profiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token token=${user.token}`
      },
      body: JSON.stringify({
        profile: {
          name: profile.name,
          location: profile.location
        }
      })
    }).then(()=>{
      this.setState({ new: true })
      this.props.history.push('/profileindex/')
    })
  }

  render() {
    if (this.state.new === true) {
      return <Redirect to='/profiles' />
    }
    const user = this.props.user
    return (
      <React.Fragment>
        <div className="profileindex">
          <h1>Add Profile</h1>
          <p> {this.state.flashMessage}</p>
          <form>
            <input name='name' type="text" value={this.state.profile.name} onChange={this.handleChange} placeholder='Name' style={{border:'solid 1px #000', width:'240px', marginLeft:'20px'}}/>
            <input name='location' type="text" value={this.state.profile.location} onChange={this.handleChange} placeholder='Location' style={{border:'solid 1px #000', width:'240px', marginLeft:'20px'}}/>
            <button type='submit' onClick={(event) => this.createProfile(event, user)}>Create</button>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(CreateNew)
