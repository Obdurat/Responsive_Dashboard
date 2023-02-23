import React from 'react';
import type {RootState} from '@Store/ReduxStore';
import {useSelector, useDispatch} from 'react-redux';
import {BiMoon} from 'react-icons/bi';
import {RxHamburgerMenu} from 'react-icons/rx';
import mike from '../../Assets/user.jpeg';
import * as S from './style';

export function Header() {
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<S.headerContainer>
			<S.menuButton>
				<RxHamburgerMenu />
			</S.menuButton>
			<S.buttonsContainer>
				<S.button>
					<BiMoon />
				</S.button>
				<S.button>
					<img src={mike} />
				</S.button>
			</S.buttonsContainer>
		</S.headerContainer>
	);
}
