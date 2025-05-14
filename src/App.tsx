import './App.css';
import SectionHero from './components/sections/SectionHero';
import NavBar from './components/ui/NavBar';

function App() {
	return (
		<div className="flex flex-col min-h-screen mx-auto ">
			<NavBar />
			<main className="flex-1 w-full px-4 max-w-7xl sm:px-6 lg:px-8">
				<SectionHero />
			</main>
		</div>
	);
}

export default App;
