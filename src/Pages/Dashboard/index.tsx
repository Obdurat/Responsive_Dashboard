import React from 'react';
import {StatBox} from '../../Components/StatBox';
import * as S from './style';

const Dashboard = () => (
	<>
		<S.boardContainer>
			<StatBox />
			<StatBox />
			<StatBox />
			<StatBox />
			<StatBox />
			<StatBox />
		</S.boardContainer>
	</>
);

export default Dashboard;
