const initialState = {
  data: {},
  fetching: false,
  fetched: false,
  error: null,
};

const guild = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GUILD_START':
      return { ...state, fetching: true };
    case 'FETCH_GUILD_ERROR':
      return { ...state, fetching: false, error: action.payload };
    case 'RECEIVE_GUILD':
      const newGuild = { ...state.data };
      newGuild[action.payload.name] = action.payload;
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: newGuild,
      };
    default:
      return initialState;
  }
};

export default guild;
