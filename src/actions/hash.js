
export const SET_HASH = 'SET_HASH'

export const getHash = windowHash => (dispatch)=> {
  const hash = windowHash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {}).access_token;

  window.location.hash=""

  const action = {
    type: SET_HASH,
    hash
  };

  dispatch(action);
};

export default {
  getHash
};
