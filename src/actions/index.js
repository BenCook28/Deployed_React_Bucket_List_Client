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
	return function(dispatch){
		axios.post(`${ROOT_URL}/signin`, {email, password})
	}
}