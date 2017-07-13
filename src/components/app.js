import React, { Component } from 'react';
import NavBarHeader from './Nav';
import Video from './video/video';
import BandList from '../containers/BandsList';
import Signin from './auth/signin';

class App extends Component {
	render() {
		return (
			<div>
				<NavBarHeader />
				<BandList />
				<Video />
				{this.props.children}
			</div>
		);
	}
}
export default App;