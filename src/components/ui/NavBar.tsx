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
		<nav className="fixed top-0 left-0 right-0 z-50 w-full px-12 pt-6 mx-auto bg-transparent">
			<div className="flex items-center justify-between w-full px-8 py-2 mx-auto rounded-md shadow bg-perlas">
				{/* Left side navigation items */}
				<div className="flex items-center gap-4 px-4">
					<NavLink href="/paslaugos">Paslaugos</NavLink>
					<NavLink href="/gydytojai">Gydytojai</NavLink>
					<NavLink href="/klinikos">Klinikos</NavLink>
					<NavLink href="/naujienos">Naujienos</NavLink>
				</div>

				{/* Right side items */}
				<div className="flex items-center gap-2">
					<Button
						variant="light"
						size="small"
						className="border-none"
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
						className="border-none"
					>
						EN
					</Button>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
