import React from 'react';
import { shallow } from 'enzyme';
// import the dumb component for unit test
import { CommentBox } from '../../components/commentBox';
import renderer from 'react-test-renderer';

describe('CommentBox', () => {
	let component;

	beforeEach(() => {
		component = shallow(<CommentBox />);
	});

	it('renders with the correct class', () => {
		expect(component.is('.comment_box')).toBe(true);
	});

	it('renders correctly', () => {
		const tree = renderer.create(<CommentBox />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders a textarea', () => {
		expect(component.find('textarea').length).toBe(1);
	});

	it('renders a button', () => {
		expect(component.find('button').length).toBe(1);
	});

	describe('entering some text', () => {
		let textarea;
		beforeEach(() => {
			textarea = component.find('textarea');
			textarea.simulate('change', { target: { value: 'new comment' } });
		});

		it('shows the entered text', () => {
			expect(component.find('textarea').prop('value')).toBe(
				'new comment'
			);
		});

		it('shows empty field after submission', () => {
			component.simulate('submit', { preventDefault: function() {} });
			expect(component.find('textarea').prop('value')).toBe('');
		});
	});
});
