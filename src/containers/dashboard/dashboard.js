import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faSignOutAlt, faUserCog } from '@fortawesome/free-solid-svg-icons';
import CreateArticle from '../../components/articles/create/createArticles';
import UserNewArticles from '../../components/articles/view/usernewarticles/userNewArticles';
// import UserArticleById from '../../components/articles/view/articlesById/userArticlesById';
import UserSetting from '../../components/usersetting/userSetting';
import './dashboard.css';
import img from '../../img/profile.png';

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
      UserSetting: {
        style: {
          display: 'none'
        }
      }
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.redirectToSignup = this.redirectToSignup.bind(this);
    this.showUserSettingComponent = this.showUserSettingComponent.bind(this);
    this.hideUserSettingComponent = this.hideUserSettingComponent.bind(this);
  }

  showUserSettingComponent(event) {
    this.setState({
      UserSetting: {
        style: {
          display: 'block'
        }
      }
    })
  }

  hideUserSettingComponent(event) {
    this.setState({
      UserSetting: {
        style: {
          display: 'none'
        }
      }
    })
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
      this.setState({
        firstname: data.data[0].firstname,
        lastname: data.data[0].lastname,
        email: data.data[0].email,
        gender: data.data[0].gender,
        department: data.data[0].department,
        address: data.data[0].address,
        role: data.data[0].jobrole,
      })
    })
    .catch(error => {
      alert(error);
    })
  }

  handleLogout() {
    this.props.location.state = '';

    this.setState({
      redirect: <Redirect to="/"/>
    });

    return this.redirect;
  }

  redirectToSignup() {
    this.setState({
      redirect: <Redirect to={{pathname: '/signup', state: {id: this.props.location.state.id, token: this.props.location.state.token}}}/>
    });

    return this.redirect;
  }

  render() {
    return (
      <main className="row dashboard">
        {this.state.redirect}
        <aside className="col-lg-2 text-center">
          <div>
            <img src={img} alt="user"/>
            <mark>{this.state.role}</mark>
          </div>

          <div>
            <h4>
              {this.state.firstname.toUpperCase()} {this.state.lastname.toUpperCase()}
            </h4>
          </div>

          <div>
            { this.state.role === 'admin' ? <button type="button" className="btn btn-primary"> <Link to="/signup">Add employee account</Link></button> : null }
          </div>

          <div className="asideIcons">
            <FontAwesomeIcon icon={faEnvelopeOpenText}/>
            <span>Notification</span>
            <FontAwesomeIcon icon={faUserCog} onClick={this.showUserSettingComponent}/>
            <span>Setting</span>
            <FontAwesomeIcon icon={faSignOutAlt} onClick={this.handleLogout}/>
            <span>Logout</span>
          </div>

          
        </aside>

        <article className="col-lg createArticleSection">
          {/* <h2>Post an Article</h2> */}
          <CreateArticle
            userToken={this.props.location.state !== undefined ? this.props.location.state.token : null}
          />
        </article>

        <article className="col-lg-3 userArticleList">
          <UserNewArticles
            userId={this.props.location.state !== undefined ? this.props.location.state.id : null}
            userToken={this.props.location.state !== undefined ? this.props.location.state.token : null}
            pathname={this.props.location.pathname}
          />
        </article>

        <article className="userSetting" style={this.state.UserSetting.style} /*onClick={this.hideUserSettingComponent}*/>
          <UserSetting hideComponent={this.hideUserSettingComponent}/>
        </article>
      </main>
    )
  }
}

export default Dashboard;