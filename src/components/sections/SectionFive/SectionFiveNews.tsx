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
				className="object-cover w-full aspect-[3]_ h-1/2_"
			/>
			<div className="absolute w-3/5 mx-auto translate-x-1/2 right-1/2 -bottom-20">
				<Subscribe />
			</div>
		</section>
	);
};

export default SectionSevenNews;
