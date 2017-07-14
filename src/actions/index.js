// //Action
// const SELECT_BAND = 'SELECT_BAND';
// //selectBand is an action creator
// export function selectBand(band) {
// 	console.log("You have selected:", band.name);
// 	return band.image;
// 	return {
// 		type: 'SELECT_BAND',
// 		payload: band
// 	};
// }
import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER } from './types';
import authReducer from '../reducers/auth_reducer';

const ROOT_URL = 'http://localhost:3000';
export const CREATE_POSTS = 'CREATE_POSTS';
// const ROOT_URL = 'http://rest.learncode.academy/api/youtubeplus';


export function createPost(props) {
	const request = axios.post(`${ROOT_URL}/posts`, props);
	return {
		type: CREATE_POSTS,
		payload: request
	};
}

export function signinUser({ email, password }){
	console.log("test test test");
	return function(dispatch){
		axios.post(`${ROOT_URL}/signin`, {email, password})
			.then(response => {
				dispatch({ type: AUTH_USER});
				console.log("hi");
				localStorage.setItem('token', response.data.token);
				browserHistory.push('/newitem');
			})
				.catch((e) => {
					console.log(e);
			});
	}
}