import React, { useEffect, useState } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import BbService from '../../Services/BbService';
import Loader from '../Loader/Loader';
import { Redirect } from 'react-router-dom';

const IndexBody = (props) => {
	const [ data, setData ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const [ err, setErr ] = useState(false);

	useEffect(() => {
		setLoading(true);
		BbService.list()
			.then((res) => {
				setData(res.data);
				setLoading(false);
			})
			.catch((e) => {
				setErr(e.response);
				setLoading(false);
			});
		return () => {
			props.setRedirect(false);
		}
	}, []);

	if (loading) return <Loader />;

	if (err) return <div className="text-danger">ERROR</div>;

	if (props.redirect) return <Redirect to="/results" />;

	return (
		<div className="cont">
			<div className="row">
				{data.map((d) => {
					return (
						<div className="col-sm-4" key={d.char_id}>
							<CharacterCard data={d} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default IndexBody;
