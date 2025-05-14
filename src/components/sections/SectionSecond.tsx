import Button from '../ui/Button';

const SectionHero = () => {
	return (
		<section className="relative flex items-center justify-center h-dvh flex-col items-center w-full h-dvh h-[889px]">
			<h1>
				Lorem ipsum dolor sit amet, consecteturorem ipsum dolor sit
				amet, consectetur
			</h1>
			<Button variant="dark">Apie mus</Button>
			<div className="flex items-center justify-center gap-24 mt-12">
				<div className="text-center">
					<div className="text-5xl font-semibold text-[#6B3A3A]">
						690
					</div>
					<div className="text-[#A78C8C] mt-2 tracking-wider text-sm">
						KOKYBIŠKOS PASLAUGOS
					</div>
				</div>
				<div className="text-center">
					<div className="text-5xl font-semibold text-[#6B3A3A]">
						49
					</div>
					<div className="text-[#A78C8C] mt-2 tracking-wider text-sm">
						PROFESIONALŪS GYDYTOJAI
					</div>
				</div>
				<div className="text-center">
					<div className="text-5xl font-semibold text-[#6B3A3A]">
						98,8%
					</div>
					<div className="text-[#A78C8C] mt-2 tracking-wider text-sm">
						MUS REKOMENDUOJA
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionHero;
