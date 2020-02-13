import React, {Component} from 'react';


class UserNewArticles extends Component {
  state = {
    UserNewArticles: [{title: '', createdat: ''}]
  };

  articles = [];

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
              <h5>{this.state.UserNewArticles[i].title}</h5>
              <p>{this.state.UserNewArticles[i].createdat}</p>
            </div>
          </React.Fragment>
        );
      }
    })
    .catch(error => alert(error));
  }

  render() {
    

    return (
      <div className="userNewArticles">
        {/* <h4>Your latest articles</h4> */}
        {this.articles.map(item => item)}
      </div>
    );
  }
}

export default UserNewArticles;
