import React, {Component} from 'react';
import './LandingPage.css';

export default class LandingPage extends Component {
    render() {
        return(
            <div className="pageDescription">
                <p className="mainDescription">Search all of the cards in the Magic: the Gathering universe for the perfect cards to build your deck</p>
                <p><strong>Coming Soon:</strong> Add some basic lands to your deck and test draw your first hand</p>
                <p>SignUp and start building your decks now Or use the Demo User account to see how it works</p>
                <p>User Name: DemoUser </p>
                <p>Password: DemoUser1!</p>
            </div>
        )
    }
};