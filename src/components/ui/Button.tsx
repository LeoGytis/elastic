import React from 'react';
import {cn} from '../../lib/utils';

type ButtonVariant = 'dark' | 'light';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'dark',
	className,
	...props
}) => {
	const baseStyles =
		'inline-flex items-center justify-center rounded-[3px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none uppercase py-4 px-6';

	const variantStyles = {
		dark: 'bg-rubinas text-white hover:bg-gray-800 focus:ring-gray-900',
		light: 'bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-100 border border-gray-200',
	};

	return (
		<button
			className={cn(baseStyles, variantStyles[variant], className)}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
