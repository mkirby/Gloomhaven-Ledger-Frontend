import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Breadcrumb } from 'semantic-ui-react'
import './BreadcrumbNav.css'

function BreadcrumbNav(props) {
  const { username } = props.user
  const { pathname } = props.location

  const pathArray = pathname.split('/')

  let id = ""
  if (pathArray.length === 4) {
    id = pathArray[3]
  }
  // debugger

  const isProfile = pathname.startsWith(`/${username}`)
  const isCampaignIndex = pathname.startsWith(`/${username}/campaigns`)
  const isCampaignShow = pathname.startsWith(`/${username}/campaigns/${id}`)
  const isPartyIndex = pathname.startsWith(`/${username}/parties`)
  const isPartyShow = pathname.startsWith(`/${username}/parties/${id}`)
  const isCharacterIndex = pathname.startsWith(`/${username}/characters`)
  const isCharacterShow = pathname.startsWith(`/${username}/characters/${id}`)
  // console.log('pathnames', {isProfile, isCampaignIndex, isCampaignShow, isPartyIndex, isPartyShow, isCharacterIndex, isCharacterShow})

  return (
    <div className="breadcrumb">
      <Breadcrumb size='huge'>
        {isProfile && <Breadcrumb.Section>Profile</Breadcrumb.Section>}
        {isCampaignIndex && 
          <>
            <Breadcrumb.Divider icon='right chevron' />
            <Breadcrumb.Section>Campaigns</Breadcrumb.Section>
          </>
        }
        {isCampaignShow && 
          <>
            <Breadcrumb.Divider icon='right chevron' />
            <Breadcrumb.Section>{renderCampaignName(id, props.user)}</Breadcrumb.Section>
          </>
        }
        {isPartyIndex && 
          <>
            <Breadcrumb.Divider icon='right chevron' />
            <Breadcrumb.Section>Parties</Breadcrumb.Section>
          </>
        }
        {isPartyShow && 
          <>
            <Breadcrumb.Divider icon='right chevron' />
            <Breadcrumb.Section>{renderPartyName(id, props.user)}</Breadcrumb.Section>
          </>
        }
        {isCharacterIndex && 
          <>
            <Breadcrumb.Divider icon='right chevron' />
            <Breadcrumb.Section>Characters</Breadcrumb.Section>
          </>
        }
        {isCharacterShow && 
          <>
            <Breadcrumb.Divider icon='right chevron' />
            <Breadcrumb.Section>{renderCharacterName(id, props.user)}</Breadcrumb.Section>
          </>
        }
      </Breadcrumb>
    </div>
  )
}

function renderCharacterName(id, user) {
  const character = user.characters.find(character => character.id === parseInt(id))
  return character.name
}

function renderPartyName(id, user) {
  const party = user.parties.find(party => party.id === parseInt(id))
  return party.name
}

function renderCampaignName(id, user) {
  const campaign = user.campaigns.find(campaign => campaign.id === parseInt(id))
  return campaign.name
}

function mapStateToProps(state) {
  const { user } = state.authentication
  return { user }
}

const actionCreators = {
  // TODO import action creators as necessary
}

export default withRouter(connect(mapStateToProps, actionCreators)(BreadcrumbNav))