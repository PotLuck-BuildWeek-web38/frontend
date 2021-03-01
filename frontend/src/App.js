import React from 'react'
import CreatePotluck from './ComponentUnit3/CreatePotluck'
import EditPotluck from './ComponentUnit3/EditPotluck'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Route exact path='/create' component={CreatePotluck}/>
      <Route exact path='/edit' component={EditPotluck}/>
    </div>
  );
}

export default App;
