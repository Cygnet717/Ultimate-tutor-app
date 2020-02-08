import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import UserProvider from './context/user-provider'

describe(`App rendering`, () => {
    it(`renders without crashing`, () => {
        const div = document.createElement('div');
        ReactDOM.render(<UserProvider />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the UI as expected', () => {
        const tree= renderer
        .create(<UserProvider name="App" />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it(`renders allDecks without crashing`, () => {
        const div = document.createElement('div');
        ReactDOM.render(<UserProvider name="AllDecks"/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the allDecks as expected', () => {
        const tree= renderer
        .create(<UserProvider name="AllDecks" />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it(`renders CardResults without crashing`, () => {
        const div = document.createElement('div');
        ReactDOM.render(<UserProvider name="CardResults"/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the CardResults as expected', () => {
        const tree= renderer
        .create(<UserProvider name="CardResults" />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it(`renders Header without crashing`, () => {
        const div = document.createElement('div');
        ReactDOM.render(<UserProvider name="Header"/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the Header as expected', () => {
        const tree= renderer
        .create(<UserProvider name="Header" />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it(`renders LandingPage without crashing`, () => {
        const div = document.createElement('div');
        ReactDOM.render(<UserProvider name="LandingPage"/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the LandingPage as expected', () => {
        const tree= renderer
        .create(<UserProvider name="LandingPage" />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it(`renders LoginPage without crashing`, () => {
        const div = document.createElement('div');
        ReactDOM.render(<UserProvider name="LoginPage"/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the LoginPage as expected', () => {
        const tree= renderer
        .create(<UserProvider name="LoginPage" />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it(`renders RegisterPage without crashing`, () => {
        const div = document.createElement('div');
        ReactDOM.render(<UserProvider name="RegisterPage"/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the RegisterPage as expected', () => {
        const tree= renderer
        .create(<UserProvider name="RegisterPage" />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it(`renders SearchCards without crashing`, () => {
        const div = document.createElement('div');
        ReactDOM.render(<UserProvider name="SearchCards"/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the SearchCards as expected', () => {
        const tree= renderer
        .create(<UserProvider name="SearchCards" />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it(`renders SingleDeckView without crashing`, () => {
        const div = document.createElement('div');
        ReactDOM.render(<UserProvider name="SingleDeckView"/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the SingleDeckView as expected', () => {
        const tree= renderer
        .create(<UserProvider name="SingleDeckView" />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
    
})