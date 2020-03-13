import React, {Component} from 'react';
import Nav from '../../../../components/nav/nav';
import img from '../../../../img/profile.png';
import './userArticleById.css';

class UserArticleById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.location.state.article.title,
      article: this.props.location.state.article.content,
      createdAt: this.props.location.state.article.createdat,
      author: this.props.location.state.article.author,
      comment: 'Awesome stuff'      
    }
    console.log(this.props);
    this.id = this.props.match.params.articleId;
    console.log(this.id)
  }

  componentDidMount() {
    //  
  }
  
  render() {
    return (
      <div className="GetUserArticleById">
        <Nav/>
        <article className="row no-gutters justify-content-center">
          <section className="col-lg-7 UserArticleById">
            <div>
              <section className="UserArticleHeading">
                <h1>{this.state.title}</h1>
                <span><strong>author: </strong>{this.state.author}</span> | <span><strong>written: </strong>{this.state.createdAt}</span>
              </section>

              <div className="content">
                {this.state.article}
              </div>
            </div>
          </section>

          <section className="col-lg UserArticleComment">
            <div className="UserArticleCommentPadder">
              <form>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Share your comment"/>
                </div>

                <button type="submit" className="btn btn-primary">Comment!</button>
              </form>

            <h3>Comments:</h3>

            <div className="commentSection">
              {/* <div> */}
                <img src={img} alt="commentor"/> <span style={{marginLeft: '.2em'}}> kodekage</span>
              {/* </div> */}
              <p className="comment">
                {this.state.comment}
              </p>
            </div>

            <div className="commentSection">
              {/* <div> */}
                <img src={img} alt="commentor"/> <span style={{marginLeft: '.2em'}}> codemon</span>
              {/* </div> */}
              <p className="comment">
                {this.state.comment}
              </p>
            </div>
          </div>
          </section>
        </article>
      </div> 
    )
  }
}

export default UserArticleById;