import Procedures from './Procedures';
import Services from './Services';

const SectionThreePopular = () => {
	return (
		<section className="relative flex flex-col items-center justify-center w-full pb-20 text-white lg:pt-48 bg-rubinas">
			<span className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-[5%] bg-perlas"></span>
			<div className="container relative flex flex-col items-center justify-center pt-32">
				<Procedures />

				{/* ---- Services ---- */}
				<div className="flex flex-col items-center justify-center w-2/3 gap-10 text-center">
					<Services />
				</div>
			</div>
		</section>
	);
};

export default SectionThreePopular;
