import React from 'react';
import './characterCard.css';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
	const url = `/profile/${props.data.char_id}`
	return (
		<Link to={url} style={{textDecoration: 'none'}}>
			<div className="card">
			<img className="card-img-top" src={props.data.img} alt={props.data.name} />
			<div className="card-body">
				<div className="card-title">{props.data.name}</div>
			</div>
		</div>
		</Link>
	);
};

export default CharacterCard;
