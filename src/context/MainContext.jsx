import createDataContext from './createDataContext';

const mainReducer = (state, action) => {
	switch (action.type) {
		case 'handle_open':
			return {...state, openProject: action.payload, open: true};
		case 'handle_back':
			return {...state, open: false, openProject: null};
		default:
			return state;
	}
};

const handleProjectOpen = (dispatch) => (idx) => {
	dispatch({
		type: 'handle_open',
		payload: idx,
	});
};

const handleBack = (dispatch) => () => {
	dispatch({
		type: 'handle_back',
	});
};

export const {Provider, Context} = createDataContext(
	// Reducer
	mainReducer,
	// Actions
	{handleProjectOpen, handleBack},
	// InitialStates
	{open: false, openProject: null}
);
