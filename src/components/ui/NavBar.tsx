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
			className="p-3 text-sm uppercase transition-colors text-rubinas hover:opacity-60"
		>
			{children}
		</a>
	);
};

const NavBar = () => {
	return (
		<nav className="top-0 left-0 right-0 z-50 w-full mx-auto bg-transparent lg:pt-6 lg:fixed lg:px-12">
			<div className="relative flex items-center justify-between w-full px-8 py-2 mx-auto rounded-md shadow max-lg:flex-col bg-perlas">
				{/* Left side navigation items */}
				<div className="flex items-center px-4 lg:gap-4 max-lg:flex-col">
					<NavLink href="/paslaugos">Paslaugos</NavLink>
					<NavLink href="/gydytojai">Gydytojai</NavLink>
					<NavLink href="/klinikos">Klinikos</NavLink>
					<NavLink href="/naujienos">Naujienos</NavLink>
				</div>

				{/* Right side items */}
				<div className="flex items-center gap-2 max-lg:flex-col">
					<Button
						variant="light"
						size="small"
						className="border-none top-2 left-2 max-lg:absolute"
					>
						<Search className="size-[15px]" />
					</Button>
					<Button variant="light" size="small">
						+370 123 45678
					</Button>
					<Button variant="dark" size="small">
						Registracija
					</Button>
					<Button
						variant="light"
						size="small"
						className="border-none top-2 right-2 max-lg:absolute"
					>
						EN
					</Button>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
