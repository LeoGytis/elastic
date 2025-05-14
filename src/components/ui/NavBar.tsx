import {Search} from 'lucide-react';
import Button from './Button';

const NavBar = () => {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 w-full px-12 pt-6 mx-auto bg-transparent bg-white">
			<div className="flex items-center justify-between w-full py-2 mx-auto bg-white border border-red-500 rounded-md">
				{/* Left side navigation items */}
				<div className="flex items-center gap-4 px-4">
					<a
						href="/paslaugos"
						className="p-3 text-gray-700 transition-colors hover:text-blue-600"
					>
						Paslaugos
					</a>
					<a
						href="/gydytojai"
						className="p-3 text-gray-700 transition-colors hover:text-blue-600"
					>
						Gydytojai
					</a>
					<a
						href="/klinikos"
						className="p-3 text-gray-700 transition-colors hover:text-blue-600"
					>
						Klinikos
					</a>
					<a
						href="/naujienos"
						className="p-3 text-gray-700 transition-colors hover:text-blue-600"
					>
						Naujienos
					</a>
				</div>

				{/* Right side items */}
				<div className="flex items-center space-x-6">
					<Search className="w-5 h-5" />
					<div className="flex items-center text-gray-700">
						<span>+370 123 45678</span>
					</div>
					<Button variant="dark" className="hover:bg-blue-50">
						Registracija
					</Button>
					<Button variant="white" className="hover:bg-blue-50">
						EN
					</Button>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
