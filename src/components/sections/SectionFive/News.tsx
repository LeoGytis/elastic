import Button from '@/components/ui/Button';
import NewsImage01 from '@/images/news01.png';
import NewsImage02 from '@/images/news02.png';
import NewsImage03 from '@/images/news03.png';

const News = () => {
	return (
		<article className="container relative flex flex-col items-center justify-center py-16 text-perlas lg:py-32">
			<h3>Įžvalgos</h3>
			<h1 className="max-w-xl pt-4 pb-10 text-center lg:pb-20">
				Naujienos iš estetinės medicinos pasaulio
			</h1>

			<div className="flex flex-col w-full gap-12 lg:gap-40 md:flex-row">
				{/* News Card 1 */}
				<div className="flex flex-col flex-1 gap-4">
					<img
						src={NewsImage01}
						alt="news01"
						className="object-cover"
					/>
					<div className="text-sm">
						<span className="opacity-70">2025.01.23</span>
						<span> &nbsp; • &nbsp; KATEGORIJA 1</span>
					</div>
					<p>
						Atraskite matomus odos atjauninimo rezultatus jau po
						pirmos procedūros!
					</p>
				</div>

				{/* News Card 2 */}
				<div className="flex flex-col flex-[1.25] gap-4">
					<img
						src={NewsImage02}
						alt="news02"
						className="object-cover"
					/>
					<div className="text-sm">
						<span className="opacity-70">2025.01.23</span>
						<span> &nbsp; • &nbsp; KATEGORIJA 1</span>
					</div>
					<p>
						Atraskite matomus odos atjauninimo rezultatus jau po
						pirmos procedūros!
					</p>
				</div>

				{/* News Card 3 */}
				<div className="flex flex-col flex-1 gap-4">
					<img
						src={NewsImage03}
						alt="news03"
						className="object-cover"
					/>
					<div className="text-sm">
						<span className="opacity-70">2025.01.23</span>
						<span> &nbsp; • &nbsp; KATEGORIJA 1</span>
					</div>
					<p>
						Atraskite matomus odos atjauninimo rezultatus jau po
						pirmos procedūros!
					</p>
				</div>
			</div>
			<Button variant="light" className="mt-16 bg-transparent lg:mt-20">
				Visos naujienos
			</Button>
		</article>
	);
};

export default News;
