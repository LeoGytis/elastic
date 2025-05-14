import {Search} from 'lucide-react';
import {ReactNode} from 'react';
import Button from './Button';

interface NavLinkProps {
	href: string;
	children: ReactNode;
}

const NavLink = ({href, children}: NavLinkProps) => {
	return (
		<a
			href={href}
			className="p-3 transition-colors text-rubinas hover:text-blue-600"
		>
			{children}
		</a>
	);
};

const NavBar = () => {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 w-full px-12 pt-6 mx-auto bg-transparent">
			<div className="flex items-center justify-between w-full py-2 mx-auto rounded-md bg-perlas">
				{/* Left side navigation items */}
				<div className="flex items-center gap-4 px-4">
					<NavLink href="/paslaugos">Paslaugos</NavLink>
					<NavLink href="/gydytojai">Gydytojai</NavLink>
					<NavLink href="/klinikos">Klinikos</NavLink>
					<NavLink href="/naujienos">Naujienos</NavLink>
				</div>

				{/* Right side items */}
				<div className="flex items-center space-x-6">
					<Search className="w-5 h-5" />
					<div className="flex items-center text-rubinas">
						<span>+370 123 45678</span>
					</div>
					<Button variant="dark" className="hover:bg-blue-50">
						Registracija
					</Button>
					<Button variant="light" className="hover:bg-blue-50">
						EN
					</Button>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
