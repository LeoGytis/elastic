import WomenImage from '../../images/women.png';
import Button from '../ui/Button';

const SectionTwo = () => {
	return (
		<section className="relative flex flex-col items-center justify-center w-full pt-[709px] pb-[357px] bg-perlas">
			<img
				src={WomenImage}
				alt="women_image"
				className="absolute z-10 w-1/3 aspect-[0.78] -top-48 left-1/2 -translate-x-1/2"
			/>
			<div className="relative flex flex-col items-center justify-center max-w-6xl">
				<h1 className="text-[64px] text-center text-rubinas mb-8">
					Veido atjauninimo procedūros, odos stangrinimas ir
					estetiniai patobulinimai - mūsų procedūros sukurtos Jums.
				</h1>
				<Button variant="light">Apie mus</Button>
				<div className="flex items-center justify-center gap-24 mt-12 text-rubinas">
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
			<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-[5%] bg-rubinas"></span>
		</section>
	);
};

export default SectionTwo;
