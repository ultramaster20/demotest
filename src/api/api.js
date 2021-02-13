import * as axios from 'axios';
const instance = axios.create({
	withCredentials: true,
	baseURL: `https://jsonplaceholder.typicode.com/`,
});

export const usersAPI = {
	getUsers() {
		return instance.get(`users/`)
			.then(responce => {
				return responce.data;
			});
	},
	getAlbums(albId = 1) {
		return instance.get(`albums/?userId=${albId}`)
			.then(responce => {
				return responce.data;
			});
	},
	getPhotos(phId = 1) {
		return instance.get(`photos/?albumId=${phId}`)
			.then(responce => {
				return responce.data;
			});
	},
}