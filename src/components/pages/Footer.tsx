import {Facebook, Instagram, Linkedin} from 'lucide-react';
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

			<footer className="relative px-4 pb-6 bg-perlas text-rubinas md:px-24 pt-96">
				<div className="absolute w-3/5 mx-auto translate-x-1/2 right-1/2 -top-60">
					<Subscribe />
				</div>
				<div className="flex flex-col gap-12 mx-auto md:flex-row md:justify-between md:items-start max-w-7xl">
					{/* Left: Contact & Locations */}
					<div className="flex flex-col gap-12 min-w-[250px] flex-1">
						<div>
							<div className="mb-2 text-sm font-medium tracking-wider uppercase opacity-70">
								SUSISIEKITE
							</div>
							<div className="text-lg font-semibold">
								+370 620 00 999
							</div>
						</div>
						<div className="flex flex-col gap-12 md:flex-row">
							<div>
								<div className="mb-2 text-sm font-medium tracking-wider uppercase opacity-70">
									VILNIUS
								</div>
								<div className="leading-relaxed">
									I-V 08:00 – 20:00
									<br />
									VI 09:00 – 15:00
									<br />
									VII Nedirbame
								</div>
							</div>
							<div>
								<div className="mb-2 text-sm font-medium tracking-wider uppercase opacity-70">
									KLAIPĖDA
								</div>
								<div className="leading-relaxed">
									I-V 08:00 – 19:00
									<br />
									VI-VI Nedirbame
								</div>
							</div>
						</div>
						<div className="flex gap-4 mt-4">
							{/* Social icons - lucide-react */}
							<a
								href="https://instagram.com"
								aria-label="Instagram"
								className="hover:opacity-70"
							>
								<Instagram size={28} stroke="#5a2230" />
							</a>
							<a
								href="https://facebook.com"
								aria-label="Facebook"
								className="hover:opacity-70"
							>
								<Facebook size={28} stroke="#5a2230" />
							</a>
							<a
								href="https://linkedin.com"
								aria-label="LinkedIn"
								className="hover:opacity-70"
							>
								<Linkedin size={28} stroke="#5a2230" />
							</a>
						</div>
					</div>
					{/* Center: Newsletter */}
					<div className="flex-1 max-w-xl mx-auto md:mx-0">
						<div className="mb-4 text-2xl font-medium leading-snug md:text-3xl">
							Svarbios naujienos ir specialūs pasiūlymai skirti
							Jums
						</div>
						<form className="flex flex-col gap-4">
							<div className="flex items-center pb-2 border-b border-rubinas">
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
									className="accent-[#5a2230] w-4 h-4"
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
					{/* Right: Navigation */}
					<div className="flex flex-col justify-end flex-1 gap-8 mt-8 text-base md:flex-row md:gap-16 md:mt-0">
						<div>
							<div className="mb-2 text-sm font-medium tracking-wider uppercase opacity-70">
								NAVIGACIJA
							</div>
							<div className="space-y-2">
								<div>
									<a href="/services">Paslaugos</a>
								</div>
								<div>
									<a href="/doctors">Gydytojai</a>
								</div>
								<div>
									<a href="/clinics">Klinikos</a>
								</div>
								<div>
									<a href="/news">Naujienos</a>
								</div>
							</div>
						</div>
						<div>
							<div className="mt-8 space-y-2 md:mt-8">
								<div>
									<a href="/contacts">Kontaktai</a>
								</div>
								<div>
									<a href="/quality-policy">
										Kokybės politika
									</a>
								</div>
								<div>
									<a href="/faq">DUK</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
