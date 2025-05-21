import React, {useCallback, useEffect, useState} from 'react';

interface SliderProps {
	children: React.ReactNode;
	className?: string;
	autoSlideInterval?: number;
}

export const Slider: React.FC<SliderProps> = ({
	children,
	className = '',
	autoSlideInterval = 3000,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const childrenArray = React.Children.toArray(children);

	const duplicatedChildren = [
		...childrenArray,
		...childrenArray,
		...childrenArray,
	];

	const totalSlides = childrenArray.length;

	const nextSlide = useCallback(() => {
		setCurrentIndex((prevIndex) => {
			const nextIndex = prevIndex + 1;
			if (nextIndex >= totalSlides * 2) {
				return totalSlides;
			}
			return nextIndex;
		});
	}, [totalSlides]);

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, autoSlideInterval);

		return () => clearInterval(interval);
	}, [currentIndex, autoSlideInterval, nextSlide]);

	const handleTransitionEnd = () => {
		if (currentIndex >= totalSlides * 2) {
			setCurrentIndex(totalSlides);
		} else if (currentIndex < 0) {
			setCurrentIndex(totalSlides - 1);
		}
	};

	return (
		<div className={`relative w-full overflow-hidden ${className}`}>
			<div
				className="flex transition-transform duration-1000 ease-in-out"
				style={{
					transform: `translateX(-${currentIndex * 100}%)`,
				}}
				onTransitionEnd={handleTransitionEnd}
			>
				{duplicatedChildren.map((child, index) => (
					<div key={index} className="flex-shrink-0 w-full md:w-1/5">
						{child}
					</div>
				))}
			</div>
		</div>
	);
};
