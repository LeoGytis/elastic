import Button from '@/components/ui/Button';
import KlaipedaImage from '@/images/klaipeda.png';
import VilniusImage from '@/images/vilnius.png';

const Locations = () => {
	return (
		<article className="container relative flex flex-col items-center justify-center px-6 text-rubinas">
			<h3 className="pb-6">Lokacijos</h3>
			<h1 className="max-w-xl pb-20 text-center">
				Galite apsilankyti Jums patogiausioje klinikoje
			</h1>

			<div className="flex flex-col w-full max-w-6xl aspect-[1.6] gap-12 md:flex-row text-perlas">
				{/* Vilnius Card */}
				<div className="relative flex items-center justify-center flex-1 transition-all duration-300 group hover:scale-105 hover:cursor-pointer">
					<img
						src={VilniusImage}
						alt="Vilnius"
						className="absolute inset-0 z-0 object-cover w-full h-full"
					/>
					<div className="absolute inset-0 z-10 transition-all duration-300 bg-black/40 group-hover:bg-white/10" />
					<div className="relative z-20 flex flex-col items-center justify-between h-full py-12">
						<h3>GEDIMINO PR. 44</h3>
						<h1 className="text-[64px]">Vilnius</h1>
						<Button variant="dark" className="bg-transparent">
							PLAČIAU
						</Button>
					</div>
				</div>

				{/* Klaipėda Card */}
				<div className="relative flex items-center justify-center flex-1 transition-all duration-300 group hover:scale-105 hover:cursor-pointer">
					<img
						src={KlaipedaImage}
						alt="Klaipėda"
						className="absolute inset-0 z-0 object-cover w-full h-full"
					/>
					<div className="absolute inset-0 z-10 transition-all duration-300 bg-black/40 group-hover:bg-white/10" />
					<div className="relative z-20 flex flex-col items-center justify-between h-full py-12">
						<h3>TAURAGĖS G. 4</h3>
						<h1 className="text-[64px]">Klaipėda</h1>
						<Button variant="dark" className="bg-transparent">
							PLAČIAU
						</Button>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Locations;
