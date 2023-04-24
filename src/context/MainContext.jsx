import createDataContext from './createDataContext';

const mainReducer = (state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export const { Provider, Context } = createDataContext(
	// Reducer
	mainReducer,
	// Actions
	{},
	// InitialStates
	{}
);
