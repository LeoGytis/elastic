import Footer from './components/pages/Footer';
import SectionFourAboutUs from './components/sections/SectionFour/SectionFourAboutUs';
import SectionHero from './components/sections/SectionHero';
import SectionSevenNews from './components/sections/SectionSevenNews';
import SectionThreePopular from './components/sections/SectionThree/SectionThreePopular';
import SectionTwo from './components/sections/SectionTwo';
import NavBar from './components/ui/NavBar';

function App() {
	return (
		<div className="relative flex flex-col w-full min-h-screen mx-auto">
			<NavBar />
			<SectionHero />
			<main>
				<SectionTwo />
				<SectionThreePopular />
				<SectionFourAboutUs />
				<SectionSevenNews />
			</main>
			<Footer />
		</div>
	);
}

export default App;
