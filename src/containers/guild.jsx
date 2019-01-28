import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchGuild from '../actions/guild-actions';

class Guild extends Component {
  componentDidMount() {
    const { fetchGuild } = this.props; //eslint-disable-line
    fetchGuild({ server: 'area-52', name: 'Seven Sages' });
    fetchGuild({ server: 'stormrage', name: 'Remnants of Shadowmoon' });
  }

  renderRaidAchievements = ({ achievements }) => {
    const uldir = achievements.achievementsCompleted.includes(12537);
    const dazaralor = achievements.achievementsCompleted.includes(13320);

    return (
      <React.Fragment>
        <div>Battle of Dazaralor Complete: {dazaralor ? 'true' : 'false'}</div>
        <div>Uldir Complete: {uldir ? 'true' : 'false'}</div>
      </React.Fragment>
    );
  };

  renderGuildMembers = ({ members }) =>
    members.map(m => (
      <div key={m.character.thumbnail}>
        <img
          src={`http://render-us.worldofwarcraft.com/character/${
            m.character.thumbnail
          }`}
          alt={m.character.name}
        />
        {m.character.name}
      </div>
    ));

  renderGuild = () => {
    const { guild } = this.props;
    if (guild) {
      return Object.values(guild).map(g => (
        <React.Fragment>
          <div>{g.name}</div>
          <div>
            {this.renderRaidAchievements({ achievements: g.achievements })}
          </div>
          <div>{this.renderGuildMembers({ members: g.members })}</div>
        </React.Fragment>
      ));
    }
    return null;
  };

  render() {
    return <div>{this.renderGuild()}</div>;
  }
}

Guild.propTypes = {
  fetchGuild: PropTypes.func.isRequired,
  guild: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  guild: state.guild.data,
  fetching: state.fetching,
});

export default connect(
  mapStateToProps,
  { fetchGuild },
)(Guild);
