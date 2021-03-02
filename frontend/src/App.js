import './App.css';
import Login from './ComponentUnit2/Login';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route path='/login'>
					<Login />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
