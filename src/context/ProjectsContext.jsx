import createDataContext from './createDataContext';
import projects from '../components/Projects/projectsArr';

const projectsReducer = (state, action) => {
	switch (action.type) {
		case 'open':
			return {
				...state,
				openWebsite: {
					projectsIndex: action.payload.projectIndex,
					active: action.payload.active,
				},
			};
		case 'handle_theme':
			return {
				...state,
				theme: {
					bgc: action.payload.bgc,
					text: action.payload.text,
					secondaryColor: action.payload.secondaryColor,
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

const handleTheme = (dispatch) => (projectIndex) => {
	if (projectIndex === -1) {
		return dispatch({
			type: 'handle_theme',
			payload: {
				bgc: '#c92d00',
				text: '#f0f0f0',
				secondaryColor: null,
			},
		});
	}
	const activePoroject = projects[projectIndex];
	dispatch({
		type: 'handle_theme',
		payload: {
			bgc: activePoroject.bgColor,
			text: activePoroject.textColor,
			secondaryColor: activePoroject.secondaryColor,
		},
	});
};

export const { Provider, Context } = createDataContext(
	projectsReducer,
	{ handleOpen, handleTheme },
	{
		openWebsite: {
			projectsIndex: -1,
			active: false,
		},
		theme: {
			bgc: '#c92d00',
			text: '#f0f0f0',
			secondaryColor: null,
		},
	}
);
