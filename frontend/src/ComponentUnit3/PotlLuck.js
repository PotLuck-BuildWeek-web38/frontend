// import './css/potluck.css';

const PotLuck = () => {
	return (
		<div className='heading'>
			<h1>Potluck Planner</h1>

			<div className='nav-list'>
				<ul>
					<li>
						<a href='eventInfo'>Potluck Events</a>
					</li>
					<li>
						<a href='create'>Create a Potluck </a>
					</li>
					<li>
						<a href='log-out'>Log Out</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default PotLuck;
