const Navigation = () => {
	return (
		<section className="flex flex-col flex-1 gap-8">
			<h3 className="text-left opacity-50">NAVIGACIJA</h3>
			<div className="flex gap-12 text-base md:text-xl font-medium leading-[120%] tracking-[-0.02em] justify-between">
				<div className="space-y-2 lg:pr-24">
					<div>Paslaugos</div>
					<div>Gydytojai</div>
					<div>Klinikos</div>
					<div>Naujienos</div>
				</div>
				<div className="space-y-2">
					<div>Kontaktai</div>
					<div>Kokybės politika</div>
					<div>DUK</div>
				</div>
			</div>
		</section>
	);
};

export default Navigation;
