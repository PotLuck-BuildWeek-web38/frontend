import React from 'react';
import CreatePotluck from './ComponentUnit3/CreatePotluck';
import EditPotluck from './ComponentUnit3/EditPotluck';

import { Route, NavLink } from 'react-router-dom';
import Login from './ComponentUnit2/Login';
//import {Header} from './ComponentUnit3/Header';
import './ComponentUnit3/css/header.css';

function App() {
	return (
		<div>
			<div className='heading'>
				<h1>Potluck Planner</h1>

				<div className='nav-list'>
					<ul>
						<li>
							<NavLink exact to='/potluck-info'>
								Potluck Events
							</NavLink>
						</li>
						<li>
							<NavLink exact to='/create'>
								Create a Potluck{' '}
							</NavLink>
						</li>
						<li>
							<NavLink exact to='/logout'>
								Log Out
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
			<Route exact path='/' component={Login} />
			<Route exact path='/create' component={CreatePotluck} />
			<Route exact path='/edit' component={EditPotluck} />
		</div>
	);
}

export default App;
