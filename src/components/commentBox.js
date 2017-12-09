import React, { Component } from 'react';
import { saveComment } from '../actions';
import { connect } from 'react-redux';

const INITIAL_STATE = {
	comment: ''
};

export class CommentBox extends Component {
	constructor(props) {
		super(props);

		this.state = INITIAL_STATE;
	}
	onChange({ target }) {
		this.setState({
			comment: target.value
		});
	}

	onSubmit(event) {
		event.preventDefault();
		this.props.saveComment(this.state.comment);
		this.setState(INITIAL_STATE);
	}

	render() {
		return (
			<form className="comment_box" onSubmit={this.onSubmit.bind(this)}>
				<textarea
					className="comment_text"
					name="comment"
					value={this.state.comment}
					onChange={this.onChange.bind(this)}
				/>
				<div>
					<button action="submit">Submit</button>
				</div>
			</form>
		);
	}
}

export default connect(null, { saveComment })(CommentBox);
