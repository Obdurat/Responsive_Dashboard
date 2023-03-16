import Chance from 'chance';
import { type Person } from './Employees';

const chance = new Chance();

export const generateCustomer = (): Person[] => {
	const out = [];
  const roles = 'Customer'
	for (let i = 0; i < 10; i++) {
		const gen = {
			id: chance.guid(),
      role: roles,
			name: chance.name(),
			phone: chance.phone(),
			address: chance.address(),
			payment: chance.floating({ fixed: 2, min: 10, max: 2000})
		};
		out.push(gen);
	}

	return out;
}