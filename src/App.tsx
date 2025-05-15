import Footer from './components/pages/Footer';
import SectionFiveAboutUs from './components/sections/SectionFiveAboutUs';
import SectionFourDoctors from './components/sections/SectionFourthDoctors';
import SectionHero from './components/sections/SectionHero';
import SectionTwo from './components/sections/SectionSecond';
import SectionSevenNews from './components/sections/SectionSevenNews';
import SectionSixLocations from './components/sections/SectionSixLocations';
import SectionThreePopular from './components/sections/SectionThirdPopular';
import NavBar from './components/ui/NavBar';

function App() {
	return (
		<div className="relative flex flex-col w-full min-h-screen mx-auto">
			<NavBar />
			<SectionHero />
			<main className="px-4_ max-w-7xl_">
				<SectionTwo />
				<SectionThreePopular />
				<SectionFourDoctors />
				<SectionFiveAboutUs />
				<SectionSixLocations />
				<SectionSevenNews />
				<Footer />
			</main>
		</div>
	);
}

export default App;
