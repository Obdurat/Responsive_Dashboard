import React from 'react';
import {store} from './Redux/Store/ReduxStore';
import {Provider, useDispatch} from 'react-redux';
import {Header} from './Components/Header';
import Dashboard from './Pages/Dashboard';
import Dropdown from './Components/Dropdown';
import Employees from './Pages/Employees';
import {useSelector} from 'react-redux';
import type {RootState} from '@Store/ReduxStore';
import {toogle} from '@States/dropDown';

function App() {
	const {open} = useSelector((state: RootState) => state.dropdown);
	const dispatch = useDispatch();
	return (
		<>
			<Header />
			<Dropdown />
			<main className='content' onClick={() => {
				if (open) {
					dispatch(toogle());
				}
			}}>
				<Employees />
			</main>
		</>
	);
}

export default App;
