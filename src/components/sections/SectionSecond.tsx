import WomenImage from '../../images/women.png';
import Button from '../ui/Button';

const SectionHero = () => {
	return (
		<section className="relative flex flex-col items-center justify-center w-full pt-48 bg-perlas">
			<img
				src={WomenImage}
				alt="women_image"
				className="absolute z-10 w-1/4 aspect-[0.8] -top-48 left-1/2 -translate-x-1/2"
			/>
			<div className="container relative flex flex-col items-center justify-center py-48 border border-rubinas">
				<h1>
					Lorem ipsum dolor sit amet, consecteturorem ipsum dolor sit
					amet, consectetur
				</h1>
				<Button variant="dark">Apie mus</Button>
				<div className="flex items-center justify-center gap-24 mt-12">
					<div className="text-center">
						<div className="text-5xl font-semibold text-rubinas">
							690
						</div>
						<div className="text-[#A78C8C] mt-2 tracking-wider text-sm">
							KOKYBIŠKOS PASLAUGOS
						</div>
					</div>
					<div className="text-center">
						<div className="text-5xl font-semibold text-rubinas">
							49
						</div>
						<div className="text-[#A78C8C] mt-2 tracking-wider text-sm">
							PROFESIONALŪS GYDYTOJAI
						</div>
					</div>
					<div className="text-center">
						<div className="text-5xl font-semibold text-rubinas">
							98,8%
						</div>
						<div className="text-[#A78C8C] mt-2 tracking-wider text-sm">
							MUS REKOMENDUOJA
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionHero;
