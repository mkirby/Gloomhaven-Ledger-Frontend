import React from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'
import BreadcrumbNav from '../../Components/BreadcrumbNav'
import ProfileControls from '../../Components/ProfileControls'


function ProfileContainer(props) {
  return <div className="borders">
    <BreadcrumbNav />
    <ProfileControls />
    <h3>Component: ProfileContainer.js</h3>

    <Switch>
      <Route exact path={`/${props.username}`} render={() => {
        // TODO if real username render page
        // TODO otherwise render somethign else
        return <p>Username: {props.username}</p>
      }}/>
      <Route path={`/${props.username}/campaigns/:id`} render={() => {return <p>Campaign Show</p>}}/>
      <Route path={`/${props.username}/campaigns`} render={() => {return <p>Campaign Index</p>}}/>
      <Route path={`/${props.username}/parties/:id`} render={() => {return <p>Party Show</p>}}/>
      <Route path={`/${props.username}/parties`} render={() => {return <p>Parties Index</p>}}/>
      <Route path={`/${props.username}/characters/:id`} render={() => {return <p>Character Show</p>}}/>
      <Route path={`/${props.username}/characters`} render={() => {return <p>Characters Index</p>}}/>
    </Switch>
    
  </div>
}

export default withRouter(ProfileContainer)