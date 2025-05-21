import FooterImage from '@/images/footer.png';
import News from './News';
import Subscribe from './Subscribe';

const SectionSevenNews = () => {
	return (
		<section className="relative flex flex-col items-center justify-center bg-rubinas">
			<News />
			<img
				src={FooterImage}
				alt="footer-bg"
				className="object-cover w-full max-lg:h-[50dvh]"
			/>
			<div className="absolute w-5/6 mx-auto translate-x-1/2 lg:w-3/5 right-1/2 -bottom-20">
				<Subscribe />
			</div>
		</section>
	);
};

export default SectionSevenNews;
