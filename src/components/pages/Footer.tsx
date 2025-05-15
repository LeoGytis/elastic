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
				<div className="absolute inset-0 w-3/5 mx-auto -top-60">
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
								href="#"
								aria-label="Instagram"
								className="hover:opacity-70"
							>
								<Instagram size={28} stroke="#5a2230" />
							</a>
							<a
								href="#"
								aria-label="Facebook"
								className="hover:opacity-70"
							>
								<Facebook size={28} stroke="#5a2230" />
							</a>
							<a
								href="#"
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
							<label
								htmlFor="footer-email"
								className="text-sm font-medium"
							>
								Jūsų el.paštas
							</label>
							<div className="flex items-center border-b border-[#efe8db] pb-2">
								<input
									id="footer-email"
									type="email"
									placeholder=" "
									className="flex-1 bg-transparent outline-none text-lg placeholder:text-[#5a2230]/40"
								/>
								<button
									type="submit"
									className="ml-4 p-2 rounded-full hover:bg-[#efe8db] transition-colors"
									aria-label="Submit"
								>
									<span className="inline-block rotate-[-45deg] text-2xl">
										→
									</span>
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
									href="#"
									className="underline hover:text-[#7a3a4a]"
								>
									privatumo politika
								</a>
								.
							</label>
						</form>
					</div>
					{/* Right: Navigation */}
					<div className="flex flex-col justify-end flex-1 gap-8 mt-8 text-base md:flex-row md:gap-16 md:mt-0">
						<div>
							<div className="mb-2 text-sm font-medium tracking-wider uppercase opacity-70">
								NAVIGACIJA
							</div>
							<ul className="space-y-2">
								<li>
									<a href="#" className="hover:underline">
										Paslaugos
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Gydytojai
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Klinikos
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Naujienos
									</a>
								</li>
							</ul>
						</div>
						<div>
							<ul className="mt-8 space-y-2 md:mt-8">
								<li>
									<a href="#" className="hover:underline">
										Kontaktai
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Kokybės politika
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										DUK
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
