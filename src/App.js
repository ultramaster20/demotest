import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import AlbumsContainer from './components/Albums/AlbumsContainer';
import PhotosContainer from './components/Photos/PhotosContainer';
import Topsecret from './components/Topsecret/Topsecret';

const App = (props) => {
	return (
		<div className='app-wrapper'>
			<Navbar />
			<div className='app-wrapper-content'>

				<Route path='/top secret/'
					render={() => <Topsecret />} />

				<Route path='/photos/:albumId?'
					render={() => <PhotosContainer />} />

				<Route path='/users'
					render={() => <UsersContainer />} />

				<Route path='/albums/:userId?'
					render={() => <AlbumsContainer />} />

			</div>
		</div>
	)
}

export default App;