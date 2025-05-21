import ProcedureImage01 from '../../../images/procedure01.png';
import ProcedureImage02 from '../../../images/procedure02.png';
import ProcedureImage03 from '../../../images/procedure03.png';

interface ProcedureCardProps {
	image: string;
	title: string;
	className?: string;
}

const ProcedureCard = ({image, title, className = ''}: ProcedureCardProps) => {
	return (
		<div
			className={`relative flex justify-end w-full md:w-1/3 ${className}`}
		>
			<img src={image} alt={title} />
			<div className="absolute right-0 w-2/3 h-full border-l border-perlas backdrop-blur-[6px] flex items-center justify-center text-2xl font-medium">
				{title}
			</div>
		</div>
	);
};

const Procedures = () => {
	return (
		<>
			<h3 className="mb-4">Dažniausi pasirinkimai</h3>
			<h1 className="mb-6">Populiariausios procedūros</h1>

			<div className="flex items-center justify-center w-full gap-12 px-8 mb-40 max-md:flex-col">
				<ProcedureCard
					image={ProcedureImage01}
					title="Plaukų persodinimas"
				/>
				<ProcedureCard
					image={ProcedureImage02}
					title="Botulino injekcijos"
					className="md:mt-28"
				/>
				<ProcedureCard
					image={ProcedureImage03}
					title="Frakcinis odos atnaujinimas"
				/>
			</div>
		</>
	);
};

export default Procedures;
