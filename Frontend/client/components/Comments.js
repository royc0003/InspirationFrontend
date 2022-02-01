import React from 'react';

const Comments = React.createClass({
    renderComment(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
        )
    },
    handleSubmit(e) {
        // Prevents form from refreshing
        e.preventDefault();
        console.log("submitting the form");
        const {postId} = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
    },
  render() {
    return (
      <div className="comments">
          {this.props.postComments.map(this.renderComment)}
          <form ref="commentform" className="comment-form" onSubmit={this.handleSubmit}>
              <input type="text" ref="author" placeholder="author"/>
              <input type="text" ref="comment" placeholder="comment"/>
              <input type="submit" hidden />
          </form>
      </div>
    );
  },
});

export default Comments;
