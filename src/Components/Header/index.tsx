import React from 'react';
import type {RootState} from '@Store/ReduxStore';
import {useSelector, useDispatch} from 'react-redux';
import {BiMoon} from 'react-icons/bi';
import {RxHamburgerMenu} from 'react-icons/rx';
import mike from '../../Assets/user.jpeg';
import * as S from './style';
import {toogle, className} from '@States/dropDown';

export function Header() {
	const open = useSelector((state: RootState) => state.dropdown.value);
	const dispatch = useDispatch();

	const handleClick = () => {
		if (!open) {
			dispatch(className('dropdown-animate'));
			dispatch(toogle());
			return;
		}

		dispatch(className('dropdown-animate-backwards'));
		setTimeout(() => dispatch(toogle()), 600);
	};

	return (
		<S.headerContainer>
			<S.menuButton>
				<RxHamburgerMenu onClick={handleClick} />
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
