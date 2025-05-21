const WorkTimes = () => {
	return (
		<section className="flex justify-between flex-1 gap-4 md:text-xl md:gap-12">
			<div>
				<h3 className="mb-8 text-left opacity-50">VILNIUS</h3>
				<div className="font-medium leading-[120%] tracking-[-0.02em]">
					I-V 08:00 - 20:00
					<br />
					VI 09:00 - 15:00
					<br />
					VII Nedirbame
				</div>
			</div>
			<div>
				<h3 className="mb-8 text-left opacity-50">KLAIPĖDA</h3>
				<div className="font-medium leading-[120%] tracking-[-0.02em]">
					I-V 08:00 – 19:00
					<br />
					VI-VI Nedirbame
				</div>
			</div>
		</section>
	);
};

export default WorkTimes;
