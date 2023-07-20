import React from 'react';
import './Title.styles.scss';
import { TitleProps } from '@/interfaces/ComponentProps';

export default function Title({ children, width = '30rem', height = 'auto', border = 'right' }: TitleProps) {
	return (
		<>
			{border === 'right' ? (
				<div className="item--title" style={{ width: `${width}`, height: `${height}`, borderRight: '1px solid #000' }}>
					{children}
				</div>
			) : (
				<div className="item--title" style={{ width: `${width}`, height: `${height}`, borderBottom: '1px solid #000' }}>
					{children}
				</div>
			)}
		</>
	);
}
