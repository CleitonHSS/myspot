

const SPOTIFY_LOGIN = `${process.env.SPOTIFY_AUTHORIZE_URL}?client_id=${process.env.SPOTIFY_CLIENT_ID}
&redirect_uri=${process.env.SPOTIFY_CALLBACK_URL}&scope=${process.env.SPOTIFY_AUTH_SCOPES.join("%20")}
&response_type=token&show_dialog=true`

export default SPOTIFY_LOGIN;