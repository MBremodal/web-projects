import createDataContext from './createDataContext';

const mainReducer = (state, action) => {
	switch (action.type) {
		case 'change_value':
			return { value: !state.value };

		default:
			return state;
	}
};

const handleValue = (dispatch) => () => {
	dispatch({
		type: 'change_value',
	});
};

export const { Provider, Context } = createDataContext(
	// Reducer
	mainReducer,
	// Actions
	{ handleValue },
	// InitialStates
	{ value: true }
);
