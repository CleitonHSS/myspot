import axios from 'axios'

export const TRACKS_SUCCESS = 'TRACKS_SUCCESS'
export const TRACKS_ERROR = 'TRACKS_ERROR'


export const tracksHandle = (token,id) => async (dispatch)=> {
  return axios.create({
    baseURL: process.env.API_URL,
    responseType: 'json',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'authorization':`Bearer ${token}`,
    },
    })
    .get(`/albums/${id}/tracks`)
    .then(response => dispatch({
        type: TRACKS_SUCCESS,
        data: response.data
    }))
    .catch(error => dispatch({
        type: TRACKS_ERROR,
        data: error.data
    }));
};

export default {
  tracksHandle
};


// {
// 	"href": "https://api.spotify.com/v1/albums/1gFkSr7JzUqVvKcSUk4HeC/tracks?offset=0&limit=20&market=BR",
// 	"items": [
// 	  {
// 		"artists": [
// 		  {
// 			"external_urls": {
// 			  "spotify": "https://open.spotify.com/artist/59hMeIYY3k3NoX54rrVGPv"
// 			},
// 			"href": "https://api.spotify.com/v1/artists/59hMeIYY3k3NoX54rrVGPv",
// 			"id": "59hMeIYY3k3NoX54rrVGPv",
// 			"name": "Toni Basil",
// 			"type": "artist",
// 			"uri": "spotify:artist:59hMeIYY3k3NoX54rrVGPv"
// 		  }
// 		],
// 		"disc_number": 1,
// 		"duration_ms": 253199,
// 		"explicit": false,
// 		"external_urls": {
// 		  "spotify": "https://open.spotify.com/track/4Gnl12vioGd6lgIjeYcMCl"
// 		},
// 		"href": "https://api.spotify.com/v1/tracks/4Gnl12vioGd6lgIjeYcMCl",
// 		"id": "4Gnl12vioGd6lgIjeYcMCl",
// 		"is_local": false,
// 		"is_playable": true,
// 		"name": "Mickey",
// 		"preview_url": "https://p.scdn.co/mp3-preview/679246a011e9efca93921b0f2625f44414b65995?cid=774b29d4f13844c495f206cafdad9c86",
// 		"track_number": 1,
// 		"type": "track",
// 		"uri": "spotify:track:4Gnl12vioGd6lgIjeYcMCl"
// 	  },
// 	  {
// 		"artists": [
// 		  {
// 			"external_urls": {
// 			  "spotify": "https://open.spotify.com/artist/59hMeIYY3k3NoX54rrVGPv"
// 			},
// 			"href": "https://api.spotify.com/v1/artists/59hMeIYY3k3NoX54rrVGPv",
// 			"id": "59hMeIYY3k3NoX54rrVGPv",
// 			"name": "Toni Basil",
// 			"type": "artist",
// 			"uri": "spotify:artist:59hMeIYY3k3NoX54rrVGPv"
// 		  }
// 		],
// 		"disc_number": 1,
// 		"duration_ms": 241893,
// 		"explicit": false,
// 		"external_urls": {
// 		  "spotify": "https://open.spotify.com/track/3kQit3HWwFguLSwWln8n25"
// 		},
// 		"href": "https://api.spotify.com/v1/tracks/3kQit3HWwFguLSwWln8n25",
// 		"id": "3kQit3HWwFguLSwWln8n25",
// 		"is_local": false,
// 		"is_playable": true,
// 		"name": "Nobody",
// 		"preview_url": "https://p.scdn.co/mp3-preview/ea115867cf4dc39a1850ddd71390c94774f2d291?cid=774b29d4f13844c495f206cafdad9c86",
// 		"track_number": 2,
// 		"type": "track",
// 		"uri": "spotify:track:3kQit3HWwFguLSwWln8n25"
// 	  },
// 	  {
// 		"artists": [
// 		  {
// 			"external_urls": {
// 			  "spotify": "https://open.spotify.com/artist/59hMeIYY3k3NoX54rrVGPv"
// 			},
// 			"href": "https://api.spotify.com/v1/artists/59hMeIYY3k3NoX54rrVGPv",
// 			"id": "59hMeIYY3k3NoX54rrVGPv",
// 			"name": "Toni Basil",
// 			"type": "artist",
// 			"uri": "spotify:artist:59hMeIYY3k3NoX54rrVGPv"
// 		  }
// 		],
// 		"disc_number": 1,
// 		"duration_ms": 243173,
// 		"explicit": false,
// 		"external_urls": {
// 		  "spotify": "https://open.spotify.com/track/0PZLWccsyPD2WpwQeBxUUI"
// 		},
// 		"href": "https://api.spotify.com/v1/tracks/0PZLWccsyPD2WpwQeBxUUI",
// 		"id": "0PZLWccsyPD2WpwQeBxUUI",
// 		"is_local": false,
// 		"is_playable": true,
// 		"name": "Hanging Around",
// 		"preview_url": "https://p.scdn.co/mp3-preview/0d352a485a7f099325240401e4e080538ec5badf?cid=774b29d4f13844c495f206cafdad9c86",
// 		"track_number": 3,
// 		"type": "track",
// 		"uri": "spotify:track:0PZLWccsyPD2WpwQeBxUUI"
// 	  },
// 	  {
// 		"artists": [
// 		  {
// 			"external_urls": {
// 			  "spotify": "https://open.spotify.com/artist/59hMeIYY3k3NoX54rrVGPv"
// 			},
// 			"href": "https://api.spotify.com/v1/artists/59hMeIYY3k3NoX54rrVGPv",
// 			"id": "59hMeIYY3k3NoX54rrVGPv",
// 			"name": "Toni Basil",
// 			"type": "artist",
// 			"uri": "spotify:artist:59hMeIYY3k3NoX54rrVGPv"
// 		  }
// 		],
// 		"disc_number": 1,
// 		"duration_ms": 260933,
// 		"explicit": false,
// 		"external_urls": {
// 		  "spotify": "https://open.spotify.com/track/5lR92IX4CWMDsApwQQ0Faa"
// 		},
// 		"href": "https://api.spotify.com/v1/tracks/5lR92IX4CWMDsApwQQ0Faa",
// 		"id": "5lR92IX4CWMDsApwQQ0Faa",
// 		"is_local": false,
// 		"is_playable": true,
// 		"name": "Time After Time",
// 		"preview_url": "https://p.scdn.co/mp3-preview/ae4c8d48785b3701c9dccec67127f82ea2d97606?cid=774b29d4f13844c495f206cafdad9c86",
// 		"track_number": 4,
// 		"type": "track",
// 		"uri": "spotify:track:5lR92IX4CWMDsApwQQ0Faa"
// 	  },
// 	  {
// 		"artists": [
// 		  {
// 			"external_urls": {
// 			  "spotify": "https://open.spotify.com/artist/59hMeIYY3k3NoX54rrVGPv"
// 			},
// 			"href": "https://api.spotify.com/v1/artists/59hMeIYY3k3NoX54rrVGPv",
// 			"id": "59hMeIYY3k3NoX54rrVGPv",
// 			"name": "Toni Basil",
// 			"type": "artist",
// 			"uri": "spotify:artist:59hMeIYY3k3NoX54rrVGPv"
// 		  }
// 		],
// 		"disc_number": 1,
// 		"duration_ms": 200586,
// 		"explicit": false,
// 		"external_urls": {
// 		  "spotify": "https://open.spotify.com/track/2oYzNdQeJ2c89YNPDx0TtG"
// 		},
// 		"href": "https://api.spotify.com/v1/tracks/2oYzNdQeJ2c89YNPDx0TtG",
// 		"id": "2oYzNdQeJ2c89YNPDx0TtG",
// 		"is_local": false,
// 		"is_playable": true,
// 		"name": "Over My Head",
// 		"preview_url": "https://p.scdn.co/mp3-preview/95cbbb0aee91a7fccb04ee2cf5aab0c5fd994ef7?cid=774b29d4f13844c495f206cafdad9c86",
// 		"track_number": 5,
// 		"type": "track",
// 		"uri": "spotify:track:2oYzNdQeJ2c89YNPDx0TtG"
// 	  },
// 	  {
// 		"artists": [
// 		  {
// 			"external_urls": {
// 			  "spotify": "https://open.spotify.com/artist/59hMeIYY3k3NoX54rrVGPv"
// 			},
// 			"href": "https://api.spotify.com/v1/artists/59hMeIYY3k3NoX54rrVGPv",
// 			"id": "59hMeIYY3k3NoX54rrVGPv",
// 			"name": "Toni Basil",
// 			"type": "artist",
// 			"uri": "spotify:artist:59hMeIYY3k3NoX54rrVGPv"
// 		  }
// 		],
// 		"disc_number": 1,
// 		"duration_ms": 230453,
// 		"explicit": false,
// 		"external_urls": {
// 		  "spotify": "https://open.spotify.com/track/2c82e5Aq7kKyAXVBrQLb48"
// 		},
// 		"href": "https://api.spotify.com/v1/tracks/2c82e5Aq7kKyAXVBrQLb48",
// 		"id": "2c82e5Aq7kKyAXVBrQLb48",
// 		"is_local": false,
// 		"is_playable": true,
// 		"name": "Do You Wanna Dance",
// 		"preview_url": "https://p.scdn.co/mp3-preview/39381a359526f3cc385e3cf18091472bc92dcb68?cid=774b29d4f13844c495f206cafdad9c86",
// 		"track_number": 6,
// 		"type": "track",
// 		"uri": "spotify:track:2c82e5Aq7kKyAXVBrQLb48"
// 	  },
// 	  {
// 		"artists": [
// 		  {
// 			"external_urls": {
// 			  "spotify": "https://open.spotify.com/artist/59hMeIYY3k3NoX54rrVGPv"
// 			},
// 			"href": "https://api.spotify.com/v1/artists/59hMeIYY3k3NoX54rrVGPv",
// 			"id": "59hMeIYY3k3NoX54rrVGPv",
// 			"name": "Toni Basil",
// 			"type": "artist",
// 			"uri": "spotify:artist:59hMeIYY3k3NoX54rrVGPv"
// 		  }
// 		],
// 		"disc_number": 1,
// 		"duration_ms": 259666,
// 		"explicit": false,
// 		"external_urls": {
// 		  "spotify": "https://open.spotify.com/track/6rdIICFHiKkg9pdCTB6E5D"
// 		},
// 		"href": "https://api.spotify.com/v1/tracks/6rdIICFHiKkg9pdCTB6E5D",
// 		"id": "6rdIICFHiKkg9pdCTB6E5D",
// 		"is_local": false,
// 		"is_playable": true,
// 		"name": "Spacewalkin` The Dog",
// 		"preview_url": "https://p.scdn.co/mp3-preview/1f4a42f2f15ab2b25594cc4694d6d13630e27396?cid=774b29d4f13844c495f206cafdad9c86",
// 		"track_number": 7,
// 		"type": "track",
// 		"uri": "spotify:track:6rdIICFHiKkg9pdCTB6E5D"
// 	  },
// 	  {
// 		"artists": [
// 		  {
// 			"external_urls": {
// 			  "spotify": "https://open.spotify.com/artist/59hMeIYY3k3NoX54rrVGPv"
// 			},
// 			"href": "https://api.spotify.com/v1/artists/59hMeIYY3k3NoX54rrVGPv",
// 			"id": "59hMeIYY3k3NoX54rrVGPv",
// 			"name": "Toni Basil",
// 			"type": "artist",
// 			"uri": "spotify:artist:59hMeIYY3k3NoX54rrVGPv"
// 		  }
// 		],
// 		"disc_number": 1,
// 		"duration_ms": 221706,
// 		"explicit": false,
// 		"external_urls": {
// 		  "spotify": "https://open.spotify.com/track/3EhxMYslMBffVgE70TbEtt"
// 		},
// 		"href": "https://api.spotify.com/v1/tracks/3EhxMYslMBffVgE70TbEtt",
// 		"id": "3EhxMYslMBffVgE70TbEtt",
// 		"is_local": false,
// 		"is_playable": true,
// 		"name": "Shopping A to Z",
// 		"preview_url": "https://p.scdn.co/mp3-preview/b433a2d775671fa297e2468e61a6500879e6abad?cid=774b29d4f13844c495f206cafdad9c86",
// 		"track_number": 8,
// 		"type": "track",
// 		"uri": "spotify:track:3EhxMYslMBffVgE70TbEtt"
// 	  },
// 	  {
// 		"artists": [
// 		  {
// 			"external_urls": {
// 			  "spotify": "https://open.spotify.com/artist/59hMeIYY3k3NoX54rrVGPv"
// 			},
// 			"href": "https://api.spotify.com/v1/artists/59hMeIYY3k3NoX54rrVGPv",
// 			"id": "59hMeIYY3k3NoX54rrVGPv",
// 			"name": "Toni Basil",
// 			"type": "artist",
// 			"uri": "spotify:artist:59hMeIYY3k3NoX54rrVGPv"
// 		  }
// 		],
// 		"disc_number": 1,
// 		"duration_ms": 179973,
// 		"explicit": false,
// 		"external_urls": {
// 		  "spotify": "https://open.spotify.com/track/5Fwb9lzL0ngOyFbqOeva0t"
// 		},
// 		"href": "https://api.spotify.com/v1/tracks/5Fwb9lzL0ngOyFbqOeva0t",
// 		"id": "5Fwb9lzL0ngOyFbqOeva0t",
// 		"is_local": false,
// 		"is_playable": true,
// 		"name": "Space Girls",
// 		"preview_url": "https://p.scdn.co/mp3-preview/861646d3abc44f9271fb85de997ebeac76977ff4?cid=774b29d4f13844c495f206cafdad9c86",
// 		"track_number": 9,
// 		"type": "track",
// 		"uri": "spotify:track:5Fwb9lzL0ngOyFbqOeva0t"
// 	  },
// 	  {
// 		"artists": [
// 		  {
// 			"external_urls": {
// 			  "spotify": "https://open.spotify.com/artist/59hMeIYY3k3NoX54rrVGPv"
// 			},
// 			"href": "https://api.spotify.com/v1/artists/59hMeIYY3k3NoX54rrVGPv",
// 			"id": "59hMeIYY3k3NoX54rrVGPv",
// 			"name": "Toni Basil",
// 			"type": "artist",
// 			"uri": "spotify:artist:59hMeIYY3k3NoX54rrVGPv"
// 		  }
// 		],
// 		"disc_number": 1,
// 		"duration_ms": 274239,
// 		"explicit": false,
// 		"external_urls": {
// 		  "spotify": "https://open.spotify.com/track/5jXM7oHCKKz03A4fXHmEPJ"
// 		},
// 		"href": "https://api.spotify.com/v1/tracks/5jXM7oHCKKz03A4fXHmEPJ",
// 		"id": "5jXM7oHCKKz03A4fXHmEPJ",
// 		"is_local": false,
// 		"is_playable": true,
// 		"name": "You Gotta Problem",
// 		"preview_url": "https://p.scdn.co/mp3-preview/564b5c82221640c57badc80c6a1bb747a696904b?cid=774b29d4f13844c495f206cafdad9c86",
// 		"track_number": 10,
// 		"type": "track",
// 		"uri": "spotify:track:5jXM7oHCKKz03A4fXHmEPJ"
// 	  },
// 	  {
// 		"artists": [
// 		  {
// 			"external_urls": {
// 			  "spotify": "https://open.spotify.com/artist/59hMeIYY3k3NoX54rrVGPv"
// 			},
// 			"href": "https://api.spotify.com/v1/artists/59hMeIYY3k3NoX54rrVGPv",
// 			"id": "59hMeIYY3k3NoX54rrVGPv",
// 			"name": "Toni Basil",
// 			"type": "artist",
// 			"uri": "spotify:artist:59hMeIYY3k3NoX54rrVGPv"
// 		  }
// 		],
// 		"disc_number": 1,
// 		"duration_ms": 244373,
// 		"explicit": false,
// 		"external_urls": {
// 		  "spotify": "https://open.spotify.com/track/1IbQlASxB0pLgzogRxu3nc"
// 		},
// 		"href": "https://api.spotify.com/v1/tracks/1IbQlASxB0pLgzogRxu3nc",
// 		"id": "1IbQlASxB0pLgzogRxu3nc",
// 		"is_local": false,
// 		"is_playable": true,
// 		"name": "Little Red Book",
// 		"preview_url": "https://p.scdn.co/mp3-preview/a5f488c62020800d58c99cc1ebf8f648e0b9f571?cid=774b29d4f13844c495f206cafdad9c86",
// 		"track_number": 11,
// 		"type": "track",
// 		"uri": "spotify:track:1IbQlASxB0pLgzogRxu3nc"
// 	  },
// 	  {
// 		"artists": [
// 		  {
// 			"external_urls": {
// 			  "spotify": "https://open.spotify.com/artist/59hMeIYY3k3NoX54rrVGPv"
// 			},
// 			"href": "https://api.spotify.com/v1/artists/59hMeIYY3k3NoX54rrVGPv",
// 			"id": "59hMeIYY3k3NoX54rrVGPv",
// 			"name": "Toni Basil",
// 			"type": "artist",
// 			"uri": "spotify:artist:59hMeIYY3k3NoX54rrVGPv"
// 		  }
// 		],
// 		"disc_number": 1,
// 		"duration_ms": 231866,
// 		"explicit": false,
// 		"external_urls": {
// 		  "spotify": "https://open.spotify.com/track/6CESbpPeo3LO9IcpODi7e9"
// 		},
// 		"href": "https://api.spotify.com/v1/tracks/6CESbpPeo3LO9IcpODi7e9",
// 		"id": "6CESbpPeo3LO9IcpODi7e9",
// 		"is_local": false,
// 		"is_playable": true,
// 		"name": "Thief On The Loose",
// 		"preview_url": "https://p.scdn.co/mp3-preview/06d1c5a24facc214d170b13ec6f95b8608722551?cid=774b29d4f13844c495f206cafdad9c86",
// 		"track_number": 12,
// 		"type": "track",
// 		"uri": "spotify:track:6CESbpPeo3LO9IcpODi7e9"
// 	  },
// 	  {
// 		"artists": [
// 		  {
// 			"external_urls": {
// 			  "spotify": "https://open.spotify.com/artist/59hMeIYY3k3NoX54rrVGPv"
// 			},
// 			"href": "https://api.spotify.com/v1/artists/59hMeIYY3k3NoX54rrVGPv",
// 			"id": "59hMeIYY3k3NoX54rrVGPv",
// 			"name": "Toni Basil",
// 			"type": "artist",
// 			"uri": "spotify:artist:59hMeIYY3k3NoX54rrVGPv"
// 		  }
// 		],
// 		"disc_number": 1,
// 		"duration_ms": 217893,
// 		"explicit": false,
// 		"external_urls": {
// 		  "spotify": "https://open.spotify.com/track/5o3utRD2OJm7KfZs3cCq85"
// 		},
// 		"href": "https://api.spotify.com/v1/tracks/5o3utRD2OJm7KfZs3cCq85",
// 		"id": "5o3utRD2OJm7KfZs3cCq85",
// 		"is_local": false,
// 		"is_playable": true,
// 		"name": "Street Beat",
// 		"preview_url": "https://p.scdn.co/mp3-preview/0e91f74c8ff0e1d601dd7b2f85685b54b93f5f0b?cid=774b29d4f13844c495f206cafdad9c86",
// 		"track_number": 13,
// 		"type": "track",
// 		"uri": "spotify:track:5o3utRD2OJm7KfZs3cCq85"
// 	  },
// 	  {
// 		"artists": [
// 		  {
// 			"external_urls": {
// 			  "spotify": "https://open.spotify.com/artist/59hMeIYY3k3NoX54rrVGPv"
// 			},
// 			"href": "https://api.spotify.com/v1/artists/59hMeIYY3k3NoX54rrVGPv",
// 			"id": "59hMeIYY3k3NoX54rrVGPv",
// 			"name": "Toni Basil",
// 			"type": "artist",
// 			"uri": "spotify:artist:59hMeIYY3k3NoX54rrVGPv"
// 		  }
// 		],
// 		"disc_number": 1,
// 		"duration_ms": 242706,
// 		"explicit": false,
// 		"external_urls": {
// 		  "spotify": "https://open.spotify.com/track/4SXtPElmZaNZ6xvJPU0DcG"
// 		},
// 		"href": "https://api.spotify.com/v1/tracks/4SXtPElmZaNZ6xvJPU0DcG",
// 		"id": "4SXtPElmZaNZ6xvJPU0DcG",
// 		"is_local": false,
// 		"is_playable": true,
// 		"name": "Go For The Burn",
// 		"preview_url": "https://p.scdn.co/mp3-preview/5265b0de8c47184d3feba445f866e8913c922c9b?cid=774b29d4f13844c495f206cafdad9c86",
// 		"track_number": 14,
// 		"type": "track",
// 		"uri": "spotify:track:4SXtPElmZaNZ6xvJPU0DcG"
// 	  },
// 	  {
// 		"artists": [
// 		  {
// 			"external_urls": {
// 			  "spotify": "https://open.spotify.com/artist/59hMeIYY3k3NoX54rrVGPv"
// 			},
// 			"href": "https://api.spotify.com/v1/artists/59hMeIYY3k3NoX54rrVGPv",
// 			"id": "59hMeIYY3k3NoX54rrVGPv",
// 			"name": "Toni Basil",
// 			"type": "artist",
// 			"uri": "spotify:artist:59hMeIYY3k3NoX54rrVGPv"
// 		  }
// 		],
// 		"disc_number": 1,
// 		"duration_ms": 203893,
// 		"explicit": false,
// 		"external_urls": {
// 		  "spotify": "https://open.spotify.com/track/1po6FaKCIUE8AUVCjffQ4T"
// 		},
// 		"href": "https://api.spotify.com/v1/tracks/1po6FaKCIUE8AUVCjffQ4T",
// 		"id": "1po6FaKCIUE8AUVCjffQ4T",
// 		"is_local": false,
// 		"is_playable": true,
// 		"name": "Be Stiff",
// 		"preview_url": "https://p.scdn.co/mp3-preview/44bdbd8b9e648def896937eac5adbd2b3e617e6c?cid=774b29d4f13844c495f206cafdad9c86",
// 		"track_number": 15,
// 		"type": "track",
// 		"uri": "spotify:track:1po6FaKCIUE8AUVCjffQ4T"
// 	  },
// 	  {
// 		"artists": [
// 		  {
// 			"external_urls": {
// 			  "spotify": "https://open.spotify.com/artist/59hMeIYY3k3NoX54rrVGPv"
// 			},
// 			"href": "https://api.spotify.com/v1/artists/59hMeIYY3k3NoX54rrVGPv",
// 			"id": "59hMeIYY3k3NoX54rrVGPv",
// 			"name": "Toni Basil",
// 			"type": "artist",
// 			"uri": "spotify:artist:59hMeIYY3k3NoX54rrVGPv"
// 		  }
// 		],
// 		"disc_number": 1,
// 		"duration_ms": 262213,
// 		"explicit": false,
// 		"external_urls": {
// 		  "spotify": "https://open.spotify.com/track/1BRHPbrNuY0clG3rvuUKG1"
// 		},
// 		"href": "https://api.spotify.com/v1/tracks/1BRHPbrNuY0clG3rvuUKG1",
// 		"id": "1BRHPbrNuY0clG3rvuUKG1",
// 		"is_local": false,
// 		"is_playable": true,
// 		"name": "Easy For You To Say",
// 		"preview_url": "https://p.scdn.co/mp3-preview/ef5daf84e4b0f46487c1cbb4a2f54da6e8b3745d?cid=774b29d4f13844c495f206cafdad9c86",
// 		"track_number": 16,
// 		"type": "track",
// 		"uri": "spotify:track:1BRHPbrNuY0clG3rvuUKG1"
// 	  },
// 	  {
// 		"artists": [
// 		  {
// 			"external_urls": {
// 			  "spotify": "https://open.spotify.com/artist/59hMeIYY3k3NoX54rrVGPv"
// 			},
// 			"href": "https://api.spotify.com/v1/artists/59hMeIYY3k3NoX54rrVGPv",
// 			"id": "59hMeIYY3k3NoX54rrVGPv",
// 			"name": "Toni Basil",
// 			"type": "artist",
// 			"uri": "spotify:artist:59hMeIYY3k3NoX54rrVGPv"
// 		  }
// 		],
// 		"disc_number": 1,
// 		"duration_ms": 313119,
// 		"explicit": false,
// 		"external_urls": {
// 		  "spotify": "https://open.spotify.com/track/3mjUn165XhDD2nI2Fl91fS"
// 		},
// 		"href": "https://api.spotify.com/v1/tracks/3mjUn165XhDD2nI2Fl91fS",
// 		"id": "3mjUn165XhDD2nI2Fl91fS",
// 		"is_local": false,
// 		"is_playable": true,
// 		"name": "Mickey - Spanish",
// 		"preview_url": "https://p.scdn.co/mp3-preview/76f441303cf76247207775fc557d85b1c7f98875?cid=774b29d4f13844c495f206cafdad9c86",
// 		"track_number": 17,
// 		"type": "track",
// 		"uri": "spotify:track:3mjUn165XhDD2nI2Fl91fS"
// 	  },
// 	  {
// 		"artists": [
// 		  {
// 			"external_urls": {
// 			  "spotify": "https://open.spotify.com/artist/59hMeIYY3k3NoX54rrVGPv"
// 			},
// 			"href": "https://api.spotify.com/v1/artists/59hMeIYY3k3NoX54rrVGPv",
// 			"id": "59hMeIYY3k3NoX54rrVGPv",
// 			"name": "Toni Basil",
// 			"type": "artist",
// 			"uri": "spotify:artist:59hMeIYY3k3NoX54rrVGPv"
// 		  }
// 		],
// 		"disc_number": 1,
// 		"duration_ms": 297439,
// 		"explicit": false,
// 		"external_urls": {
// 		  "spotify": "https://open.spotify.com/track/0Fk6NsRI3bTGLLrX5XTRrv"
// 		},
// 		"href": "https://api.spotify.com/v1/tracks/0Fk6NsRI3bTGLLrX5XTRrv",
// 		"id": "0Fk6NsRI3bTGLLrX5XTRrv",
// 		"is_local": false,
// 		"is_playable": true,
// 		"name": "Mickey - 12' version",
// 		"preview_url": "https://p.scdn.co/mp3-preview/5436555589b44e8a0319b9ffb68dd4fe56a818cb?cid=774b29d4f13844c495f206cafdad9c86",
// 		"track_number": 18,
// 		"type": "track",
// 		"uri": "spotify:track:0Fk6NsRI3bTGLLrX5XTRrv"
// 	  }
// 	],
// 	"limit": 20,
// 	"next": null,
// 	"offset": 0,
// 	"previous": null,
// 	"total": 18
//   }