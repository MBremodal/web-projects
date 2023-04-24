import createDataContext from './createDataContext';

const mainReducer = (state, action) => {
	switch (action.type) {
		case 'change_value':
			return {value: !state.value};
		case 'change_open':
			return {open: true};

		default:
			return state;
	}
};

const handleValue = (dispatch) => () => {
	dispatch({
		type: 'change_value',
	});
};

const handleOpen = (dispatch) => () => {
	dispatch({
		type: 'change_open',
	});
};

export const {Provider, Context} = createDataContext(
	// Reducer
	mainReducer,
	// Actions
	{handleValue, handleOpen},
	// InitialStates
	{open: false}
);
