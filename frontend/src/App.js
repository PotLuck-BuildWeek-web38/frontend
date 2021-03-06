import React from 'react';
import CreatePotluck from './ComponentUnit3/CreatePotluck';
import EditPotluck from './ComponentUnit3/EditPotluck';
import { Route, NavLink } from 'react-router-dom';
import Login from './ComponentUnit2/Login';
import Logout from './ComponentUnit3/Logout';
import './ComponentUnit3/css/header.css'
import PotluckInfo from './ComponentUnit3/PotluckInfo';
import GuestInfo from './ComponentUnit3/guest';
import PrivateRoute from './ComponentUnit3/PrivateRoute';
import Search from './ComponentUnit3/Search'
import Potluck from './ComponentUnit3/PotLuck'
import styled from 'styled-components'
import img from './images/food5.jpg'

const StyledBody = styled.div`
background-image: url(${img});
background-repeat: no-repeat;
background-size: cover;
padding-top: 20px;
`

function App() {
	return (
		<div>
			<div className='heading'>
				<h1>Potluck Planner</h1>


            <div className="nav-list">
                <ul>
                    <li>
                        <NavLink exact to='/search'>Potlucks</NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/create'>Create</NavLink>

                    </li>
                    <li>
                        <NavLink exact to='/myevents'>My Events</NavLink> 
                    </li>
                </ul>
                <ul>
                    <li className='logout'>
                        {/* {window.localStorage.token === undefined ? (null): ( */}
                            <NavLink to="/logout">Logout</NavLink>
                         {/* )} */}
                    </li>
                </ul>
            </div>
        </div>
    <StyledBody>
      <Route exact path='/' component={Login}/>
      <PrivateRoute exact path='/myevents' component={PotluckInfo} />
      <PrivateRoute exact path='/invite/:id' component={GuestInfo}/>
      <PrivateRoute exact path='/create' component={CreatePotluck}/>
      <Route exact path='/search' component={Search}/>
      <PrivateRoute exact path='/potluck/:id' component={Potluck}/>
      <PrivateRoute exact path='/edit/:id' component={EditPotluck}/>
      <Route path='/logout' component={Logout}/>
    </StyledBody>
    </div>
  );

}

export default App;
