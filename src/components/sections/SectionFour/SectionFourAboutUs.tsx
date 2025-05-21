import AboutUs from './AboutUs';
import Locations from './Locations';

const SectionFourAboutUs = () => {
	return (
		<section className="relative flex flex-col gap-40 lg:gap-[363px] items-center justify-center w-full py-16 lg:py-40 bg-perlas">
			<AboutUs />
			<Locations />
		</section>
	);
};

export default SectionFourAboutUs;
