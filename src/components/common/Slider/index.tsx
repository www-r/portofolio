'use client';
import React from 'react';
import Image from 'next/image';
import './Slider.styles.scss';
import { SliderProps } from '@/interfaces/ComponentProps';

export default function Slider({ width = 'max-content', array }: SliderProps) {
	const sliderClickHandler = () => {};
	return (
		<div className="slider-wrapper">
			<div className="slider" onClick={sliderClickHandler} style={{ width: `${width}` }}>
				{array.map((slide, index) => (
					<Image
						src={slide}
						key={index}
						alt="image"
						width={399}
						height={500}
						style={{ borderRight: '1px solid #000' }}
					/>
				))}
			</div>
		</div>
	);
}
