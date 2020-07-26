import React from 'react';
import ProfPic from '../ProfPic/ProfPic';

const ProfBanner = (props) => {
	return (
		<div className="profBanner">
			<div className="row">
				<div className="col-sm-12" style={{ display: 'flex', justifyContent: 'center' }}>
					{props.name}
				</div>
				<div className="col-sm-12" style={{ display: 'flex', justifyContent: 'center' }}>
					<ProfPic pic={props.pic} alt={props.name} customSize={false}></ProfPic>
				</div>
			</div>
		</div>
	);
};

export default ProfBanner;
