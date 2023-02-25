import Chance from 'chance';

const chance = new Chance();

type Person = {
	id: string;
  role: string;
	name: string;
	phone: string;
	address: string;
};

export const generate = (): Person[] => {
	const out = [];
  const roles = ['Admin', 'Manager', 'Employee']
	for (let i = 0; i < 10; i++) {
		const gen = {
			id: chance.guid(),
      role: roles[Math.floor(Math.random() * 3)],
			name: chance.name(),
			phone: chance.phone(),
			address: chance.address(),
		};
		out.push(gen);
	}

	return out;
};
