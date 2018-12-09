import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../src/apiConfig.js'
import ProfileDelete from './ProfileDelete'
import ProfileUpdate from './ProfileUpdate'

class ProfileIndex extends React.Component {
    state = {
      profiles: []
    }

    async componentDidMount() {
      const response = await axios.get('http://localhost:4741/profiles')
      this.setState({profiles:response.data.profiles})
    }

    render() {
      const profiles_rows = this.state.profiles.map(profile => {
        const {id, name, location} = profile
        const { user } = this.props
        return (
          <tr key={id} className="table-info">
            <td className="table-primary">
              <Link to={`/profileindex/${id}`}>{ name }</Link>
            </td>
            <td className="table-primary">{ location }</td>
            <td className="table-primary">
              <ProfileDelete id={id} user={user} component={ProfileDelete}/>
            </td>
          </tr>
        )
      })

      return (
        <React.Fragment>
          <div className="profileindex">
            <h1>Profiles</h1>
            <h3 style={{display: 'inline-block'}}>
              <Link to="/createNew" className="btn btn-primary">Add Profile</Link>
            </h3>
            <table className="table">
              <tbody>
                {profiles_rows}
              </tbody>
            </table>
          </div>
        </React.Fragment>
      )
    }
}

export default ProfileIndex
