import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';
import Signin from './components/auth/signin';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import PostNewForm from './components/list/new-list-item';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory}>
			<Route path='/' component={App}>
			<Route path="signin" component={Signin} />
			<Route path ="newitem" component={PostNewForm} />
			</Route>
		</Router>
	</Provider>
	, document.querySelector('.container')
);
