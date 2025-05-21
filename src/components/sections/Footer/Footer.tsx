import ContactUs from './ContactUs';
import Navigation from './Navigation';
import Newsletter from './Newsletter';
import SocialIcons from './SocialIcons';
import WorkTimes from './WorkTimes';

const Footer = () => {
	return (
		<footer className="flex flex-col w-full gap-10 lg:gap-24 px-12 pb-16 mx-auto bg-perlas md:px-12 pt-40 lg:pt-[236px] text-rubinas">
			<div className="flex justify-between flex-1 gap-12 max-lg:flex-col">
				<ContactUs />
				<Newsletter />
			</div>

			<div className="flex gap-10 max-md:flex-col">
				<WorkTimes />
				<Navigation />
			</div>

			<SocialIcons />
		</footer>
	);
};

export default Footer;
