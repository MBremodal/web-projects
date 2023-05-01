import createDataContext from './createDataContext';

const projectsReducer = (state, action) => {
	switch (action.type) {
		case 'open':
			return {
				openWebsite: {
					projectsIndex: action.payload.projectIndex,
					active: action.payload.active,
				},
			};
		default:
			return state;
	}
};

const handleOpen = (dispatch) => (active, projectIndex) => {
	dispatch({
		type: 'open',
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
