import {useMediaQuery} from '@/hooks/useMediaQuery';
import React, {useCallback, useEffect, useState} from 'react';

interface SliderProps {
	children: React.ReactNode;
	autoSlideInterval?: number;
}

export const Slider: React.FC<SliderProps> = ({
	children,
	autoSlideInterval = 3000,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const isDesktop = useMediaQuery('(min-width: 1024px)');
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

	const transformStyle = {
		transform: isDesktop
			? `translateX(-${(currentIndex * 100) / 5}%)`
			: `translateX(-${currentIndex * 100}%)`,
	};

	return (
		<div className="w-[95dvw] lg:w-[98dvw]">
			<div className="overflow-hidden">
				<div
					className="flex transition-transform duration-1000 ease-in-out"
					style={transformStyle}
					onTransitionEnd={handleTransitionEnd}
				>
					{duplicatedChildren.map((child, index) => (
						<div
							key={index}
							className="flex-shrink-0 w-full lg:w-1/5"
						>
							{child}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
