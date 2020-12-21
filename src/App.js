import React from 'react'
import './App.css';
import { Router, Route, Switch, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

import { history } from './_helpers/history'
import { alertActions } from './_actions/alertActions';

import NavBar from './Main/NavBar'
import FooterContainer from './Main/FooterContainer'
import LedgerControls from './LedgerApp/LedgerControls'
import LedgerContainer from './LedgerApp/LedgerContainer'
import LoginContainer from './Main/Login/LoginContainer';
import ProfileContainer from './UserProfile/Containers/ProfileContainer'

class App extends React.Component {
  constructor(props) {
    super(props)
    history.listen((location, action) => {
      this.props.clearAlerts()
    })
  }

  render() {
    const { alert } = this.props
    const { username} = this.props.user
    console.log('Redux Store: ',this.props.state)
    return (
      <div className='app'>
        <Router history={history}>
          <NavBar />
          {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
          <div className='content'>
            <Switch>
              <Route exact path='/' render={() => {
                return <div >
                  <LedgerControls />
                  <LedgerContainer />
                </div>
              }}/>
              <Route exact path='/signup' render={ () => {return <h3>Component: SignupContainer.js</h3>} } />
              <Route exact path='/login' component={LoginContainer} />
              {this.props.loggedIn && <Route path={`/${username}`} component={ProfileContainer}/>}
              <Route path='*' render={ () => { return <div className='not-found'><h1>404 Not Found</h1></div>}}/>
            </Switch>
          </div>
          <FooterContainer />
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state
  const { user, loggedIn } = state.authentication
  return { alert, user, loggedIn, state }
}

const actionCreators = {
  clearAlerts: alertActions.clear
}

export default withRouter(connect(mapStateToProps, actionCreators)(App));
