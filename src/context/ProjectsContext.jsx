import createDataContext from './createDataContext';

const projectsReducer = (state, action) => {
	switch (action.type) {
		case 'handle_open':
			if (state.openWebsite.active) {
				console.log('closing');
				return { ...state, openWebsite: { projectsIndex: -1, active: false } };
			}
			if (!state.openWebsite.active) {
				console.log('opening');
				return {
					...state,
					openWebsite: {
						projectsIndex: action.payload.projectIndex,
						active: true,
					},
				};
			}
		default:
			return state;
	}
};

const handleOpen = (dispatch) => (active, projectIndex) => {
	console.log('function called');
	dispatch({
		type: 'handle_open',
		payload: { active, projectIndex },
	});
};

export const { Provider, Context } = createDataContext(
	projectsReducer,
	{ handleOpen },
	{
		openWebsite: {
			projectsIndex: -1,
			active: false,
		},
	}
);
