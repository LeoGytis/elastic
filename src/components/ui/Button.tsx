import React from 'react';

type ButtonVariant = 'dark' | 'white';
type ButtonSize = 'default' | 'sm' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'dark',
	size = 'default',
	className = '',
	...props
}) => {
	const baseStyles =
		'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

	const variantStyles = {
		dark: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900',
		white: 'bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-100 border border-gray-200',
	};

	const sizeStyles = {
		default: 'h-10 px-4 py-2 text-sm',
		sm: 'h-8 px-3 text-xs',
		lg: 'h-12 px-6 text-base',
	};

	const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

	return (
		<button className={buttonClasses} {...props}>
			{children}
		</button>
	);
};

export default Button;
