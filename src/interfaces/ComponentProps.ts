import Module from 'module';
import React, { ReactNode, ComponentProps, MouseEventHandler, Dispatch, SetStateAction } from 'react';

//common
export interface DivisionLineProps {
	direction: 'row' | 'column';
}
export interface SectionProps extends ComponentProps<'div'> {
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
export interface Project {
	image: any;
	title: string;
	summary: string;
	skills: string;
	members: number;
	id: string;
}
export interface ProjectBoxProps {
	index: number;
	project: Project;
	isClicked: boolean[];
	setIsClicked: Dispatch<SetStateAction<any[]>>;
	shown: string;
}
export interface ProjectDetailsProps {
	index: number;
	isClicked: boolean[];
	setIsClicked: Dispatch<SetStateAction<any[]>>;
	projectDetail: any;
}
