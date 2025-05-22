import Button from '@/components/ui/Button';
import KlaipedaImage from '@/images/klaipeda.png';
import VilniusImage from '@/images/vilnius.png';

interface CityCardProps {
	image: string;
	address: string;
	city: string;
}

const CityCard = ({image, address, city}: CityCardProps) => {
	return (
		<div className="relative flex flex-col items-center justify-between flex-1 w-full gap-16 lg:gap-32 py-6 transition-all duration-300 lg:py-16 group hover:scale-105 hover:cursor-pointer lg:aspect-[0.77]">
			<img
				src={image}
				alt={city}
				className="absolute inset-0 z-0 object-cover w-full h-full"
			/>
			<div className="absolute inset-0 z-10 transition-all duration-300 bg-black/20 group-hover:bg-white/10" />
			<h3 className="z-10">{address}</h3>
			<h1 className="xl:text-[64px] z-10">{city}</h1>
			<Button variant="dark" className="z-10 bg-transparent">
				PLAČIAU
			</Button>
		</div>
	);
};

const Locations = () => {
	return (
		<article className="container relative flex flex-col items-center justify-center text-rubinas">
			<h3 className="pb-6">Lokacijos</h3>
			<h1 className="max-w-xl pb-10 text-center lg:pb-20">
				Galite apsilankyti Jums patogiausioje klinikoje
			</h1>

			<div className="flex flex-col w-full max-w-6xl gap-12 sm:flex-row text-perlas">
				<CityCard
					image={VilniusImage}
					address="GEDIMINO PR. 44"
					city="Vilnius"
				/>
				<CityCard
					image={KlaipedaImage}
					address="TAURAGĖS G. 4"
					city="Klaipėda"
				/>
			</div>
		</article>
	);
};

export default Locations;
