import React from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../src/apiConfig.js'
import { handleErrors } from './auth/api.js'
import './App.scss'
import messages from './auth/messages'

class ProfileUpdate extends React.Component {
  state = {
    profile: {
      name: '',
      location: '',
      edited: false
    },
    flashMessage: '',
  }

  handleChange = (event) => {
    const newProfile = { ...this.state.profile, [event.target.name]: event.target.value }
    this.setState({
      profile: newProfile,
    })
  }

  handleUpdate = (event, user, edited) => {
    event.preventDefault()
    const { id } = this.props
    console.log(id)
    const { name, location } = this.state.profile

    return fetch(apiUrl + `/profiles/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token token=${user.token}`
      },
      body: JSON.stringify({
        profile: {
          name: name,
          location: location
        }
      })
    })
      .then(handleErrors)
      .then(()=>{
        this.setState({ edited: true })
        this.props.history.push('/profileindex/')
      })
  }

  render() {
    if (this.state.edited === true) {
      return <Redirect to='/profiles' />
    }
    const {name, location} = this.state
    const { id, user } = this.props
    return (
      <div className="profileindex">
        <h2>Edit Profile</h2>
        {/*
        <p>Name: {this.state.profile.name}</p>
        <p>Location: {this.state.profile.location}</p>*/}
        <form>
          <label htmlFor='name'>Name</label>
          <input id='name' name='name' type="text" value={name} onChange={this.handleChange} style={{border:'solid 1px #000', width:'240px', marginLeft:'20px'}}/>

          <label htmlFor='location'>Location</label>
          <input id='location' name='location' type="text" value={location} onChange={this.handleChange} style={{border:'solid 1px #000', width:'240px', marginLeft:'20px'}}/>

          <button type="submit" onClick={(event) => this.handleUpdate(event, user)}>Update</button>
        </form>
      </div>
    )
  }
}

export default withRouter(ProfileUpdate)
