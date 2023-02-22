import React from 'react';
import type {RootState} from '@Store/ReduxStore';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '@States/count';

export function TopBar() {
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div>
			<div>
				<button
					aria-label='Increment value'
					onClick={() => dispatch(increment())}
				>
          Increment
				</button>
				<span>{count}</span>
				<button
					aria-label='Decrement value'
					onClick={() => dispatch(decrement())}
				>
          Decrement
				</button>
			</div>
		</div>
	);
}
