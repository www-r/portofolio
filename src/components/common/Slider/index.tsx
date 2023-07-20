'use client';
import React from 'react';
import Image from 'next/image';
import './Slider.styles.scss';
import { SliderProps } from '@/interfaces/ComponentProps';

export default function Slider({ width = '120rem', array }: SliderProps) {
	console.log(array);
	const sliderClickHandler = () => {
		console.log('dd');
	};
	return (
		<div className="slider-wrapper">
			<div className="slider" onClick={sliderClickHandler} style={{ width: `${width}` }}>
				{array.length !== 0 &&
					array.map((slide, index) => (
						<Image key={index} src={slide.default.src} alt="slide" width={400} height={500} />
					))}
			</div>
		</div>
	);
}
