import {Phone, Search} from 'lucide-react';
import Button from './Button';

const NavBar = () => {
	return (
		<nav className="flex items-center justify-between w-full bg-white border-2 border-red-500">
			<div className="flex items-center justify-between h-16 border-2 border-red-500">
				{/* Left side navigation items */}
				<div className="flex items-center space-x-8">
					<a
						href="/paslaugos"
						className="text-gray-700 transition-colors hover:text-blue-600"
					>
						Paslaugos
					</a>
					<a
						href="/gydytojai"
						className="text-gray-700 transition-colors hover:text-blue-600"
					>
						Gydytojai
					</a>
					<a
						href="/klinikos"
						className="text-gray-700 transition-colors hover:text-blue-600"
					>
						Klinikos
					</a>
					<a
						href="/naujienos"
						className="text-gray-700 transition-colors hover:text-blue-600"
					>
						Naujienos
					</a>
				</div>

				{/* Right side items */}
				<div className="flex items-center space-x-6">
					<Search className="w-5 h-5" />
					<div className="flex items-center text-gray-700">
						<Phone className="w-5 h-5 mr-2" />
						<span>+370 123 45678</span>
					</div>
					<Button variant="dark" className="hover:bg-blue-50">
						Registruotis
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
