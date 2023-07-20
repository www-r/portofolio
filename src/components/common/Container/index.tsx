import React from 'react';
import { SectionProps } from '@/interfaces/ComponentProps';

export default function Container({ children, width = '100%', height = 'auto' }: SectionProps) {
	return (
		<ul
			style={{
				width: `${width}`,
				height: `${height}`,
				display: 'flex',
				gap: '5rem',
				flexWrap: 'wrap',
				justifyContent: 'center',
				marginTop: '3rem',
			}}
		>
			{children}
		</ul>
	);
}
