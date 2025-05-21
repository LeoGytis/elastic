import Footer from './components/pages/Footer';
import SectionFiveNews from './components/sections/SectionFive/SectionFiveNews';
import SectionFourAboutUs from './components/sections/SectionFour/SectionFourAboutUs';
import SectionHero from './components/sections/SectionHero';
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
				<SectionFiveNews />
			</main>
			<Footer />
		</div>
	);
}

export default App;
