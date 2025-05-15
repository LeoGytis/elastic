import Button from '../ui/Button';

const SectionFiveAboutUs = () => {
	return (
		<section className="relative flex flex-col items-center justify-center w-full pt-48 text-white bg-perlas">
			<div className="container relative flex flex-col items-center justify-center py-48 text-rubinas">
				<h3>Apie mus</h3>
				<p className="text-5xl">
					Lorem Lorem ipsum dolor sit amet, consectetur adipiscing
					elit. Nunc nec molestie sem. Sed velit ligula, porttitor nec
					maximus nec, pellentesque nec eros. Sed in facilisis ex. Sed
					massa dui, scelerisque id dui vel, suscipit lobortis nunc.
					Mauris efficitur imperdiet lacus, at facilisis tortor
					ultrices in. Sed porttitor facilisis tortor, vitae faucibus
					mi ullamcorper at. Proin lobortis, urna at eleifend
					condimentum, nulla velit convallis metus, ac tincidunt lacus
					quam id lectus.  dolor sit amet, consectetur
				</p>

				<Button variant="light">Visi gydytojai</Button>
			</div>
		</section>
	);
};

export default SectionFiveAboutUs;
