import React from 'react';
import Header from './components/Header/Header'
import {Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'

function App() {
  return (<>
    <header>
      <Header />
    </header>
    <main className='App'>
      <Switch>
        <Route exact path={'/'} component={LandingPage}/>
        <Route path={'/Login'}/>
        <Route path={'/Register'}/>
      </Switch>
    </main>
    </>
  );
}
export default App;