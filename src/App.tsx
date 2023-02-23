import React from 'react';
import {store} from './Redux/Store/ReduxStore';
import {Provider} from 'react-redux';
import {Header} from './Components/Header';
import Dashboard from './Pages/Dashboard';
import Dropdown from './Components/Dropdown';

function App() {
	return (
		<Provider store={store} >
			<Header />
			<main className='content'>
				<Dropdown />
				<Dashboard />
			</main>
		</Provider>
	);
}

export default App;
