import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import FooterImage from '../../images/footer.png';
import Subscribe from './Subscribe';

const Footer = () => {
	return (
		<>
			<img
				src={FooterImage}
				alt="footer-bg"
				className="object-cover w-full aspect-[3]"
			/>
			<div className="relative px-4 pb-6 bg-perlas text-rubinas md:px-24 pt-96">
				<div className="absolute w-3/5 mx-auto translate-x-1/2 right-1/2 -top-60">
					<Subscribe />
				</div>
				<footer className="flex flex-col gap-24 px-12 mx-auto">
					{/* Left: Contact & Locations */}
					<div className="flex justify-between gap-12 min-w-[250px] flex-1">
						<div>
							<h3 className="mb-8 text-left opacity-50">
								SUSISIEKITE
							</h3>
							<div className="text-xl font-bold">
								+370 620 00 999
							</div>
						</div>
						{/* Center: Newsletter */}
						<div className="flex-1 max-w-xl mx-auto md:mx-0">
							<div className="w-1/2 mb-6 font-medium text-2xl leading-[120%] tracking-[-0.02em]">
								Svarbios naujienos ir specialūs pasiūlymai
								skirti Jums
							</div>
							<form className="flex flex-col gap-4">
								<div className="flex items-center pb-2 border-b border-rubinas/20">
									<input
										id="footer-email"
										type="email"
										placeholder="Jūsų el.paštas"
										className="flex-1 text-lg bg-transparent outline-none placeholder:text-rubinas/40"
									/>
									<button
										type="submit"
										className="p-2 ml-4 transition-colors rounded-full hover:bg-white"
										aria-label="Submit"
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
					</div>

					<div className="flex">
						{/* Location Section */}
						<section className="flex flex-1 gap-12">
							<div>
								<h3 className="mb-8 text-left opacity-50">
									VILNIUS
								</h3>
								<div className="text-xl font-medium leading-[120%] tracking-[-0.02em]">
									I-V 08:00 - 20:00
									<br />
									VI 09:00 - 15:00
									<br />
									VII Nedirbame
								</div>
							</div>
							<div>
								<h3 className="mb-8 text-left opacity-50">
									KLAIPĖDA
								</h3>
								<div className="text-xl font-medium leading-[120%] tracking-[-0.02em]">
									I-V 08:00 – 19:00
									<br />
									VI-VI Nedirbame
								</div>
							</div>
						</section>
						{/* Navigation Section */}

						<section className="flex flex-col flex-1 gap-8">
							<h3 className="text-left opacity-50">NAVIGACIJA</h3>
							<div className="flex gap-12 text-xl font-medium leading-[120%] tracking-[-0.02em]">
								<div className="pr-24 space-y-2">
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
					</div>

					{/* Social icons Section */}
					<section className="flex gap-4 mt-4">
						<div className="flex items-center justify-center rounded-full size-8 bg-rubinas">
							<FaInstagram className="fill-perlas" />
						</div>
						<div className="flex items-center justify-center rounded-full size-8 bg-rubinas">
							<FaFacebook className="fill-perlas" />
						</div>
						<div className="flex items-center justify-center rounded-full size-8 bg-rubinas">
							<FaLinkedin className="fill-perlas" />
						</div>
					</section>
				</footer>
			</div>
		</>
	);
};

export default Footer;
