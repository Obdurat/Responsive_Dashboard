import React from 'react';
import {StatBox} from '../../Components/StatBox';
import {useSelector} from 'react-redux';
import * as S from './style';
import {type RootState} from '@Store/ReduxStore';

const Dashboard = () => {
	const {open} = useSelector((state: RootState) => state.dropdown);
	return (
		<>
			<S.boardContainer open={open}>
				<StatBox />
				<StatBox />
				<StatBox />
				<StatBox />
				<StatBox />
				<StatBox />
				<StatBox />
			</S.boardContainer>
		</>
	);
};

export default Dashboard;
