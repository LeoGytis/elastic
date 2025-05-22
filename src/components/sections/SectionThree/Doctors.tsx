import Button from '@/components/ui/Button';
import {Slider} from '@/components/ui/Slider';
import {doctorsData} from './doctorsData';

const Doctors = () => {
	return (
		<article className="flex flex-col items-center ">
			<h3 className="mb-6">Gydytojai</h3>
			<h1 className="mb-10">Komanda, kuri įsiklauso</h1>

			<Slider autoSlideInterval={2500}>
				{doctorsData.map((doctor, index) => (
					<div key={index} className="px-4 max-lg:text-center">
						<img
							src={doctor.image}
							alt={doctor.alt}
							className="w-1/2 lg:w-full aspect-[9/12] object-cover mb-4 mx-auto"
						/>
						<div className="mb-6">
							<p className="text-2xl">{doctor.fullName}</p>
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

			<Button variant="light" className="my-8 lg:mt-28">
				Visi gydytojai
			</Button>
		</article>
	);
};

export default Doctors;
