import ProcedureImage01 from '../../images/procedure01.png';
import ProcedureImage02 from '../../images/procedure02.png';
import ProcedureImage03 from '../../images/procedure03.png';

const SectionThreePopular = () => {
	return (
		<section className="relative flex flex-col items-center justify-center w-full pt-48 pb-20 text-white bg-rubinas">
			<span className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-[5%] bg-perlas"></span>
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
					<h1 className="w-full pb-8 border-b border-border/20 opacity-60 hover:opacity-100 hover:cursor-pointer">
						Plastinė ir estetinė chirurgija
					</h1>
					<h1 className="w-full pb-8 border-b border-border/20 opacity-60 hover:opacity-100 hover:cursor-pointer">
						Estetinė dermatologija
					</h1>
					<h1 className="w-full pb-8 border-b border-border/20 opacity-60 hover:opacity-100 hover:cursor-pointer">
						Lazerinė dermatologija
					</h1>
					<h1 className="w-full pb-8 border-b border-border/20 opacity-60 hover:opacity-100 hover:cursor-pointer">
						Kosmetologija
					</h1>
				</div>
			</div>
		</section>
	);
};

export default SectionThreePopular;
