import React from 'react';
import Header from './components/Header/Header'
import {Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import LoginPage from './components/LoginPage/LoginPage'
import RegisterPage from './components/RegisterPage/RegisterPage'
import SearchCards from './components/SearchCards/SearchCards'
import AllDecks from './components/AllDecks/AllDecks'
import SingleDeckView from './components/SingleDeckView/SingleDeckView'
import UserProvider from './context/user-context'


function App() {

  return (
  <UserProvider>
    <header>
      <Header />
    </header>
    <main className='App'>
      <Switch>
        <Route exact path={'/'} component={LandingPage}/>
        <Route path={'/LoginPage'} component={LoginPage} />
        <Route path={'/RegisterPage'} component={RegisterPage}/>
        <Route path={'/SearchCards'} component={SearchCards}/>
        <Route path={'/MyDecks'} component={AllDecks}/>
        <Route path={'/deck/:deckId'} component={SingleDeckView}/>
      </Switch>
    </main>
    </UserProvider>
  );
}
export default App;