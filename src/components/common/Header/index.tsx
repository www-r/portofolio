'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './Header.styles.scss';
import NavBar from '@/components/common/NavBar';
import { debounce } from '@/utils/utils';
export default function Header() {
	const [hidden, setHidden] = useState(false);
	const headerTitleRef = useRef<HTMLHeadingElement>(null);

	function scrollHandler() {
		// scrollY 에 따른 header의 사이즈 변화
		if (scrollY > 94 && headerTitleRef && headerTitleRef.current) {
			headerTitleRef.current.className = 'header-title shrinked';
		} else {
			headerTitleRef && headerTitleRef.current && (headerTitleRef.current.className = 'header-title');
		}

		//scroll 방향에 따른 navBar 유무
		let prevScrollY = 0;
		let currentScrollY = scrollY;
		if (prevScrollY < currentScrollY) {
			setHidden(true);
			prevScrollY = scrollY;
		} else if (prevScrollY > currentScrollY) {
			setHidden(false);
			prevScrollY = scrollY;
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);

		// return window.removeEventListener('scroll', scrollHandler);
	}, []);

	return (
		<header>
			<Link href="/">
				<h1 className="header-title" ref={headerTitleRef}>
					Frontend Developer
				</h1>
			</Link>
			{!hidden && <NavBar />}
		</header>
	);
}
