import React from 'react';
import {cn} from '../../lib/utils';

type ButtonVariant = 'dark' | 'light';
type ButtonSize = 'small' | 'default';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'dark',
	size = 'default',
	className,
	...props
}) => {
	return (
		<button
			className={cn(
				'inline-flex items-center justify-center rounded-[3px] text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none uppercase',
				size === 'default' ? 'py-4 px-6' : 'py-[11px] px-[17px]',
				variant === 'dark'
					? 'bg-rubinas text-white hover:text-rubinas hover:!bg-perlas'
					: '!bg-perlas text-rubinas hover:text-perlas hover:!bg-rubinas border border-rubinas/20',
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
