import SectionHero from './components/sections/SectionHero';
import SectionSecond from './components/sections/SectionSecond';
import NavBar from './components/ui/NavBar';

function App() {
	return (
		<div className="relative flex flex-col w-full min-h-screen mx-auto">
			<NavBar />
			<SectionHero />
			<main className="flex-1 w-full px-4 mx-auto max-w-7xl lg:px-8">
				<SectionSecond />
			</main>
		</div>
	);
}

export default App;
