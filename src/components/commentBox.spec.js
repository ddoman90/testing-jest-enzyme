import React from 'react';
import { shallow } from 'enzyme';
import CommentBox from './commentBox';

describe('CommentBox', () => {
	let component;

	beforeEach(() => {
		component = shallow(<CommentBox />);
	});

	it('renders with the correct class', () => {
		expect(component.is('.comment_box')).toBe(true);
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
