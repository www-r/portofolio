import React from 'react';
import './DivisionLine.styles.scss';
import { DivisionLineProps } from '@/interfaces/ComponentProps';
export default function DivisionLine({ direction }: DivisionLineProps) {
	return <>{direction === 'row' ? <div className="row"></div> : <div className="column"></div>}</>;
}
