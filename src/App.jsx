import './scss/main.scss';
import {Provider} from './context/MainContext';
import MainPage from './pages/MainPage';

function App() {
	return (
		<Provider>
			<MainPage />
		</Provider>
	);
}

export default App;
