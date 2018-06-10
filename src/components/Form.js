import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
			<input type="text" name="city" placeholder="CIty..." />
			<input type="text" name="country" placeholder="Country..."/>
			<button>GET Weather</button>
	</form>
	) 

export default Form;