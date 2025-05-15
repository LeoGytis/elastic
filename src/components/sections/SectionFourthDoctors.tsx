import DoctorImage01 from '../../images/doctor01.png';
import Button from '../ui/Button';

const SectionFourDoctors = () => {
	return (
		<section className="relative flex flex-col items-center justify-center w-full pt-20 pb-32 text-white bg-rubinas">
			<div className="container relative flex flex-col items-center justify-center py-48 border border-rubinas">
				<h3>Gydytojai</h3>
				<h1>Komanda, kuri įsiklauso</h1>

				<div className="flex items-center justify-center w-full gap-8 pb-20">
					<img
						src={DoctorImage01}
						alt="hero_image"
						className="w-1/3 aspect-[9/12]"
					/>
					<img
						src={DoctorImage01}
						alt="hero_image"
						className="w-1/3 mt-20 aspect-[9/12]"
					/>
					<img
						src={DoctorImage01}
						alt="hero_image"
						className="w-1/3 aspect-[9/12]"
					/>
				</div>

				<Button variant="light">Visi gydytojai</Button>
			</div>
		</section>
	);
};

export default SectionFourDoctors;
