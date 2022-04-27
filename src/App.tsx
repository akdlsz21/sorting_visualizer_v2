import { useState } from 'react';
import ToolBar from './components/Header';
import Sorting from './components/Sorting';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<ToolBar />
			<Sorting />
		</>
	);
}

export default App;
