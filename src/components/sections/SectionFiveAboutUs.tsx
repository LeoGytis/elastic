import AboutUsImage01 from '../../images/about-us01.png';
import AboutUsImage02 from '../../images/about-us02.png';
import AboutUsImage03 from '../../images/about-us03.png';

const SectionFiveAboutUs = () => {
	return (
		<section className="relative flex flex-col items-center justify-center w-full pt-20 pb-16 text-white bg-perlas">
			<div className="container relative flex flex-col items-center justify-center text-rubinas">
				<h3 className="pb-6">Apie mus</h3>
				<h1 className="italic text-center">
					Lorem Lorem ipsum dolor sit amet, consectetur adipiscing
					elit. Nunc nec molestie sem. Sed velit ligula, porttitor nec
					maximus nec, pellentesque nec eros. Sed in facilisis ex. Sed
					massa dui, scelerisque id dui vel, suscipit lobortis nunc.
					Mauris efficitur imperdiet lacus, at facilisis tortor
					ultrices in. Sed porttitor facilisis tortor, vitae faucibus
					mi ullamcorper at. Proin lobortis, urna at eleifend
					condimentum, nulla velit convallis metus, ac tincidunt lacus
					quam id lectus. dolor sit amet, consectetur
				</h1>
				<img
					src={AboutUsImage01}
					alt="About us decorative element 1"
					className="absolute object-cover w-64 h-64 top-20 left-10"
				/>
				<img
					src={AboutUsImage02}
					alt="About us decorative element 2"
					className="absolute object-cover bottom-10 right-1/2 w-72 h-72"
				/>
				<img
					src={AboutUsImage03}
					alt="About us decorative element 3"
					className="absolute object-cover w-96 h-96 top-20 right-10"
				/>
			</div>
		</section>
	);
};

export default SectionFiveAboutUs;
