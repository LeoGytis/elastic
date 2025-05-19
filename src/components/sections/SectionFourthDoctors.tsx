import DoctorImage01 from '../../images/doctor01.jpg';
import DoctorImage02 from '../../images/doctor02.jpg';
import DoctorImage03 from '../../images/doctor03.jpg';
import DoctorImage04 from '../../images/doctor04.jpg';
import DoctorImage05 from '../../images/doctor05.jpg';
import DoctorImage06 from '../../images/doctor06.jpg';
import DoctorImage07 from '../../images/doctor07.jpg';
import DoctorImage08 from '../../images/doctor08.jpg';
import DoctorImage09 from '../../images/doctor09.jpg';
import Button from '../ui/Button';
import {Slider} from '../ui/Slider';

const SectionFourDoctors = () => {
	const doctors = [
		{
			image: DoctorImage01,
			alt: 'Doctor 1',
			fullName: 'Simona Žilinskienė',
			speciality: 'Gydytoja dermatovenerologė',
		},
		{
			image: DoctorImage02,
			alt: 'Doctor 2',
			fullName: 'Ernest Zacharevskij',
			speciality: 'Plastinės ir rekonstrukcinės chirurgijos gydytojas',
		},
		{
			image: DoctorImage03,
			alt: 'Doctor 3',
			fullName: 'Saulius Viksraitis',
			speciality: 'Plastinės ir rekonstrukcinės chirurgijos gydytojas',
		},
		{
			image: DoctorImage04,
			alt: 'Doctor 4',
			fullName: 'Aistė Audickaitė',
			speciality: 'Gydytoja dermatovenerologė',
		},
		{
			image: DoctorImage05,
			alt: 'Doctor 5',
			fullName: 'Eglė Zabutytė',
			speciality: 'Plastinės ir rekonstrukcinės chirurgijos gydytoja',
		},
		{
			image: DoctorImage06,
			alt: 'Doctor 6',
			fullName: 'Rūta Kazlauskienė',
			speciality: 'Gydytoja endokrinologė',
		},
		{
			image: DoctorImage07,
			alt: 'Doctor 7',
			fullName: 'Ernesta Jankauskienė',
			speciality: 'Gydytojas ortopedė-traumatologė',
		},
		{
			image: DoctorImage08,
			alt: 'Doctor 8',
			fullName: 'Miglė Stankevičienė',
			speciality: 'Gydytoja kardiologė',
		},
		{
			image: DoctorImage09,
			alt: 'Doctor 9',
			fullName: 'Toma Vainos neurologė',
			speciality: 'Gydytoja dermatovenerologė',
		},
	];

	return (
		<section className="relative flex flex-col items-center justify-center w-full pt-20 pb-32 text-white bg-rubinas">
			<div className="container relative flex flex-col items-center justify-center py-48 border border-rubinas">
				<h3>Gydytojai</h3>
				<h1>Komanda, kuri įsiklauso</h1>

				<div className="w-full pb-20 max-w-7xl">
					<Slider slidesToShow={3} autoSlideInterval={3000}>
						{doctors.map((doctor, index) => (
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
			</div>
		</section>
	);
};

export default SectionFourDoctors;
