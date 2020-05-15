 
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';
import { last } from 'lodash';

export const client = axios.create({
  baseURL: process.env.API_URL+'/search',
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'authorization':'',
  },
});


// export const ALTERAR_DATA_VENCIMENTO_SUCCESS = "ALTERAR_DATA_VENCIMENTO_SUCCESS";
// export const ALTERAR_DATA_VENCIMENTO_ERROR = "ALTERAR_DATA_VENCIMENTO_ERROR";
// export const ALTERAR_DATA_VENCIMENTO_CARREGAMENTO = "ALTERAR_DATA_VENCIMENTO_CARREGAMENTO";

// export const alterarDataVencimento = (token,search) => (dispatch) => {
//     return axios.create({
//       baseURL: process.env.API_URL,
//       responseType: 'json',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         'authorization':`Bearer ${token}`,
//       },
//       })
//         .get(`/search?q=${search}&type=artist`)
//         .then(response => dispatch({
//             type: ALTERAR_DATA_VENCIMENTO_SUCCESS,
//             data: response.data
//         }))
//         .catch(error => dispatch({
//             type: ALTERAR_DATA_VENCIMENTO_ERROR,
//             data: error.data
//         }));
// };

// export default {
//     alterarDataVencimento
// };

export const getToken = axios.create({
  baseURL: process.env.SPOTIFY_AUTHORIZE_URL,
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'authorization':'',
  },
});

export const axiosApiMiddleware = axiosMiddleware(client);

export const getActionTypes = (
  action,
  { errorSuffix = '_FAIL', successSuffix = '_SUCCESS' } = {}
) => {
  let types;
  if (typeof action.type !== 'undefined') {
    const { type } = action;
    types = [type, `${type}${successSuffix}`, `${type}${errorSuffix}`];
  } else if (typeof action.types !== 'undefined') {
    const { types: _types } = action;
    types = _types;
  } else {
    throw new Error('Action needs to have "type" or "types" key which is not null');
  }
  return types;
};

export const getErrorActionType = (action, options) => last(getActionTypes(action, options));