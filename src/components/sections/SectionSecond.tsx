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
						<h1 className="font-medium">690</h1>
						<div className="mt-2 text-sm opacity-60">
							KOKYBIŠKOS PASLAUGOS
						</div>
					</div>
					<div className="text-center">
						<h1 className="font-medium">49</h1>
						<div className="mt-2 text-sm opacity-60">
							PROFESIONALŪS GYDYTOJAI
						</div>
					</div>
					<div className="text-center">
						<h1 className="font-medium">98,8%</h1>
						<div className="mt-2 text-sm opacity-60">
							MUS REKOMENDUOJA
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionTwo;
