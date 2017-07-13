import React, { Component } from 'react';
import NavBarHeader from './Nav';
import Video from './video/video';
import BandList from '../containers/BandsList';

class App extends Component {
	render() {
		return (
			<div>
				<NavBarHeader />
				<BandList />
				{/*<Video />*/}
			</div>
		);
	}
}

export default App;