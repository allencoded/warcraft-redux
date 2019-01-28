import config from '../api/private-key';

export default function fetchGuild({ server, name }) {
  return async dispatch => {
    dispatch({ type: 'FETCH_GUILD_START' });
    try {
      const response = await fetch(
        `https://us.api.blizzard.com/wow/guild/${server}/${name}?fields=members,achievements&locale=en_US&access_token=${
          config.blizzToken
        }`,
      );
      const data = await response.json();
      dispatch({ type: 'RECEIVE_GUILD', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_GUILD_ERROR', payload: error });
    }
  };
}
