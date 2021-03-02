
import React from 'react'
import CreatePotluck from './ComponentUnit3/CreatePotluck'
import EditPotluck from './ComponentUnit3/EditPotluck'
import {Route} from 'react-router-dom'
import Login from './ComponentUnit2/Login';
import PotLuck from './ComponentUnit3/PotlLuck';

function App() {
  return (
    <div>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/potluck' component={PotLuck} />
      <Route exact path='/create' component={CreatePotluck}/>
      <Route exact path='/edit' component={EditPotluck}/>
      
    </div>
  );
}

export default App;
