import React from 'react';
import './SectionContact.styles.scss';
import Section from '@/components/common/Section';
import Title from '../common/Title';
export default function SectionContact() {
	return (
		<Section className="contact-section">
			<Title width="100%" height="15rem" border="bottom">
				<h2>Contact</h2>
				{/* <h3>이쪽으로 연락주시면 감사하겠습니다.</h3> */}
			</Title>
			<ul className="contact-cards-wrapper">
				<li>
					<p className="label">이메일</p>
					<div className=" contact-card">
						<a href="mailto:inmein@naver.com">inmein@naver.com</a>
					</div>
				</li>

				<li>
					<p className="label">전화번호</p>
					<div className="contact-card">
						<a href="tel:010-7475-2318">010-7475-2318</a>
					</div>
				</li>
			</ul>
		</Section>
	);
}
