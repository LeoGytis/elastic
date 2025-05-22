import HeroImage from '@/images/hero.png';
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
				<div className="grid grid-cols-[16fr_160fr_16fr] lg:grid-cols-[150fr_140fr_16fr] grid-rows-3 h-full">
					<div className="border border-perlas"></div>
					<div className="border border-perlas"></div>
					<div className="border border-perlas"></div>
					<div className="border border-perlas"></div>
					<div className="flex flex-col justify-between px-8 py-6 border border-white bg-white/10 backdrop-blur-md">
						<h1 className="text-white max-lg:text-4xl">
							Estetikos patirtis, kuria <br />
							pasitikėti - lengva
						</h1>
						<Button variant="dark" className="w-fit">
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
