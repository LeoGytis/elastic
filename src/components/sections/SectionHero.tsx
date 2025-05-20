import HeroImage from '../../images/hero.png';
import Button from '../ui/Button';

const SectionHero = () => {
	return (
		<section className="relative flex items-center w-full max-lg:h-dvh aspect-[1.23]">
			<div className="absolute inset-0 z-0">
				<img
					src={HeroImage}
					alt="hero_image"
					className="object-cover w-full h-full"
				/>
				<div className="absolute inset-0" />
			</div>

			<div className="absolute inset-0 z-10">
				<div className="grid grid-cols-[80fr_144fr_20fr] lg:grid-cols-[144fr_121fr_23fr] grid-rows-3 h-full">
					<div className="border border-perlas"></div>
					<div className="border border-perlas"></div>
					<div className="border border-perlas"></div>
					<div className="border border-perlas"></div>
					<div className="flex flex-col justify-between px-8 py-6 border border-white bg-white/10 backdrop-blur-md">
						<h1 className="text-white">
							Estetikos patirtis, kuria <br />
							pasitikėti - lengva
						</h1>
						<Button
							variant="dark"
							className="max-lg:-translate-x-1/2 hover:bg-blue-50 w-fit max-lg:absolute -bottom-6 left-1/2"
						>
							Registracija
						</Button>
					</div>
					<div className="border border-perlas"></div>
					<div className="border border-perlas"></div>
					<div className="border border-perlas"></div>
					<div className="border border-perlas"></div>
				</div>
			</div>
		</section>
	);
};

export default SectionHero;
