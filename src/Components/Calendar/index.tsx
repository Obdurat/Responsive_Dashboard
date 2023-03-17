/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import {formatDate} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const CalendarComp = () => {
	const handleDateClick = (selected: any) => {
		const title = prompt('Please enter a new title for your event');
		const calendarApi = selected.view.calendar;
		calendarApi.unselect();

		if (title) {
			calendarApi.addEvent({
				id: `${selected.dateStr}-${title}`,
				title,
				start: selected.startStr,
				end: selected.endStr,
				allDay: selected.allDay,
			});
		}
	};

	const handleEventClick = (selected: any) => {
		if (
			window.confirm(
				`Are you sure you want to delete the event '${selected.event.title}'`,
			)
		) {
			selected.event.remove();
		}
	};

	return (
		<FullCalendar
			height='80%'
			plugins={[
				dayGridPlugin,
				timeGridPlugin,
				interactionPlugin,
			]}
			headerToolbar={{
				left: 'prev,next today',
				center: 'title',
				right: 'dayGridMonth,timeGridDay',
			}}
			initialView='dayGridMonth'
			editable
			selectable
			selectMirror
			dayMaxEvents
			select={handleDateClick}
			eventClick={handleEventClick}
		/>
	);
};

export default CalendarComp;
