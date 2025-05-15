import ProcedureImage01 from '../../images/procedure01.png';
import ProcedureImage02 from '../../images/procedure02.png';
import ProcedureImage03 from '../../images/procedure03.png';

const SectionThreePopular = () => {
	return (
		<section className="relative flex flex-col items-center justify-center w-full pt-48 text-white bg-rubinas">
			<div className="container relative flex flex-col items-center justify-center pt-32">
				<h3 className="mb-4">Dažniausi pasirinkimai</h3>
				<h1 className="mb-6">Populiariausios procedūros</h1>

				<div className="flex items-center justify-center w-full gap-12 mb-40">
					<div className="w-1/3 aspect-[9/12] relative flex justify-end">
						<img src={ProcedureImage01} alt="procedure01_image" />
						<div className="absolute right-0 w-2/3 h-full border-l border-perlas backdrop-blur-[6px] flex items-center justify-center text-2xl font-medium">
							Plaukų persodinimas
						</div>
					</div>
					<div className="w-1/3 aspect-[9/12] relative flex justify-end mt-28">
						<img src={ProcedureImage02} alt="procedure01_image" />
						<div className="absolute right-0 w-2/3 h-full border-l border-perlas backdrop-blur-[6px] flex items-center justify-center text-2xl font-medium">
							Botulino injekcijosh
						</div>
					</div>
					<div className="w-1/3 aspect-[9/12] relative flex justify-end">
						<img src={ProcedureImage03} alt="procedure01_image" />
						<div className="absolute right-0 w-2/3 h-full border-l border-perlas backdrop-blur-[6px] flex items-center justify-center text-2xl font-medium">
							Frakcinis odos atnaujinimas
						</div>
					</div>
				</div>

				<div className="flex flex-col items-center justify-center w-2/3 gap-10 text-center">
					<h3 className="w-full border-b pb-14 border-border/20">
						Paslaugos
					</h3>
					<h1 className="w-full pb-8 border-b border-border/20 opacity-60 hover:opacity-100">
						<a href="/">Plastinė ir estetinė chirurgija</a>
					</h1>
					<h1 className="w-full pb-8 border-b border-border/20 opacity-60 hover:opacity-100">
						<a href="/">Estetinė dermatologija</a>
					</h1>
					<h1 className="w-full pb-8 border-b border-border/20 opacity-60 hover:opacity-100">
						<a href="/">Lazerinė dermatologija</a>
					</h1>
					<h1 className="w-full pb-8 border-b border-border/20 opacity-60 hover:opacity-100">
						<a href="/">Kosmetologija</a>
					</h1>
				</div>
			</div>
		</section>
	);
};

export default SectionThreePopular;
