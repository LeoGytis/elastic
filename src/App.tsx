import SectionHero from './components/sections/SectionHero';
import SectionSecond from './components/sections/SectionSecond';
import SectionThirdPopular from './components/sections/SectionThirdPopular';
import NavBar from './components/ui/NavBar';

function App() {
	return (
		<div className="relative flex flex-col w-full min-h-screen mx-auto">
			<NavBar />
			<SectionHero />
			<main className="px-4_ max-w-7xl_">
				<SectionSecond />
				<SectionThirdPopular />
			</main>
		</div>
	);
}

export default App;
