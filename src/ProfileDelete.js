import React from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './apiConfig.js'


class ProfileDelete extends React.Component{
  state = {
    deleted: false
  }
    handleDelete = event => {
      event.preventDefault()
      const { id } = this.props
      const user = this.props.user

      return fetch(apiUrl + `/profiles/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Token token=${user.token}`
        }
      }).then(()=>{
        this.setState({ deleted: true })
        this.props.history.push('/profileindex/')
      })
    }
    render(){
      if (this.state.deleted === true) {
        return <Redirect to='/profiles' />
      }
      return (
        <React.Fragment>
          <form onSubmit={this.handleDelete}>
            <button type="submit">Delete</button>
          </form>
        </React.Fragment>
      )
    }
}

export default withRouter(ProfileDelete)
