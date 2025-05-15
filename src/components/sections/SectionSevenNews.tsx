import NewsImage01 from '../../images/news01.png';
import NewsImage02 from '../../images/news02.png';
import NewsImage03 from '../../images/news03.png';
import Button from '../ui/Button';

const SectionSevenNews = () => {
	return (
		<section className="relative flex flex-col items-center justify-center w-full text-white bg-rubinas py-[120px]">
			<div className="container relative flex flex-col items-center justify-center max-w-7xl text-perlas">
				<h3>Įžvalgos</h3>
				<h1 className="max-w-xl text-center">
					Naujienos iš estetinės medicinos pasaulio
				</h1>

				<div className="flex flex-col w-full gap-8 pb-20 mt-12 md:flex-row">
					{/* News Card 1 */}
					<div className="flex flex-col flex-1">
						<div className="relative w-full aspect-[1/1.1] rounded-lg overflow-hidden mb-4">
							<img
								src={NewsImage01}
								alt="news01"
								className="object-cover w-full h-full"
							/>
						</div>
						<div className="mb-1 text-sm opacity-70">
							2025.01.23 &nbsp; • &nbsp;{' '}
							<span className="font-semibold">KATEGORIJA 1</span>
						</div>
						<div className="text-lg font-normal leading-snug">
							Atraskite matomus odos atjauninimo rezultatus jau po
							pirmos procedūros!
						</div>
					</div>

					{/* News Card 2 */}
					<div className="flex flex-col flex-1">
						<div className="relative w-full aspect-[1/1.1] rounded-lg overflow-hidden mb-4">
							<img
								src={NewsImage02}
								alt="news02"
								className="object-cover w-full h-full"
							/>
						</div>
						<div className="mb-1 text-sm opacity-70">
							2025.01.23 &nbsp; • &nbsp;{' '}
							<span className="font-semibold">KATEGORIJA 1</span>
						</div>
						<div className="text-lg font-normal leading-snug">
							Atraskite matomus odos atjauninimo rezultatus jau po
							pirmos procedūros!
						</div>
					</div>

					{/* News Card 3 */}
					<div className="flex flex-col flex-1">
						<div className="relative w-full aspect-[1/1.1] rounded-lg overflow-hidden mb-4">
							<img
								src={NewsImage03}
								alt="news03"
								className="object-cover w-full h-full"
							/>
						</div>
						<div className="mb-1 text-sm opacity-70">
							2025.01.23 &nbsp; • &nbsp;{' '}
							<span className="font-semibold">KATEGORIJA 1</span>
						</div>
						<div className="text-lg font-normal leading-snug">
							Atraskite matomus odos atjauninimo rezultatus jau po
							pirmos procedūros!
						</div>
					</div>
				</div>
				<Button variant="light" className="bg-transparent">
					Visos naujienos
				</Button>
			</div>
		</section>
	);
};

export default SectionSevenNews;
