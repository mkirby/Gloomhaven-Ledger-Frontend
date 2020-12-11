import React from 'react'
import './App.css';
import { Route, Switch, withRouter} from 'react-router-dom'
import NavBar from './Components/NavBar'
import LedgerControls from './Components/LedgerControls'
import LedgerContainer from './Containers/LedgerContainer'
import ProfileContainer from './Containers/Profile/ProfileContainer'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => {
          return <>
            <LedgerControls />
            <LedgerContainer />
          </>
        }}/>
        <Route exact path="/signup" render={ () => {return <h3>Component: SignupContainer.js</h3>} } />
        <Route exact path="/login" render={ () => {return <h3>Component: LoginContainer.js</h3>} } />
        {/* FIXME this could be a pain point trying to make sure usernames are accurate. might be easier if url is /profile/:username */}
        <Route path="/:username" render={({match}) => {
          let username = match.params.username
          return <ProfileContainer username={username}/>
        }}/>
      </Switch>
      <Footer />
    </>
  );
}

export default withRouter(App);
