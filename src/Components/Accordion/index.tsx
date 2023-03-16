import React, {useState} from 'react';
import * as S from './style';
import {AiOutlineUnlock} from 'react-icons/ai';
import {BsShieldLock, BsFileEarmarkPerson} from 'react-icons/bs';
import {TbCurrencyReal} from 'react-icons/tb';
import {type Person} from '../../MockData/Employees';

type Icons = Record<string, JSX.Element>;

const icons: Icons = {
	Admin: <AiOutlineUnlock />,
	Manager: <BsShieldLock />,
	Employee: <BsFileEarmarkPerson />,
	Customer: <TbCurrencyReal />,
};

const Accordion = ({name, role, payment, ...info}: Person) => {
	const [open, setOpen] = useState(false);

	return (
		<S.accordionContainer>
			<S.accordionHeader onClick={() => {
				setOpen(prev => !prev);
			}}>
				<span>{name}</span>
				<S.roleContainer>
					{icons[role]}
					<span>{payment ? payment : role}</span>
				</S.roleContainer>
			</S.accordionHeader>
			<S.accordionInfo open={open}>
				<S.infoContent>
					<table>
						<thead>
							<tr>
								<th>ID</th>
								<th>Telefone</th>
								<th>Endereço</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{info.id}</td>
								<td>{info.phone}</td>
								<td>{info.address}</td>
							</tr>
						</tbody>
					</table>
				</S.infoContent>
				<S.buttonContainer>
					<button type='button' className='edit'>EDITAR</button>
					<button type='button' className='delete'>REMOVER</button>
				</S.buttonContainer>
			</S.accordionInfo>
		</S.accordionContainer>
	);
};

export default Accordion;
