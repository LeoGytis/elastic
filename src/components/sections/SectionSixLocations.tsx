import KlaipedaImage from '../../images/klaipeda.png';
import VilniusImage from '../../images/vilnius.png';

const SectionSixLocations = () => {
	return (
		<section className="relative flex flex-col items-center justify-center w-full pt-48 text-white bg-perlas">
			<div className="container relative flex flex-col items-center justify-center py-48 text-rubinas">
				<h3>Lokacijos</h3>
				<h4>Galite apsilankyti Jums patogiausioje klinikoje</h4>

				<div className="flex flex-col w-full gap-8 mt-12 md:flex-row text-perlas">
					{/* Vilnius Card */}
					<div className="relative flex-1 h-[400px] flex items-center justify-center rounded-lg overflow-hidden">
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
					<div className="relative flex-1 h-[400px] flex items-center justify-center rounded-lg overflow-hidden">
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
