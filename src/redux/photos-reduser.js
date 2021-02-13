import { usersAPI } from '../api/api';
const SET_PHOTOS = 'SET_PHOTOS';

let initialState = {
	photos: [],
};

const photosReduser = (state = initialState, action) => {

	switch (action.type) {
		case SET_PHOTOS:
			return {
				...state, photos: action.photos
			}

		default:
			return state;
	}
}

export const setPhotos = (photos) => ({ type: SET_PHOTOS, photos });

export const getPhotos = (phId) => (dispatch) => {
	usersAPI.getPhotos(phId).then(data => {
		dispatch(setPhotos(data));
	});
}

export default photosReduser;