import axios from 'axios'

export const ALBUMS_SUCCESS = 'ALBUMS_SUCCESS'
export const ALBUMS_ERROR = 'ALBUMS_ERROR'


export const albumsHandle = (token,search) => async (dispatch)=> {
  return axios.create({
    baseURL: process.env.API_URL,
    responseType: 'json',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'authorization':`Bearer ${token}`,
    },
    })
    .get(`/search?q=${search}&type=album&limit=50`)
    .then(response => dispatch({
        type: ALBUMS_SUCCESS,
        data: response.data
    }))
    .catch(error => dispatch({
        type: ALBUMS_ERROR,
        data: error.data
    }));
};

export default {
  albumsHandle
};

// {
// 	"albums": {
// 	  "href": "https://api.spotify.com/v1/search?query=Mick&type=album&market=BR&offset=5&limit=10",
// 	  "items": [
//       {
//         "album_type": "compilation",
//         "artists": [
//         {
//           "external_urls": {
//           "spotify": "https://open.spotify.com/artist/59hMeIYY3k3NoX54rrVGPv"
//           },
//           "href": "https://api.spotify.com/v1/artists/59hMeIYY3k3NoX54rrVGPv",
//           "id": "59hMeIYY3k3NoX54rrVGPv",
//           "name": "Toni Basil",
//           "type": "artist",
//           "uri": "spotify:artist:59hMeIYY3k3NoX54rrVGPv"
//         }
//         ],
//         "external_urls": {
//         "spotify": "https://open.spotify.com/album/1gFkSr7JzUqVvKcSUk4HeC"
//         },
//         "href": "https://api.spotify.com/v1/albums/1gFkSr7JzUqVvKcSUk4HeC",
//         "id": "1gFkSr7JzUqVvKcSUk4HeC",
//         "images": [
//         {
//           "height": 640,
//           "url": "https://i.scdn.co/image/ab67616d0000b2730be37380aad9fb41a4389050",
//           "width": 640
//         },
//         {
//           "height": 300,
//           "url": "https://i.scdn.co/image/ab67616d00001e020be37380aad9fb41a4389050",
//           "width": 300
//         },
//         {
//           "height": 64,
//           "url": "https://i.scdn.co/image/ab67616d000048510be37380aad9fb41a4389050",
//           "width": 64
//         }
//         ],
//         "name": "Mickey: The Very Best Of Toni Basil",
//         "release_date": "1997",
//         "release_date_precision": "year",
//         "total_tracks": 18,
//         "type": "album",
//         "uri": "spotify:album:1gFkSr7JzUqVvKcSUk4HeC"
//       }
//     ],
//     "limit": 10,
//     "next": "https://api.spotify.com/v1/search?query=Mick&type=album&market=BR&offset=15&limit=10",
//     "offset": 5,
//     "previous": "https://api.spotify.com/v1/search?query=Mick&type=album&market=BR&offset=0&limit=10",
//     "total": 7302
//   }
// }
