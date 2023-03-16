import React from 'react';
import {Route, Routes as Switch} from 'react-router-dom';
import Dashboard from '../../Pages/Dashboard';
import Employees from '../../Pages/Employees';
import Invoices from '../../Pages/Invoices';

const Routes = () => (
	<Switch>
		<Route path='/' element={<Dashboard />} />
		<Route path='/employees' element={<Employees />} />
		<Route path='/invoices' element={<Invoices />} />
	</Switch>
);

export default Routes;
