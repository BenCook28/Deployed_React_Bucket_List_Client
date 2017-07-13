//Action
const SELECT_BAND = 'SELECT_BAND';
//selectBand is an action creator
export function selectBand(band) {
	console.log("You have selected:", band.name);
	return {
		type: 'SELECT_BAND',
		payload: band
	};
}