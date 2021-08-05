import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Gravatar from '../components/Gravatar';

import './styles/BadgeList.css';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
          <br />
          {this.props.badge.email}
          <br />
          {this.props.badge.instagram}
        </div>
      </div>
    );
  }
}

function BadgesList(props) {
  const badges = props.badges

  const [query, setQuery] = useState("");

  const filteredBadges = badges.filter(badges => {
    return `${badges.firstName} ${badges.lastName}`.toLowerCase().includes(query.toLowerCase())
  });

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="formgroup">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div><br />
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new Badge
        </Link>
      </div>
    )
  }

  return (
    <div className="BadgesList">
      <div className="formgroup">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div><br />
      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id}>
              <BadgesListItem badge={badge} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;