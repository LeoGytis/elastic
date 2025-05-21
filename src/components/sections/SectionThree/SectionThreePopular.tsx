import Procedures from './Procedures';
import Services from './Services';

const SectionThreePopular = () => {
	return (
		<section className="relative flex flex-col items-center justify-center w-full px-6 pt-24 pb-20 text-white lg:pt-48 bg-rubinas">
			<span className="absolute top-0 w-px h-16 -translate-x-1/2 left-1/2 lg:h-24 bg-perlas"></span>

			<div className="container flex flex-col items-center justify-center gap-20 lg:gap-40">
				<Procedures />
				<Services />
			</div>
		</section>
	);
};

export default SectionThreePopular;
