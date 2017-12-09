import React, { Component } from 'react';
import { connect } from 'react-redux';

export class CommentList extends Component {
	render() {
		const comments = this.props.comments || [];
		return (
			<div className="comment_list">
				{comments.map(comment => <li key={comment}>{comment}</li>)}
			</div>
		);
	}
}

export default connect(({ comments }) => {
	return { comments };
})(CommentList);
