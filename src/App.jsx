import './css/main.css';
import MainPage from './pages/MainPage';
import { Provider } from './context/MainContext';

function App() {
	return (
		<Provider>
			<MainPage />
		</Provider>
	);
}

export default App;
