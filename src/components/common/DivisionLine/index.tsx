import React from 'react';
import './DivisionLine.styles.scss'
interface DivisionLineProps {
	direction: 'row' | 'column';
}

export default function DivisionLine({ direction }: DivisionLineProps) {
	return <>{direction === 'row' ? <div className="row"></div> : <div className="column"></div>}</>;
}
