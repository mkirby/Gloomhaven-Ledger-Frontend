import React from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'
import BreadcrumbNav from '../Components/BreadcrumbNav'
import ProfileControls from '../Components/ProfileControls'
import ProfilePage from '../Components/ProfilePage'
import CampaignsContainer from './CampaignsContainer'
import CharactersContainer from './CharactersContainer'
import PartiesContainer from './PartiesContainer'


function ProfileContainer(props) {
  return <div className="borders">
    <BreadcrumbNav />
    <ProfileControls />
    <Switch>
      <Route exact path={`/:username`} render={({match}) => {
        return <ProfilePage username={match.params.username}/>
      }}/>
      <Route path={`/:username/campaigns/:id`} render={() => {return <p>Campaign Show</p>}}/>
      <Route path={`/:username/campaigns`} component={CampaignsContainer}/>
      <Route path={`/:username/parties/:id`} render={() => {return <p>Party Show</p>}}/>
      <Route path={`/:username/parties`} component={PartiesContainer}/>
      <Route path={`/:username/characters/:id`} render={() => {return <p>Character Show</p>}}/>
      <Route path={`/:username/characters`} component={CharactersContainer}/>
    </Switch>
    
  </div>
}

export default withRouter(ProfileContainer)