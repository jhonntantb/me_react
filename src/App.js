import { Navbar, Start } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Contact, Portfolio, Resume } from './pages';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<div>
					<Routes>
						<Route path='/' element={<Start />} />
						<Route path='/about' element={<About />} />
						<Route path='/resume' element={<Resume />} />
						<Route path='/portfolio' element={<Portfolio />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
