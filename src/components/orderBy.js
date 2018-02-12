import React from 'react';

function Orderby (props){
	return (
		<button value={props.value} onClick={props.onClick}>{props.value}</button>
	);
}

export default Orderby;