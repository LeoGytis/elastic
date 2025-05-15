import KlaipedaImage from '../../images/klaipeda.png';
import VilniusImage from '../../images/vilnius.png';
import Button from '../ui/Button';

const SectionSixLocations = () => {
	return (
		<section className="relative flex flex-col items-center justify-center w-full pt-40 pb-32 text-white bg-perlas">
			<div className="container relative flex flex-col items-center justify-center text-rubinas">
				<h3 className="pb-6">Lokacijos</h3>
				<h1 className="max-w-xl pb-20 text-center">
					Galite apsilankyti Jums patogiausioje klinikoje
				</h1>

				<div className="flex flex-col w-full max-w-6xl aspect-[1.6] gap-12 md:flex-row text-perlas">
					{/* Vilnius Card */}
					<div className="relative flex items-center justify-center flex-1">
						<img
							src={VilniusImage}
							alt="Vilnius"
							className="absolute inset-0 z-0 object-cover w-full h-full"
						/>
						<div className="absolute inset-0 z-10 bg-black/40" />
						<div className="relative z-20 flex flex-col items-center justify-between h-full py-12">
							<span className="mb-4 text-sm">
								GEDIMINO PR. 44
							</span>
							<span className="mb-4 text-6xl font-light">
								Vilnius
							</span>
							<Button variant="dark" className="bg-transparent">
								PLAČIAU
							</Button>
						</div>
					</div>

					{/* Klaipėda Card */}
					<div className="relative flex items-center justify-center flex-1">
						<img
							src={KlaipedaImage}
							alt="Klaipėda"
							className="absolute inset-0 z-0 object-cover w-full h-full"
						/>
						<div className="absolute inset-0 z-10 bg-black/40" />
						<div className="relative z-20 flex flex-col items-center justify-between h-full py-12">
							<span className="mb-4 text-sm">TAURAGĖS G. 4</span>
							<span className="mb-4 text-6xl font-light">
								Klaipėda
							</span>
							<Button variant="dark" className="bg-transparent">
								PLAČIAU
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionSixLocations;
