import HeroImage from '../../images/hero.png';
import Button from '../ui/Button';

const SectionHero = () => {
	return (
		<section className="relative flex items-center w-full h-dvh_ h-[1087px]_ aspect-[1.23]">
			<div className="absolute inset-0 z-0">
				<img
					src={HeroImage}
					alt="hero_image"
					className="object-cover w-full h-full"
				/>
				<div className="absolute inset-0" />
			</div>

			<div className="absolute inset-0 z-10">
				<div className="grid grid-cols-[720fr_605fr_115fr] grid-rows-3 h-full">
					<div className="border border-perlas"></div>
					<div className="border border-perlas"></div>
					<div className="border border-perlas"></div>
					<div className="border border-perlas"></div>
					<div className="flex flex-col justify-between px-8 py-6 border border-white bg-white/10 backdrop-blur-md">
						<h1 className="text-white">
							Estetikos patirtis, kuria pasitikėti - lengva
						</h1>
						<Button
							variant="dark"
							className="hover:bg-blue-50 w-fit"
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
