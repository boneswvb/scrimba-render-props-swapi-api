import React from 'react';

const ApiData = (props) => {
	return(
		<div>
			{props.loading ? <h1>Loading...</h1> : <p>{JSON.stringify(props.data)}</p>}
		</div>
	)
}

export default ApiData;