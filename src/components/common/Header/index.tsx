'use client';
import React, { useState, useEffect } from 'react';
import './Header.styles.scss';
import NavBar from '@/components/common/NavBar';

export default function Header() {
	const [hidden, setHidden] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			let h1 = document.getElementsByClassName('header-title');
			if (scrollY === 94) setHidden(!hidden);
			if (scrollY > 94) {
				h1[0].className = 'header-title shrinked';
			} else {
				h1[0].className = 'header-title';
			}
		});
	}, []);
	return (
		<header>
			<h1 className="header-title">Frontend Developer</h1>
			{!hidden && <NavBar />}
		</header>
	);
}
