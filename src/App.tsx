import React from 'react';
import {store} from './Redux/Store/ReduxStore';
import {Provider} from 'react-redux';
import {Header} from './Components/Header';
import Dashboard from './Pages/Dashboard';
import Dropdown from './Components/Dropdown';
import Employees from './Pages/Employees';

function App() {
	return (
		<Provider store={store} >
			<Header />
			<main className='content'>
				<Dropdown />
				<Employees />
			</main>
		</Provider>
	);
}

export default App;
