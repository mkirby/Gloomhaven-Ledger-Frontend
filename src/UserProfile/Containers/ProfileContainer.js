import React from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'
import BreadcrumbNav from '../../Components/BreadcrumbNav'
import ProfileControls from '../Components/ProfileControls'
import ProfilePage from '../Components/ProfilePage'


function ProfileContainer(props) {
  return <div className="borders">
    <BreadcrumbNav />
    <ProfileControls />
    <Switch>
      <Route exact path={`/:username`} render={ProfilePage}/>
      <Route path={`/:username/campaigns/:id`} render={() => {return <p>Campaign Show</p>}}/>
      <Route path={`/:username/campaigns`} render={() => {return <p>Campaign Index</p>}}/>
      <Route path={`/:username/parties/:id`} render={() => {return <p>Party Show</p>}}/>
      <Route path={`/:username/parties`} render={() => {return <p>Parties Index</p>}}/>
      <Route path={`/:username/characters/:id`} render={() => {return <p>Character Show</p>}}/>
      <Route path={`/:username/characters`} render={() => {return <p>Characters Index</p>}}/>
    </Switch>
    
  </div>
}

export default withRouter(ProfileContainer)