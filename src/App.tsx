import React from 'react';
import {useDispatch} from 'react-redux';
import {Header} from './Components/Header';
import Dropdown from './Components/Dropdown';
import {useSelector} from 'react-redux';
import type {RootState} from '@Store/ReduxStore';
import {toogle} from '@States/dropDown';
import Routes from './Components/Routes';

function App() {
	const {open} = useSelector((state: RootState) => state.dropdown);
	const dispatch = useDispatch();

	const handleClick = () => {
		if (open) {
			dispatch(toogle());
		}
	};

	return (
		<>
			<Header />
			<Dropdown />
			<main className='content' onClick={handleClick}>
				<Routes />
			</main>
		</>
	);
}

export default App;
