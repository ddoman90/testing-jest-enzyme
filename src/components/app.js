import React from 'react';
import CommentBox from './commentBox';
import CommentList from './commentList';

export default props => {
	return (
		<div className="comment-box">
			<h4>Add comment</h4>
			<CommentBox />
			<CommentList />
		</div>
	);
};
