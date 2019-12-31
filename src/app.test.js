import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import App from './App'
import UserProvider from './context/user-provider'
import LandingPage from '../src/components/LandingPage/LandingPage';

describe(`App rendering`, () => {
    it(`renders without crashing`, () => {
        const div = document.createElement('div');
        ReactDOM.render(<UserProvider />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('rendeers the UI as expected', () => {
        const tree= renderer
        .create(<UserProvider name="App" />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
})