import { createStore, combineReducers, applyMiddleware } from 'redux';
import usersReduser from './users-reduser';
import thunkMiddleware from 'redux-thunk';
import albumsReduser from './albums-reduser';
import photosReduser from './photos-reduser';


let redusers = combineReducers({
	usersPage: usersReduser,
	albumsPage: albumsReduser,
	photosPage: photosReduser,
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;