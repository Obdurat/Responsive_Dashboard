import React from 'react';
import {store} from './Redux/Store/ReduxStore';
import {Provider} from 'react-redux';
import {Header} from './Components/Header';
import Dashboard from './Pages/Dashboard';

function App() {
	return (
		<Provider store={store} >
			<Header />
			<main className='content'>
				<Dashboard />
			</main>
		</Provider>
	);
}

export default App;
