import React from 'react'
import './App.css';
import { Router, Route, Switch, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

import { history } from './_helpers/history'
import NavBar from './Components/NavBar'
import LedgerControls from './Components/LedgerControls'
import LedgerContainer from './Containers/LedgerContainer'
import ProfileContainer from './Containers/Profile/ProfileContainer'
import FooterContainer from './Containers/FooterContainer'
import LoginContainer from './Containers/UserAuth/LoginContainer';
import { alertActions } from './_actions/alertActions';

class App extends React.Component {
  constructor(props) {
    super(props)
    history.listen((location, action) => {
      this.props.clearAlerts()
    })
  }

  render() {
    const { alert } = this.props
    console.log("Redux Store: ",this.props.state)
    return (
      <Router history={history}>
        <NavBar />
        {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        <Switch>
          <Route exact path="/" render={() => {
            return <>
              <LedgerControls />
              <LedgerContainer />
            </>
          }}/>
          <Route exact path="/signup" render={ () => {return <h3>Component: SignupContainer.js</h3>} } />
          <Route exact path="/login" render={LoginContainer} />
          {/* FIXME this could be a pain point trying to make sure usernames are accurate. might be easier if url is /profile/:username */}
          <Route path="/:username" render={({match}) => {
            let username = match.params.username
            return <ProfileContainer username={username}/>
          }}/>
        </Switch>
        <FooterContainer />
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state
  return { alert, state }
}

const actionCreators = {
  clearAlerts: alertActions.clear
}

export default withRouter(connect(mapStateToProps, actionCreators)(App));
