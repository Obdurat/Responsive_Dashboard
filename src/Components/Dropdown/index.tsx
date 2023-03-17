import React from 'react';
import {AiOutlineBarChart, AiOutlineCalendar, AiOutlineHome, AiOutlineLineChart, AiOutlinePieChart} from 'react-icons/ai';
import {BsPeople, BsPersonPlus} from 'react-icons/bs';
import {MdOutlineContacts} from 'react-icons/md';
import {useSelector} from 'react-redux';
import type {RootState} from '@Store/ReduxStore';
import {TbFileInvoice} from 'react-icons/tb';
import * as S from './style';
import {useNavigate} from 'react-router-dom';

const Dropdown = () => {
	const {open, className} = useSelector((state: RootState) => state.dropdown);
	const navigate = useNavigate();

	if (!open) {
		return (<></>);
	}

	return (
		<S.dropdownList className={className} >
			<li onClick={() => {
				navigate('/');
			}}>
				<AiOutlineHome />
				<span>Dashboard</span>
			</li>
			<div>Banco de Dados</div>
			<li onClick={() => {
				navigate('/employees');
			}}>
				<BsPeople />
				<span>Gerir Funcionarios</span>
			</li>
			<li onClick={() => {
				navigate('/invoices');
			}}>
				<MdOutlineContacts />
				<span>Gerir Clientes</span>
			</li>
			<li onClick={() => {
				navigate('/invoices');
			}}>
				<TbFileInvoice />
				<span>Gerir Pagamentos</span>
			</li>
			<div>Criar</div>
			<li>
				<BsPersonPlus />
				<span>Criar Registro</span>
			</li>
			<li onClick={() => {
				navigate('/calendar');
			}}>
				<AiOutlineCalendar />
				<span>Calendario</span>
			</li>
			<div>Graficos</div>
			<li>
				<AiOutlineBarChart />
				<span>Grafico Barra</span>
			</li>
			<li>
				<AiOutlinePieChart />
				<span>Grafico Pizza</span>
			</li>
			<li>
				<AiOutlineLineChart />
				<span>Grafico Linha</span>
			</li>
		</S.dropdownList>
	);
};

export default Dropdown;
