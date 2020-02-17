import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class UserNewArticles extends Component {
  state = {
    UserNewArticles: [{title: '', createdat: ''}]
  };

  articles = [];

  checkArticleUpdate = () => {
    setInterval(() => {
      this.articles = [];
      fetch(`/api/v1/${this.props.userId}/articles`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.props.userToken}`,
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          UserNewArticles: data.data
        })
      })

      for(let i = 0; i < this.state.UserNewArticles.length; i++) {
        this.articles.push(
          <React.Fragment  key={i}>
            <div className="article">
              <h5>{this.state.UserNewArticles[i].title}</h5>
              <p>{this.state.UserNewArticles[i].createdat}</p>
            </div>
          </React.Fragment>
        );
      }
  
    }, 10000)
  }

  componentDidMount() {
    fetch(`/api/v1/${this.props.userId}/articles`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.props.userToken}`,
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        UserNewArticles: data.data
      })

      for(let i = 0; i < this.state.UserNewArticles.length; i++) {
        this.articles.push(
          <React.Fragment  key={i}>
            <div className="article">
              <h5>
                <Link
                  to={{
                    pathname: `${this.props.pathname}/articles/${this.state.UserNewArticles[i].id}?title=${this.state.UserNewArticles[i].title.toLowerCase()}`,
                    state: {
                      article: {
                        title: this.state.UserNewArticles[i].title,
                        content: this.state.UserNewArticles[i].article,
                        author: this.state.UserNewArticles[i].author,
                        createdat: this.state.UserNewArticles[i].createdat
                      }
                    }
                  }}
                >
                  {this.state.UserNewArticles[i].title}
                </Link>
              </h5>
              <p>{this.state.UserNewArticles[i].createdat}</p>
            </div>
          </React.Fragment>
        );
      }
  
    })
    .catch(error => alert(error));

    // this.checkArticleUpdate();
  }

  componentWillUnmount() {
    this.checkArticleUpdate = null;
  }

  render() {
    // this.checkArticleUpdate();

    return (
      <div className="userNewArticles">
        {/* <h4>Your latest articles</h4> */}
        { this.articles.length !== 0 ? this.articles.map(item => item) : <h4 style={{marginTop: '1em'}}>You've not posted any article</h4>}
      </div>
    );
  }
}

export default UserNewArticles;
