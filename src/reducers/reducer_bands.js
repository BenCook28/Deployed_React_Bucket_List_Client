import React, { Component } from 'react';
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
	{name: 'Beatles'},
	{name: 'Led Zeppelin'},
	{name: 'Bob Dylan'},
	{name: 'Radiohead'}
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