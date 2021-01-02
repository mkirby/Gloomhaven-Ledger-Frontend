import React from "react";
import { NavLink, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Breadcrumb } from "semantic-ui-react";
import "./BreadcrumbNav.css";

function BreadcrumbNav(props) {
  const { user } = props;
  const { username } = user;

  const crumbRoutes = [
    { path: `/${username}`, name: `Profile` },
    { path: `/${username}/campaigns`, name: `Campaigns` },
    { path: `/${username}/campaigns/:id`, name: `Campaign Name` },
    { path: `/${username}/parties`, name: `Parties` },
    { path: `/${username}/parties/:id`, name: `Party Name` },
    { path: `/${username}/characters`, name: `Characters` },
    { path: `/${username}/characters/:id`, name: `Character Name` },
  ];

  return (
    <div className="breadcrumb">
      <Breadcrumb size="huge">
        {crumbRoutes.map(({ path }, key) => (
          <Route
            exact
            path={path}
            key={key}
            render={(props) => {
              const crumbs = crumbRoutes
                // Get all routes that contain the current one
                .filter(({ path }) => props.match.path.includes(path))
                // Swap out any dynamic routes with their param values
                // and Swap the route name if on a show page
                .map(({ path, name, ...rest }) => ({
                  path: Object.keys(props.match.params).length
                    ? Object.keys(props.match.params).reduce(
                        (path, param) =>
                          path.replace(`:${param}`, props.match.params[param]),
                        path
                      )
                    : path,
                  name:
                    path.split("/").length === 4
                      ? renderBreadcrumbName(
                          path.split("/")[2],
                          parseInt(props.match.params.id),
                          user
                        )
                      : name,
                  ...rest,
                }));
              // console.log(`Generated crumbs for ${props.match.path}`);
              // crumbs.map(({ name, path }) => console.log({ name, path }));
              return renderBreadcrumbs(crumbs);
            }}
          />
        ))}
      </Breadcrumb>
    </div>
  );
}

function renderBreadcrumbs(crumbs) {
  // returns null if breadcrumb is on profile only
  // if (crumbs.length <= 1) {
  //   return null;
  // }

  return (
    <>
      {crumbs.map(({ name, path }, key) =>
        key + 1 === crumbs.length ? (
          <Breadcrumb.Section key={key} active>
            {name}
          </Breadcrumb.Section>
        ) : (
          <React.Fragment key={key}>
            <Breadcrumb.Section>
              <NavLink to={path}>{name}</NavLink>
            </Breadcrumb.Section>
            <Breadcrumb.Divider icon="right chevron" />
          </React.Fragment>
        )
      )}
    </>
  );
}

function renderBreadcrumbName(model, id, user) {
  if (model === "characters") {
    const character = user.characters.find(
      (character) => character.id === parseInt(id)
    );
    return character.name;
  } else if (model === "parties") {
    const party = user.parties.find((party) => party.id === parseInt(id));
    return party.name;
  } else if (model === "campaigns") {
    const campaign = user.campaigns.find(
      (campaign) => campaign.id === parseInt(id)
    );
    return campaign.name;
  }
}

function mapStateToProps(state) {
  const { user } = state.authentication;
  return { user };
}

const actionCreators = {
  // TODO import action creators as necessary
};

export default withRouter(
  connect(mapStateToProps, actionCreators)(BreadcrumbNav)
);
