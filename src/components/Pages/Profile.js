import React, { useState, useEffect } from 'react';
import './Profile.css';
import ProfBanner from '../ProfBanner/ProfBanner';
import ProfBody from '../ProfBody/ProfBody';
import BbService from '../../Services/BbService';
import Loader from '../Loader/Loader';
import ProfFooter from '../ProfFooter/ProfFooter';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
	const [ info, setInfo ] = useState([]);
	const [ characters, setCharacters ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);

	function getCharacterData(){
		setLoading(true);
		BbService.getCharacter(props.match.params.id)
			.then((res) => {
				setInfo(res.data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.response);
				setLoading(false);
			});
	}

	function getCharactersMayKnow(){
		BbService.list2()
			.then((res)=>{
				setCharacters(res.data);
			})
			.catch((e)=>{
				console.log(e.response);
			});
	}
	useEffect(() => {
		getCharacterData();
		getCharactersMayKnow();
		return () => { // equivale a component willUnmount
			props.setRedirect(false);
		};
	}, [props.match.params.id]);

	if (loading) return <Loader />;
	if (error) return <div className="text-danger">{error}</div>;
	if (props.redirect) return <Redirect to="/results" />
	return (
		<div className="profCont">
			{info.map((data) => {
				return (
					<React.Fragment key={data.char_id}>
						<ProfBanner name={data.name} pic={data.img} />
						<ProfBody
							occupation={data.occupation}
							status={data.status}
							appearance={data.appearance}
							nick={data.nickname}
							birthday={data.birthday}
						/>
						<ProfFooter data={characters}></ProfFooter>	
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default Profile;
