import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import IndexBody from './IndexBody/IndexBody';
import Profile from './Pages/Profile';
import SearchResults from './Pages/SearchResults';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
	const [ data, setData ] = useState([]);
	const [ redirect, setRedirect ] = useState(false);

	function search(d) {
		setData(d);
		console.log('llega');
		setRedirect(true);
	}

	return (
		<div>
			<BrowserRouter>
				<Navbar search={search} />
				<Switch>
        <Route
						exact
						path="/"
						render={(props) => <IndexBody {...props} setRedirect={setRedirect} redirect={redirect} />}
					/>
					<Route exact path="/results" render={(props) => <SearchResults {...props} data={data} />} />
					<Route
						exact
						path="/profile/:id"
						render={(props) => <Profile {...props} setRedirect={setRedirect} redirect={redirect} />}
					/>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
