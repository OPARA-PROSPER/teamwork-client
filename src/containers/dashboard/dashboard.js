import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import CreateArticle from '../../components/articles/create/createArticles';
import UserNewArticles from '../../components/articles/view/usernewarticles/userNewArticles';
import './dashboard.css';
import img from '../../img/profile-img.jpg';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname : '',
      lastname: '',
      email : '',
      gender : '',
      department : '',
      address: '',
      role: '',
      redirect: '',
    }
  }

  componentDidMount() {
    if (this.props.location.state === undefined) {
      this.setState({
        redirect: <Redirect to="/"/>
      });

      return this.state.redirect;
    }
    fetch(`/api/v1/auth/user/${this.props.location.state.id}`, {
      headers: {
        'Authorization': `Bearer ${this.props.location.state.token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.data[0])
      this.setState({
        firstname: data.data[0].firstname,
        lastname: data.data[0].lastname,
        email: data.data[0].email,
        gender: data.data[0].gender,
        department: data.data[0].department,
        address: data.data[0].address,
        role: data.data[0].jobrole
      })
    })
    .catch(error => {
      alert(error);
    })
  }

  render() {
    return (
      <main className="row dashboard">
        {this.state.redirect}
        <aside className="col-lg-1 text-center">
          <div>
            <img src={img} alt="user"/>
          </div>

          <div>
            <h4>
              {this.state.firstname} {this.state.lastname}
            </h4>
            <mark>{this.state.role}</mark>
          </div>

          <div className="asideIcons">
            <FontAwesomeIcon icon={faEnvelopeOpenText}/>
            <span>Notification</span>
            <FontAwesomeIcon icon={faCog}/>
            <span>Setting</span>
            <FontAwesomeIcon icon={faSignOutAlt}/>
            <span>Logout</span>
          </div>
        </aside>

        <article className="col-lg createArticleSection">
          {/* <h2>Post an Article</h2> */}
          <CreateArticle userToken={this.props.location.state.token}/>
        </article>

        <article className="col-lg-3 userArticleList">
          <UserNewArticles userId={this.props.location.state.id} userToken={this.props.location.state.token}/>
        </article>
      </main>
    )
  }
}

export default Dashboard;