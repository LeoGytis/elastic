import AboutUsImage01 from '@/images/about-us01.png';
import AboutUsImage02 from '@/images/about-us02.png';
import AboutUsImage03 from '@/images/about-us03.png';

const SectionFourAboutUs = () => {
	return (
		<article className="container relative flex flex-col items-center justify-center px-6 text-rubinas">
			<h3 className="pb-6">Apie mus</h3>
			<h1 className="z-10 max-w-6xl italic text-center">
				Grožio procedūros, odos priežiūra ir estetiniai sprendimai - tai
				mūsų siūlomos paslaugos, padedančios puoselėti Jūsų išvaizdą.
				Kiekviena procedūra atliekama kruopščiai, atsižvelgiant į
				individualius poreikius. Mūsų tikslas - ne tik išryškinti
				natūralų grožį, bet ir suteikti ilgalaikį rezultatą. Patikėkite
				savo išvaizdą profesionalams, kurie rūpinasi Jūsų gerove ir
				pasitikėjimu savimi. Jūsų grožis - mūsų įkvėpimas kurti
				išskirtinę patirtį kiekvienam klientui.
			</h1>
			<img
				src={AboutUsImage01}
				alt="About us decorative element 1"
				className="opacity-80 absolute object-cover -bottom-20 aspect-[1.5] w-96 right-1/4"
			/>
			<img
				src={AboutUsImage02}
				alt="About us decorative element 2"
				className="opacity-70 absolute bottom-0 object-cover left-40 w-80 aspect-[0.8] max-lg:hidden"
			/>
			<img
				src={AboutUsImage03}
				alt="About us decorative element 3"
				className="opacity-80 absolute object-cover right-40 -top-0 lg:-top-20 w-96 aspect-[1.4]"
			/>
		</article>
	);
};

export default SectionFourAboutUs;
