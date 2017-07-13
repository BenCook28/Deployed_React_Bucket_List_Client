import React, { Component } from 'react';
import 
export default function() {
	// return [
// before challenge
// 		{name: 'Beatles'},
// 		{name: 'Led Zeppelin'},
// 		{name: 'Bob Dylan'},
// 		{name: 'Radiohead'}
// 	]
// }
var music = [
	{name: 'Beatles',
	image: <Image source ={{uri: 'http://cdn8.openculture.com/wp-content/uploads/2013/07/Abbey-Road-Album-Cover-.jpg'}}/>},
	{name: 'Led Zeppelin',
	image: <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/en/e/ef/Led_Zeppelin_-_Led_Zeppelin_%281969%29_front_cover.png'}}/>},
	{name: 'Bob Dylan',
	image: <Image source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/51R1OY7r4QL.jpg'}}/>},
	{name: 'Radiohead',
	image: <Image source={{uri: 'http://i.imgur.com/yonneTm.png'}}/>}
]
// React.render(
// 	<BootstrapTable data={music} striped={true} hover={true}>
// 	    <TableHeaderColumn dataField="name" dataSort={true}>Name</TableHeaderColumn>
//   </BootstrapTable>,
// 	document.getElementById("app")
// );
	return music;
}

// export default BandsReducer;