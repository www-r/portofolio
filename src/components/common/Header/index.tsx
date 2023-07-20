'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './Header.styles.scss';
import NavBar from '@/components/common/NavBar';
export default function Header() {
	const [hidden, setHidden] = useState(false);
	let prevScrollY = 0;
	onscroll = () => {
		//scroll 방향에 따른 navBar 유무

		let currentScrollY = scrollY;
		if (prevScrollY < currentScrollY) {
			setHidden(true);
			prevScrollY = scrollY;
			return;
		} else if (prevScrollY > currentScrollY) {
			setHidden(false);
			prevScrollY = scrollY;
		}
	};
	// useEffect(() => {
	// 	window.addEventListener('scroll', () => {
	// 		let h1 = document.getElementsByClassName('header-title');
	// 		if (scrollY === 94) setHidden(!hidden);
	// 		if (scrollY > 94) {
	// 			h1[0].className = 'header-title shrinked';
	// 		} else {
	// 			h1[0].className = 'header-title';
	// 		}
	// 	});
	// }, []);
	return (
		<header>
			<Link href="/">
				<h1 className="header-title">Frontend Developer</h1>
			</Link>
			{!hidden && <NavBar />}
		</header>
	);
}
