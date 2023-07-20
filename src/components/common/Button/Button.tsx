'use client';
import React from 'react';
import './Button.styles.scss';
import { ButtonProps } from '@/interfaces/ComponentProps';


export default function Button({ children, className }: ButtonProps) {
	let buttonClickHandler;
	if (className === 'scroll-top-btn')
		buttonClickHandler = () => {
			scrollTo(0, 0);

		};
	return (
		<button className={className} onClick={buttonClickHandler}>
			{children}
		</button>
	);
}
