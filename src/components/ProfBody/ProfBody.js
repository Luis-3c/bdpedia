import React from 'react';

const ProfBody = (props) => {
	return (
		<div className="profBody">
			<ul>
				<li>Ocupation: {props.occupation} </li>
				<li>Status: {props.status} </li>
				<li>Appearance: {props.appearance} </li>
				<li>Nickname: {props.nick} </li>
				<li>Birthday: {props.birthday} </li>
			</ul>
		</div>
	);
};

export default ProfBody;
