import AboutUs from './AboutUs';
import Locations from './Locations';

const SectionFourAboutUs = () => {
	return (
		<section className="relative flex flex-col items-center justify-center w-full gap-40 py-16 lg:gap-80 lg:py-40 bg-perlas">
			<AboutUs />
			<Locations />
		</section>
	);
};

export default SectionFourAboutUs;
