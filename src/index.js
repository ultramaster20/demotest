//import * as serviceWorker from './serviceWorker';
import React from 'react';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


//let rerenderEntireTree = (state) => {
ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
			{/*<App state={state} dispatch={store.dispatch.bind(store)} store={store} />*/}
		</Provider>
	</BrowserRouter>, document.getElementById('root'));
//}

//rerenderEntireTree();
//store.subscribe(() => {
//	//let state = store.getState();
//	rerenderEntireTree();
//});


//addPost('Ultramaster');
//serviceWorker.unregister();