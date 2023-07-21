'use client';
import React from 'react';
import './NavBar.styles.scss';
export default function index() {
	const navLinkHandler = (item: string) => {
		switch (item) {
			case 'About':
				scrollTo(0, 1280);
				break;
			case 'Archive':
				scrollTo(0, 1950);
				break;
			case 'Skills':
				scrollTo(0, 2900);
				break;
			case 'Projects':
				scrollTo(0, 3835);
				break;
			case 'Contact':
				scrollTo(0, 5000);
				break;
		}
	};

	return (
		<nav>
			<div className="navbar-item" onClick={() => navLinkHandler('About')}>
				About
			</div>
			<div className="navbar-item" onClick={() => navLinkHandler('Archive')}>
				Archive
			</div>
			<div className="navbar-item" onClick={() => navLinkHandler('Skills')}>
				Skills
			</div>
			<div className="navbar-item" onClick={() => navLinkHandler('Projects')}>
				Projects
			</div>
			<div className="navbar-item" onClick={() => navLinkHandler('Contact')}>
				Contact
			</div>
		</nav>
	);
}
