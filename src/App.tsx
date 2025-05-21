import Footer from './components/sections/Footer/Footer';
import SectionFiveNews from './components/sections/SectionFive/SectionFiveNews';
import SectionFourAboutUs from './components/sections/SectionFour/SectionFourAboutUs';
import SectionHero from './components/sections/SectionHero';
import SectionThreePopular from './components/sections/SectionThree/SectionThreePopular';
import SectionTwo from './components/sections/SectionTwo';
import NavBar from './components/ui/NavBar';

function App() {
	return (
		<>
			<NavBar />
			<main>
				<SectionHero />
				<SectionTwo />
				<SectionThreePopular />
				<SectionFourAboutUs />
				<SectionFiveNews />
				<Footer />
			</main>
		</>
	);
}

export default App;
