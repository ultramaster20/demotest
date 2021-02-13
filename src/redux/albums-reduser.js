import { usersAPI } from '../api/api';
const SET_ALBUMS = 'SET_ALBUMS';

let initialState = {
	albums: [],
};

const albumsReduser = (state = initialState, action) => {

	switch (action.type) {
		case SET_ALBUMS:
			return {
				...state, albums: action.albums
			}

		default:
			return state;
	}
}

export const setAlbums = (albums) => ({ type: SET_ALBUMS, albums });

export const getAlbums = (albId) => (dispatch) => {
	usersAPI.getAlbums(albId).then(data => {
		dispatch(setAlbums(data));

	});
}

export default albumsReduser;