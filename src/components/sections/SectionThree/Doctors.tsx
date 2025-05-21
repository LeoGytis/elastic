import Button from '@/components/ui/Button';
import {Slider} from '@/components/ui/Slider';
import {doctorsData} from './doctorsData';

const Doctors = () => {
	return (
		<article className="container relative flex flex-col items-center justify-center py-48 border border-rubinas">
			<h3>Gydytojai</h3>
			<h1 className="mb-20">Komanda, kuri įsiklauso</h1>

			<div className="w-full pb-20 max-w-7xl">
				<Slider slidesToShow={3} autoSlideInterval={3000}>
					{doctorsData.map((doctor, index) => (
						<div key={index} className="px-4">
							<img
								src={doctor.image}
								alt={doctor.alt}
								className="w-full aspect-[9/12] object-cover mb-4"
							/>
							<div className="mb-6">
								<p className="mb-4 text-2xl">
									{doctor.fullName}
								</p>
								<div className="font-lato font-normal leading-[160%] tracking-[0.01em] text-white/60">
									{doctor.speciality}
								</div>
							</div>
							<Button variant="dark" className="p-0">
								Plačiau
							</Button>
						</div>
					))}
				</Slider>
			</div>

			<Button variant="light">Visi gydytojai</Button>
		</article>
	);
};

export default Doctors;
