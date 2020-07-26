import React, { useState } from 'react';
import BbService from '../../Services/BbService';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
	const [ searchInput, setSearchInput ] = useState('');
	const [ loading, setLoading ] = useState(false);

	const handleChange = (e) => {
		setSearchInput(e.target.value);
	};

	function handleSubmit(e){
		e.preventDefault();
		setLoading(true);
		BbService.getCharacterByName(searchInput)
			.then((res)=>{
				props.search(res.data);
				setLoading(false);
				setSearchInput('');
			})
			.catch((e)=>{
				console.log(e);
				setLoading(false);
			});
	}

	return (
		<nav className="navbar navbar-lights justify-content-between fixed-top">
			<Link to="/" style={{textDecoration: 'none', color: 'white'}}>
				<label className="navbar-brand ml-4">Breaking Bad Wiki</label>
			</Link>
			<form className="form-inline mr-5" onSubmit={handleSubmit}>
				<input
					className="form-control mr-sm-2"
					name="searchText"
					type="search"
					placeholder="Search"
					aria-label="Search"
					value={searchInput}
					onChange={handleChange}
				/>
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
					Search
				</button>
			</form>
			{loading && <div style={{position: 'absolute', right: '20px'}}><Loader></Loader></div>}
		</nav>
	);
};

export default Navbar;
