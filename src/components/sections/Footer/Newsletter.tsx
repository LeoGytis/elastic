const Newsletter = () => {
	return (
		<div className="flex-1 max-w-xl">
			<div className="w-1/2 mb-6 font-medium text-lg lg:text-2xl leading-[120%] tracking-[-0.02em]">
				Svarbios naujienos ir specialūs pasiūlymai skirti Jums
			</div>
			<form className="flex flex-col gap-4">
				<div className="flex items-center justify-between pb-2 border-b border-rubinas/20">
					<input
						type="email"
						placeholder="Jūsų el.paštas"
						className="w-3/4 text-lg bg-transparent outline-none placeholder:text-rubinas/40"
					/>
					<button
						type="submit"
						className="p-2 ml-4 transition-colors rounded-full hover:bg-white"
					>
						<span className="text-2xl ">→</span>
					</button>
				</div>
				<label className="flex items-center gap-2 mt-2 text-sm">
					<input
						type="checkbox"
						className="w-4 h-4 accent-rubinas"
						required
					/>
					Sutinku su{' '}
					<a
						href="/privacy-policy"
						className="underline hover:text-rubinas/40 hover:cursor-pointer"
					>
						privatumo politika
					</a>
				</label>
			</form>
		</div>
	);
};

export default Newsletter;
