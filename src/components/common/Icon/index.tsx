import React from 'react';
import './Icon.styles.scss';
import { IconProps } from '@/interfaces/ComponentProps';
export default function Icon({ children, name, color }: IconProps) {
	return (
		<div className="icon-box">
			<div className="icon-wrapper">{children}</div>
			<span className="icon-name" style={{ color: `${color}` }}>
				{name}
			</span>
		</div>
	);
}
