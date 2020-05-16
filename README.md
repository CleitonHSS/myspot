# myspot

A React/ReduxWebpack App That Consumes Spotify's APIs

## Getting Started

- Register an application with Spotify
Go to the Dashboard page at the Spotify Developer website, and click on ‘My New App.” Be sure to write down the Client ID from your application.
https://developer.spotify.com/dashboard/applications

- Clone repository

- cd myspot

### Installing

-  Update myspot private/_env.config.js
Change private/_env.config.js to private/env.config.js and paste your Spotify Clioent ID from step 1 in the SPOTIFY_CLIENT_ID feild.
```
const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    API_URL: 'https://api.spotify.com/v1',
    SPOTIFY_AUTHORIZE_URL: 'https://accounts.spotify.com/authorize',
    SPOTIFY_CLIENT_ID: '36rtxxxxxxxxxxxxxxxxxg924',
    SPOTIFY_AUTH_SCOPES:[
      "user-top-read",
      "user-read-currently-playing",
      "user-read-playback-state",
    ]
  },
  
```
- Install dependencies & run locally

```
npm install
```

## Running

Runs the app in the development mode.
Open http://localhost:8111 to view it in the browser.

```
npm start
```



