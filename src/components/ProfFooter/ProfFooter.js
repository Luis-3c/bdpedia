import React from 'react';
import ProfPic from '../ProfPic/ProfPic';
import { Link } from 'react-router-dom';

const ProfFooter = (props) => {
	return (
		<div className="profFooterCont">
			<p className="title">Other characters you may know</p>
			<hr />
			<div className="row">
				{props.data.map((d) => {
					return (
						<Link className="col-12 col-sm-3" to={`/profile/${d.char_id}`} key={d.char_id}>
							<ProfPic pic={d.img} alt={d.name} customSize={true} />
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default ProfFooter;
