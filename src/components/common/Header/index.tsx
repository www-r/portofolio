'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './Header.styles.scss';
import NavBar from '@/components/common/NavBar';
import { debounce } from '@/utils/utils';

export default function Header() {
	const [headerShrinked, setHeaderShrinked] = useState(false);
	const [prevScrollY, setPrevScrollY] = useState(0);
	const [hidden, setHidden] = useState(false);
	const headerTitleRef = useRef<HTMLHeadingElement>(null);

	const headerHandler = () => {
		//내려갈 때
		if (prevScrollY < window.scrollY) {
			console.log('down', scrollY);
			setPrevScrollY(window.scrollY);
			setHidden(true);
			// scrollY 에 따른 header의 사이즈 변화
			if (window.scrollY < 94) {
				setHeaderShrinked(false);
				setHidden(false);
			} else setHeaderShrinked(true);
		} else {
			//올라갈 때
			console.log('up', scrollY);
			setPrevScrollY(window.scrollY);
			setHidden(false);
			// scrollY 에 따른 header의 사이즈 변화
			if (window.scrollY < 94) {
				setHeaderShrinked(false);
				setHidden(false);
			} else {
				setHeaderShrinked(true);
			}
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', headerHandler);

		// return window.removeEventListener('scroll', scrollHandler);
	}, []);

	return (
		<header>
			<Link href="/">
				<h1 className={`header-title ${headerShrinked ? 'shrinked' : ''}`}>Front-End Developer</h1>
			</Link>
			{!hidden && <NavBar />}
		</header>
	);
}
