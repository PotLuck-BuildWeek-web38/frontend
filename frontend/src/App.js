import React from 'react';
import CreatePotluck from './ComponentUnit3/CreatePotluck';
import EditPotluck from './ComponentUnit3/EditPotluck';

import { Route, NavLink } from 'react-router-dom';
import Login from './ComponentUnit2/Login';

import Logout from './ComponentUnit3/Logout';
import './ComponentUnit3/css/header.css'
import PotluckInfo from './ComponentUnit3/PotluckInfo';
import PrivateRoute from './ComponentUnit3/PrivateRoute';


function App() {
	return (
		<div>
			<div className='heading'>
				<h1>Potluck Planner</h1>


            <div className="nav-list">
                <ul>
                    <li>
                        <NavLink exact to='/potluck-info'>Potluck Events</NavLink> 
                    </li>
                    <li>
                        <NavLink exact to='/create'>Create a Potluck </NavLink>
                    </li>
                    <li>
                        {/* {window.localStorage.token === undefined ? (null): ( */}
                            <NavLink to="/logout">Logout</NavLink>
                         {/* )} */}
                    </li>
                </ul>
            </div>
        </div>
      <Route exact path='/' component={Login}/>
      <PrivateRoute exact path='/potluck-info' component={PotluckInfo} />
      <Route exact path='/create' component={CreatePotluck}/>
      <Route exact path='/edit' component={EditPotluck}/>
      <Route path='/logout' component={Logout}/>
      
    </div>
  );

}

export default App;
