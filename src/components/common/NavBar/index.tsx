import React from 'react';
import './NavBar.styles.scss';
export default function index() {
	return (
		<nav>
			<div className='navbar-item'>자기소개</div>
			<div className='navbar-item'>기술스텍</div>
			<div className='navbar-item'>포트폴리오</div>
			<div className='navbar-item'>Contact</div>
		</nav>
	);
}
