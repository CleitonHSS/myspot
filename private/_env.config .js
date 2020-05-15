const merge = require('lodash/merge');

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    API_URL: 'https://api.spotify.com/v1',
    SPOTIFY_AUTHORIZE_URL: 'https://accounts.spotify.com/authorize',
    SPOTIFY_CLIENT_ID: '',
    SPOTIFY_AUTH_SCOPES:[
      "user-top-read",
      "user-read-currently-playing",
      "user-read-playback-state",
    ]
  },
  staging: {


  },
  localhml: {

  },
  development: {
    SPOTIFY_CALLBACK_URL:"http://localhost:8111/"
  },
  production: {
    SPOTIFY_CLIENT_ID: '',
    SPOTIFY_CALLBACK_URL:''
  }
};

module.exports = merge(config.all, config[config.all.env]);
