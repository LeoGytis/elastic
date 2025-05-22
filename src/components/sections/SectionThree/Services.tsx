interface ServiceCardProps {
	title: string;
}

const ServiceCard = ({title}: ServiceCardProps) => {
	return (
		<h1 className="w-full pb-8 border-b border-border/20 opacity-60 hover:opacity-100 hover:cursor-pointer">
			{title}
		</h1>
	);
};

const SectionThreePopular = () => {
	return (
		<article className="flex flex-col items-center justify-center w-full max-w-6xl gap-10 text-center">
			<h3 className="w-full border-b pb-14 border-border/20">
				Paslaugos
			</h3>
			<ServiceCard title="Plastinė ir estetinė chirurgija" />
			<ServiceCard title="Estetinė dermatologija" />
			<ServiceCard title="Lazerinė dermatologija" />
			<ServiceCard title="Kosmetologija" />
		</article>
	);
};

export default SectionThreePopular;
