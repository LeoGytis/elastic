import KlaipedaImage from '../../images/klaipeda.png';
import VilniusImage from '../../images/vilnius.png';

const SectionSixLocations = () => {
	return (
		<section className="relative flex flex-col items-center justify-center w-full pt-40 pb-32 text-white bg-perlas">
			<div className="container relative flex flex-col items-center justify-center text-rubinas">
				<h3 className="pb-6">Lokacijos</h3>
				<h1 className="pb-20">
					Galite apsilankyti Jums patogiausioje klinikoje
				</h1>

				<div className="flex flex-col w-full gap-8 mt-12 md:flex-row text-perlas">
					{/* Vilnius Card */}
					<div className="relative flex-1 h-[800px] flex items-center justify-center overflow-hidden">
						<img
							src={VilniusImage}
							alt="Vilnius"
							className="absolute inset-0 z-0 object-cover w-full h-full"
						/>
						<div className="absolute inset-0 z-10 bg-black/40" />
						<div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
							<span className="mb-4 text-sm">LOREM IPSUM</span>
							<span className="mb-4 text-6xl font-light">
								Vilnius
							</span>
							<span className="text-lg">PLAČIAU</span>
						</div>
					</div>

					{/* Klaipėda Card */}
					<div className="relative flex-1 h-[800px] flex items-center justify-center overflow-hidden">
						<img
							src={KlaipedaImage}
							alt="Klaipėda"
							className="absolute inset-0 z-0 object-cover w-full h-full"
						/>
						<div className="absolute inset-0 z-10 bg-black/40" />
						<div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
							<span className="mb-4 text-sm">
								LOREM IPSUM PR. 1
							</span>
							<span className="mb-4 text-6xl font-light">
								Klaipėda
							</span>
							<span className="text-lg">PLAČIAU</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionSixLocations;
