import HeroImage from '../../images/hero.png';
import Button from '../ui/Button';

const SectionHero = () => {
	return (
		<section className="relative flex items-center w-full h-dvh h-[889px]">
			<div className="absolute inset-0 z-0">
				<img
					src={HeroImage}
					alt="hero_image"
					className="object-cover w-full h-full"
				/>
				<div className="absolute inset-0 bg-black/50" />
			</div>

			<div className="absolute inset-0 z-10">
				<div className="grid grid-cols-[6fr_5fr_1fr] grid-rows-3 h-full">
					<div className="border border-white/30"></div>
					<div className="border border-white/30"></div>
					<div className="border border-white/30"></div>
					<div className="border border-white/30"></div>
					<div className="flex flex-col justify-between p-8 border h-full_ bg-white/10 backdrop-blur-xs border-white/30">
						<h1 className="text-4xl font-bold text-white">
							Estetikos patirtis, kuria pasitikėti - lengva
						</h1>
						<Button variant="dark" className="hover:bg-blue-50">
							Registracija
						</Button>
					</div>
					<div className="border border-white/30"></div>
					<div className="border border-white/30"></div>
					<div className="border border-white/30"></div>
					<div className="border border-white/30"></div>
				</div>
			</div>
		</section>
	);
};

export default SectionHero;
