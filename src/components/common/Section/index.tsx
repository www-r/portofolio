import React from 'react';
import './Section.styles.scss';
import { SectionProps } from '@/interfaces/ComponentProps';

export default function Section({ children, className }: SectionProps) {
	return <section className={className}> {children}</section>;
}
