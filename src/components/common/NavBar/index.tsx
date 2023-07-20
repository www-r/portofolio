import React from 'react';
import './NavBar.styles.scss';
export default function index() {
	const navLinkHandler = (item) => {
		switch (item) {
			case 'About':
				scrollTo(0, 420);
				break;
			case 'Skills':
				scrollTo(0, 1625);
				break;
			case 'Projects':
				scrollTo(0, 2350);
				break;
			case 'Contact':
				break;
		}
	};
	return (
		<nav>
			<div className="navbar-item" onClick={() => navLinkHandler('About')}>
				About
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
