import './scss/main.scss';
import { Provider as MainProvider } from './context/MainContext';
import { Provider as ProjectsProvider } from './context/ProjectsContext';
import MainPage from './pages/MainPage';

function App() {
	return (
		<MainProvider>
			<ProjectsProvider>
				<MainPage />
			</ProjectsProvider>
		</MainProvider>
	);
}

export default App;
