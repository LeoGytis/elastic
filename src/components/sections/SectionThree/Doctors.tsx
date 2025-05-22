import Button from '@/components/ui/Button';
import {Slider} from '@/components/ui/Slider';
import {doctorsData} from './doctorsData';

const Doctors = () => {
	return (
		<article className="flex flex-col items-center ">
			<h3>Gydytojai</h3>
			<h1 className="pb-10">Komanda, kuri įsiklauso</h1>

			<div className="w-[95dvw] lg:w-[98dvw] border-4 max-w-full border-blue-500">
				<Slider autoSlideInterval={3000}>
					{doctorsData.map((doctor, index) => (
						<div key={index} className="px-4">
							<img
								src={doctor.image}
								alt={doctor.alt}
								className="w-full aspect-[9/12] object-cover mb-4"
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
			</div>

			<Button variant="light" className="my-8 lg:mt-28">
				Visi gydytojai
			</Button>
		</article>
	);
};

export default Doctors;
