import { usersAPI } from '../api/api';
const SET_USERS = 'SET_USERS';

let initialState = {
	users: [],
};

const usersReduser = (state = initialState, action) => {

	switch (action.type) {
		case SET_USERS:
			return {
				...state, users: action.users
			}

		default:
			return state;
	}
}

export const setUsers = (users) => ({ type: SET_USERS, users });

export const getUsers = () => (dispatch) => {
	usersAPI.getUsers().then(data => {
		dispatch(setUsers(data));
	});
}

export default usersReduser;