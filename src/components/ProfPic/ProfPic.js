import React from 'react';

const ProfPic = (props) => {
	return (
		<div
			className={!props.customSize ? 'profPic profPicSize' : 'profPic profPicSize2'}
			title={props.alt}
			style={{
				backgroundImage: `url(${props.pic})`,
				backgroundSize: 'cover'
			}}
		/>
	);
};

export default ProfPic;
