import WomenImage from '@/images/women.png';
import Button from '../ui/Button';

const SectionTwo = () => {
	return (
		<section className="relative flex flex-col items-center justify-center w-full py-32 sm:py-40 md:py-56 xl:py-72 bg-perlas">
			<img
				src={WomenImage}
				alt="women_image"
				className="absolute top-0 z-10 w-1/3 -translate-x-1/2 -translate-y-1/2 lg:w-1/4 xl:w-1/5 left-1/2"
			/>
			<div className="relative flex flex-col items-center justify-center w-full px-8 max-w-8xl">
				<h1 className="lg:text-[64px] text-center text-rubinas mb-8 text-wrap">
					Veido atjauninimo procedūros, odos stangrinimas ir
					estetiniai patobulinimai - mūsų procedūros sukurtos Jums.
				</h1>
				<Button variant="light">Apie mus</Button>
				<div className="flex items-center justify-center gap-8 mt-12 max-md:flex-col lg:gap-24 text-rubinas">
					<div className="text-center">
						<h2>690</h2>
						<span className="mt-2 opacity-60">
							Kokybiškos paslaugos
						</span>
					</div>
					<div className="text-center">
						<h2>49</h2>
						<span className="mt-2 opacity-60">
							Profesionalūs gydytojai
						</span>
					</div>
					<div className="text-center">
						<h2>98,8%</h2>
						<span className="mt-2 opacity-60">
							Mus rekomenduoja
						</span>
					</div>
				</div>
			</div>
			<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] lg:h-24 h-10 bg-rubinas"></span>
		</section>
	);
};

export default SectionTwo;
