import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import {UserProvider} from '../src/context/userId-context'
import App from './App';
import './index.css';

ReactDOM.render(
<BrowserRouter>
<UserProvider>
<App />
</UserProvider>
</BrowserRouter>, 
document.getElementById('root'));