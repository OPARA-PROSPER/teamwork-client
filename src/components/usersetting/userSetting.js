import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import './userSetting.css';

class UserSetting extends Component {
  render() {
    return (
      <section>
        <div className="userSettingAppearance">
          <FontAwesomeIcon icon={faTimes} onClick={this.props.hideComponent}/>
          <h2>Edit Profile</h2>
        </div>
        
        <form  className="userSettingForm">
          <div className="form-group">
            <label>Firstname</label>
            <input type="text" className="form-control" value="Prosper"/>
          </div>

          <div className="form-group">
            <label>Lastname</label>
            <input type="text" className="form-control" value="Opara"/>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" value="oparaprosper79@gmail.com"/>
          </div>

          <div className="form-group">
            <label>Gender</label>
            <input type="text" className="form-control" value="male"/>
          </div>

          <div className="form-group">
            <label>Job role</label>
            <input type="text" className="form-control" value="admin"/>
          </div>

          <div className="form-group">
            <label>Department</label>
            <input type="text" className="form-control" value="software development"/>
          </div>

          <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control" value="FUTO"/>
          </div>
        </form>
      </section>
    )
  }
}

export default UserSetting;