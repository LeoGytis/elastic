import HeroImage from '../../images/hero.png';

const SectionHero = () => {
	return (
		<section className="relative w-full min-h-[600px] flex items-center">
			{/* Background Image */}
			<div className="absolute inset-0 z-0">
				<img
					src={HeroImage}
					alt="hero_image"
					className="object-cover"
				/>
				<div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
			</div>

			{/* Content */}
			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-2xl text-white">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
						ELASTIC
					</h1>
					<p className="text-lg md:text-xl mb-8">
						ELASTIC IS GOOD FOR U
					</p>
					<button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
						Get Started
					</button>
				</div>
			</div>
		</section>
	);
};

export default SectionHero;
