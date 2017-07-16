import { combineReducers } from 'redux';
// import BandsReducer from './reducer_bands';
// import SelectedBand from './reducer_selectedband';
import PostsReducer from './reducer_posts';
import {reducer as formReducer} from 'redux-form';
import authReducer from './auth_reducer';

//Define the properties of our Application State here
	const rootReducer = combineReducers({
		form: formReducer,
		auth: authReducer,
		posts: PostsReducer
		// bands: BandsReducer,
		// SelectedBand: SelectedBand
			
	});

	export default rootReducer;