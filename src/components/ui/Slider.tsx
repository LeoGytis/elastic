import React, {useCallback, useEffect, useState} from 'react';

interface SliderProps {
	children: React.ReactNode;
	className?: string;
	slidesToShow?: number;
	autoSlideInterval?: number;
}

export const Slider: React.FC<SliderProps> = ({
	children,
	className = '',
	slidesToShow = 3,
	autoSlideInterval = 3000,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const childrenArray = React.Children.toArray(children);

	// Create a duplicated array for infinite scroll effect
	const duplicatedChildren = [
		...childrenArray,
		...childrenArray,
		...childrenArray,
	];
	const totalSlides = childrenArray.length;

	const nextSlide = useCallback(() => {
		setCurrentIndex((prevIndex) => {
			const nextIndex = prevIndex + 1;
			// Reset to the middle set of slides when reaching the end
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

	// Handle the transition end to create seamless infinite scroll
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
					transform: `translateX(-${
						currentIndex * (100 / slidesToShow)
					}%)`,
				}}
				onTransitionEnd={handleTransitionEnd}
			>
				{duplicatedChildren.map((child, index) => (
					<div
						key={index}
						className="flex-shrink-0"
						style={{width: `${100 / slidesToShow}%`}}
					>
						{child}
					</div>
				))}
			</div>
		</div>
	);
};
