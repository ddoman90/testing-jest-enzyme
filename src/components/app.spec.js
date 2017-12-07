import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';

describe('App', () => {
	let component;

	beforeEach(() => {
		component = mount(<App />);
	});

	it('renders without crashing', () => {});

	it('renders a commentbox', () => {
		expect(component.find('.comment_box').length).toBe(1);
	});

	it('renders a commentlist', () => {
		expect(component.find('.comment_list').length).toBe(1);
	});
});
