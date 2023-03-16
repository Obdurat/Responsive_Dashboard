import React, {useState} from 'react';
import Accordion from '../../Components/Accordion';
import * as S from './style';
import {generateCustomer} from '../../MockData/Customers';

const customers = generateCustomer();

const Invoices = () => {
	const [filter, setFilter] = useState(customers);

	const handleFilter = ({target}: React.ChangeEvent<HTMLInputElement>) => {
		if (target.value.length > 0) {
			setFilter(customers.filter(e => e.name.includes(target.value)));
			return;
		}

		setFilter(customers);
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

export default Invoices;
