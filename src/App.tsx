import React from 'react';
import {useState} from 'react';
import {store} from './Redux/Store/ReduxStore';
import {Provider} from 'react-redux';
import {Header} from './Components/Header';
import reactLogo from './Assets/react.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<Provider store={store} >
			<Header />
		</Provider>
	);
}

export default App;
