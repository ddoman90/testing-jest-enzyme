import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/app';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('App', () => {
	let component;

	beforeEach(() => {
		component = shallow(<App />);
	});

	it('renders without crashing', () => {});
});
