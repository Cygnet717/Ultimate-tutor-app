import React from 'react';
import Header from './components/Header/Header'
import {Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import LoginPage from './components/LoginPage/LoginPage'
import RegisterPage from './components/RegisterPage/RegisterPage'

function App() {
  return (<>
    <header>
      <Header />
    </header>
    <main className='App'>
      <Switch>
        <Route exact path={'/'} component={LandingPage}/>
        <Route path={'/LoginPage'} component={LoginPage}/>
        <Route path={'/RegisterPage'} component={RegisterPage}/>
      </Switch>
    </main>
    </>
  );
}
export default App;