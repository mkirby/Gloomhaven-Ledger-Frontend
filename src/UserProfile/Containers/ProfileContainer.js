import React from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

import BreadcrumbNav from '../Components/BreadcrumbNav'
import ProfileControls from '../Components/ProfileControls'
import ProfilePage from '../Components/ProfilePage'
import CampaignsContainer from './CampaignsContainer'
import CampaignPage from './CampaignPage'
import CharactersContainer from './CharactersContainer'
import PartiesContainer from './PartiesContainer'
import PartyPage from './PartyPage'
import CharacterPage from './CharacterPage'

function ProfileContainer(props) {
  const { username } = props.user
  return <div className="borders">
    <BreadcrumbNav />
    <ProfileControls />
    <Switch>
      <Route exact path={`/${username}`} component={ProfilePage}/>
      <Route path={`/${username}/campaigns/:id`} component={CampaignPage}/>
      <Route path={`/${username}/campaigns`} component={CampaignsContainer}/>
      <Route path={`/${username}/parties/:id`} component={PartyPage}/>
      <Route path={`/${username}/parties`} component={PartiesContainer}/>
      <Route path={`/${username}/characters/:id`} component={CharacterPage}/>
      <Route path={`/${username}/characters`} component={CharactersContainer}/>
    </Switch>
    
  </div>
}

function mapStateToProps(state) {
  const { user } = state.authentication
  return { user }
}

const actionCreators = {
  // TODO import action creators as necessary
}

export default withRouter(connect(mapStateToProps, actionCreators)(ProfileContainer))