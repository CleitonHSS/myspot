const merge = require('lodash/merge');

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    API_URL: 'https://api.spotify.com/v1',
    SPOTIFY_AUTHORIZE_URL: 'https://accounts.spotify.com/authorize',
    SPOTIFY_AUTH_SCOPES: 'user-read-recently-played user-top-read playlist-modify-public',
    SPOTIFY_CLIENT_ID: '',
  },
  staging: {
    API_URL: 'https://api.spotify.com/v1',
    SPOTIFY_AUTHORIZE_URL: 'https://accounts.spotify.com/authorize',
    SPOTIFY_AUTH_SCOPES: 'user-read-recently-played user-top-read playlist-modify-public',
    SPOTIFY_CLIENT_ID: '',
  },
  localhml: {
    API_URL: 'https://api.spotify.com/v1',
    SPOTIFY_AUTHORIZE_URL: 'https://accounts.spotify.com/authorize',
    SPOTIFY_AUTH_SCOPES: 'user-read-recently-played user-top-read playlist-modify-public',
    SPOTIFY_CLIENT_ID: '',
  },
  development: {
    API_URL: 'https://api.spotify.com/v1',
    SPOTIFY_AUTHORIZE_URL: 'https://accounts.spotify.com/authorize',
    SPOTIFY_AUTH_SCOPES: 'user-read-recently-played user-top-read playlist-modify-public',
    SPOTIFY_CLIENT_ID: '',
  },
  production: {
    API_URL: 'https://api.spotify.com/v1',
    SPOTIFY_AUTHORIZE_URL: 'https://accounts.spotify.com/authorize',
    SPOTIFY_AUTH_SCOPES: 'user-read-recently-played user-top-read playlist-modify-public',
    SPOTIFY_CLIENT_ID: '',
  }
};

module.exports = merge(config.all, config[config.all.env]);
