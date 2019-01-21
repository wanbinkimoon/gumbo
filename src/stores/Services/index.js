export const SERVICES = {
  STORE_TOKEN: 'gumbo/SERVICES/STORE_TOKEN',
};

export function storeToken(token, service) {
  return {
    type: SERVICES.STORE_TOKEN,
    token,
    service,
  };
}

const initialState = {
  spotify: {
    // token:
    //   'BQAy6i0RGnSFQRAOLkd-03yg0-qRvqfMz7nC-sJ6JfY4ImF6MXH5ROoRYtcLce-3MqDGth9z8oFKdV7BkNC1a_r8QQh8_kdh4hhGCwpIeVtVXGSkEtBNomgpxQeGfBi7Ysjmpo2iZMTeVw',
    token: null,
    url: 'https://api.spotify.com/v1/',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SERVICES.STORE_TOKEN:
      return {
        ...state,
        [action.service]: {
          ...state[action.service],
          token: action.token,
        },
      };
    default:
      return state;
  }
};
