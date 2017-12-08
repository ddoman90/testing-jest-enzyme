import React from 'react';
import { shallow } from 'enzyme';
// import the dumb component for unit test
import { CommentList } from '../../components/commentList';
import renderer from 'react-test-renderer';

describe('CommentList', () => {
	let component;

	beforeEach(() => {
		const comments = ['new comment', 'other new comment'];
		component = shallow(<CommentList comments={comments} />);
	});

	it('renders as intended', () => {
		const tree = renderer.create(<CommentList />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders each li', () => {
		expect(component.find('li').length).toBe(2);
	});

	it('renders each li with appropriate text', () => {
		expect(component.text()).toMatch('new comment');
		expect(component.text()).toMatch('other new comment');
	});
});
