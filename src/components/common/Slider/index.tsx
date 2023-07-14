'use client';
import React from 'react';
import Swiper from 'swiper';
import 'swiper/scss/scrollbar';

export default function Slider() {
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		speed: 400,
		spaceBetween: 100,
		direction: 'vertical',
		loop: false,

		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	});
	return (
		<div>
			<div className="swiper">
				<div className="swiper-wrapper">
					<div className="swiper-slide">Slide 1</div>
					<div className="swiper-slide">Slide 2</div>
					<div className="swiper-slide">Slide 3</div>
				</div>
				<div className="swiper-scrollbar"></div>
			</div>
		</div>
	);
}
