import React from 'react';
import './Section.styles.scss';
import { SectionProps } from '@/interfaces/ComponentProps';

export default function Section({ children, className, onMouseEnter, onMouseLeave }: SectionProps) {
	return (
		<section className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			{children}
		</section>
	);
}
