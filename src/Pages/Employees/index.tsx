import React from 'react';
import Accordion from '../../Components/Accordion';
import {generate} from '../../MockData/Employees';

const employees = generate();

const Employees = () => (
	<>
		<div></div>
		<div>
			{employees.map((employee, index) => (<Accordion key={index} {...employee} />))}
		</div>
	</>
);

export default Employees;
