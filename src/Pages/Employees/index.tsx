import React, {useState} from 'react';
import Accordion from '../../Components/Accordion';
import * as S from './style';
import {generate} from '../../MockData/Employees';

const employees = generate();

const Employees = () => {
	const [filter, setFilter] = useState(employees);

	const handleFilter = ({target}: React.ChangeEvent<HTMLInputElement>) => {
		if (target.value.length > 0) {
			setFilter(employees.filter(e => e.name.includes(target.value)));
			return;
		}

		setFilter(employees);
	};

	return (
		<S.container>
			<S.content>
				<S.input type='text' placeholder='Pesquisar' onChange={handleFilter} />
				<S.list>
					{filter.map((employee, index) => (<Accordion key={index} {...employee} />))}
				</S.list>
			</S.content>
		</S.container>
	);
};

export default Employees;
