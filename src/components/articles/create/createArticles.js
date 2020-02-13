import React, { Component } from 'react';
import './createArticles.css';

class CreateArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      article: ''
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleArticleChange = this.handleArticleChange.bind(this);
    this.handleArticleSubmission = this.handleArticleSubmission.bind(this);
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleArticleChange(event) {
    this.setState({
      article: event.target.value
    });
  }

  handleArticleSubmission(event) {
    event.preventDefault();

    alert(JSON.stringify(this.state));
    fetch('/api/v1/articles', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.props.userToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(data => {
      if (data.status !== 'success') return alert(`There was an error: ${JSON.stringify(data.error)}`);
      alert("Your article has been successfylly published")
      this.setState({
        title: '',
        article: ''
      })
    })
    .catch(error => {
      alert(JSON.stringify(error))
    })
  }


  render() {
    return(
      <form className="createArticle" onSubmit={this.handleArticleSubmission}>
        <button type="submit" className="btn">Publish Article</button>
        <button type="button" className="btn">Post GIF</button>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={this.state.title}
            onChange={this.handleTitleChange}
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            value={this.state.article}
            onChange={this.handleArticleChange}
            placeholder="start writing..."
          />
        </div>
      </form>
    )
  }
}

export default CreateArticle;
