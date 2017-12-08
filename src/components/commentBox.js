import React, { Component } from 'react';
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
				<button action="submit">Submit</button>
			</form>
		);
	}
}

export default connect(null, {})(CommentBox);
