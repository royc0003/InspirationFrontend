import React from "react";
// Bootstrap related components
import { Col, Stack } from "react-bootstrap";
import { namedHalls } from "../pages/Questionaire1";


export function Comments(props) {
	// Destructuring props
	const { post, biography, hall, email } = props;
	return (
		<Col className="comments">
			{/* {this.props.postComments.map(this.renderComment)} */}
			<Stack gap={3}>
				<div >
					<span className="mark">
						Email:
					</span>
				</div>
				<div className="sub-comments">{email}</div>
				<div >
					<span className="mark">
						Bio:
					</span>
				</div>
				<div className="sub-comments">
					<span>
						{biography ? biography : "User does not have a bio"}
					</span>
				</div>

				<div >
					<span>
						<span className="mark">
							Hall:
						</span>
					</span>
				</div>

				<div className="sub-comments">
					<span>
						{
							namedHalls.filter((h) => h.id === hall)[0].name
						}
					</span>
				</div>
			</Stack>
			{console.log(biography)}
			{console.log(post)}

			{console.log(email)}

			{/* <form
          ref="commentForm"
          className="comment-form"
          // onSubmit={this.handleSubmit}
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form> */}
		</Col>
	);
}
// export default class Comments extends React.Component {
//   renderComment(comment, i) {
//     return (
//       <div className="comment" key={i}>
//         <p>
//           <strong>{comment.user}</strong>
//           {comment.text}
//           <button
//             className="remove-comment"
//             onClick={this.props.removeComment.bind(
//               null,
//               this.props.params.postId,
//               i
//             )}
//           >
//             &times;
//           </button>
//         </p>
//       </div>
//     );
//   }

//   handleSubmit(e) {
//     // Prevents form from refreshing
//     e.preventDefault();
//     const { postId } = this.props.params;
//     const author = this.refs.author.value;
//     const comment = this.refs.comment.value;
//     this.props.addComment(postId, author, comment);
//     this.refs.commentForm.reset();
//   }

//   render() {
//     return (
//       <div className="comments">
//         {this.props.postComments.map(this.renderComment)}
//         <form
//           ref="commentForm"
//           className="comment-form"
//           onSubmit={this.handleSubmit}
//         >
//           <input type="text" ref="author" placeholder="author" />
//           <input type="text" ref="comment" placeholder="comment" />
//           <input type="submit" hidden />
//         </form>
//       </div>
//     );
//   }
// }
