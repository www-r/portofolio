import React, { ReactNode, ComponentProps } from 'react';

//common
export interface DivisionLineProps {
	direction: 'row' | 'column';
}
export interface SectionProps {
	children: ReactNode;
	className?: string;
	width?: string;
	height?: string;
}
export interface TitleProps {
	children: ReactNode;
	width?: string;
	height?: string;
	border: string;
}
export interface ButtonProps extends ComponentProps<'button'> {
	children: ReactNode;
	className?: string;
}
export interface IconProps {
	children: ReactNode;
	name?: string;
	color?: string;
}
export interface SliderProps {
	width?: string;
	array: any[];
}
