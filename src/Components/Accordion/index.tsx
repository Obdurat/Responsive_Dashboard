import React, {useState} from 'react';
import * as S from './style';
import {AiOutlineUnlock} from 'react-icons/ai';
import {BsShieldLock, BsFileEarmarkPerson} from 'react-icons/bs';
import {type Person} from '../../MockData/Employees';
import {type IconType} from 'react-icons/lib';

type Icons = Record<string, JSX.Element>;

const icons: Icons = {
	Admin: <AiOutlineUnlock />,
	Manager: <BsShieldLock />,
	Employee: <BsFileEarmarkPerson />,
};

const Accordion = ({name, role, ...info}: Person) => {
	const [open, setOpen] = useState(false);

	return (
		<S.accordionContainer>
			<S.accordionHeader onClick={() => {
				setOpen(prev => !prev);
			}}>
				<span>{name}</span>
				<div>
					{icons[role]}
					<span>{role}</span>
				</div>
			</S.accordionHeader>
			<S.accordionInfo open={open}>
				<S.infoContent>
					<span>{info.id}</span>
					<span>{info.phone}</span>
					<span>{info.phone}</span>
				</S.infoContent>
				<S.buttonContainer>
					<button type='button'>EDITAR</button>
					<button type='button'>REMOVER</button>
				</S.buttonContainer>
			</S.accordionInfo>
		</S.accordionContainer>
	);
};

export default Accordion;
