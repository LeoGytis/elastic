import ContactUs from './ContactUs';
import Navigation from './Navigation';
import Newsletter from './Newsletter';
import SocialIcons from './SocialIcons';
import WorkTimes from './WorkTimes';

const Footer = () => {
	return (
		<footer className="flex flex-col w-full gap-10 px-6 pb-8 mx-auto lg:pb-16 pt-28 lg:gap-24 bg-perlas md:px-12 lg:pt-60 text-rubinas">
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
