import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button/Button';
import './Footer.styles.scss';
import { githubMarkLogoWhite, notionIcon, instagramIcon, threadsIcon } from '../../../../public/icons';
export default function Footer() {
	return (
		<footer>
			<div>
				<ul className="contact-buttons-container">
					<li>
						<Link href="https://github.com/www-r">
							<Button>
								<Image src={githubMarkLogoWhite} alt="github icon" height={48} />
							</Button>
						</Link>
					</li>
					<li>
						<Link href="#">
							<Button>
								<Image src={notionIcon} alt="notion icon" height={48} />
							</Button>
						</Link>
					</li>
				</ul>
				<div>© 2023. Kim Young En. All rights reserved.</div>
			</div>
		</footer>
	);
}
