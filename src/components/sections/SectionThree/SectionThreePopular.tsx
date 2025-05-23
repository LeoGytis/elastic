import Doctors from './Doctors';
import Procedures from './Procedures';
import Services from './Services';

const SectionThreePopular = () => {
	return (
		<section className="relative flex flex-col items-center justify-center py-16 text-white lg:py-32 bg-rubinas">
			<span className="absolute top-0 w-px h-10 -translate-x-1/2 left-1/2 lg:h-24 bg-perlas"></span>

			<div className="container flex flex-col items-center justify-center gap-20 lg:gap-40">
				<Procedures />
				<Services />
				<Doctors />
			</div>
		</section>
	);
};

export default SectionThreePopular;
