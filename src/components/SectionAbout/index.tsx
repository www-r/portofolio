'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import './SectionAbout.styles.scss';
import Section from '@/components/common/Section';
import Title from '../common/Title';
import Button from '../common/Button/Button';
import Slider from '../common/Slider';
import { tree, ocean, image0, image1, image2, image3, image4, image5, image6 } from '../../../public/images.js';

export default function SectionSelfIntro() {
	const coverImageRef = useRef(null);
	const introductionRef = useRef<HTMLParagraphElement>(null);

	const array = [tree, ocean];

	useEffect(() => {
		onscroll = () => {
			//About 이벤트
			if (scrollY > 190 && introductionRef && introductionRef.current) {
				introductionRef.current.className = 'introduction';
			}
			if (scrollY < 180 && introductionRef && introductionRef.current) {
				introductionRef.current.className = 'introduction '; //hidden 추가해야함
			}
		};
	}, []);

	return (
		<Section className="about-section">
			<div className="cover-image" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
				{/* {array.map((item, index) => (
					<Image src={item} key={index} alt="cover image" ref={coverImageRef} height={500} />
				))} */}
				<Image src={tree} alt="cover image" height={500} />
			</div>
			<div className="about--introduction">
				<p className="introduction hidden" ref={introductionRef}>
					안녕하세요
					<br />
					저는 많은 사람과 의견을 나눔으로써 혼자서는 생각하지 못했을 새로운 결과물을 만들어 내는 것이 즐겁고, 
					<br />
					기존의 지식과 새로 습득한 지식을 저만의 언어로 풀어 이해하고 그에 맞는 해결 방법을 찾아 내는 것이 즐거운
					<br />
					프론트엔드 개발자입니다.
					<br />
					최근에는 TypeScript를 공부하면서 이전에 JavaScript로 작업했던 프로젝트들을 마이그레이션 및 리팩토링을 하고 있습니다.
					<br />
					그리고 Next.js를 통해 CSR, SSR 및 다른 웹 페이지 렌더링 방식들에 대해 알게 되었고, 
					<br />
					어떻게 하면 컴포넌트를 팀원들이 이해하고 사용하기 쉽게 짜면서도, 렌더링 방식에 맞게 효율적으로 구조를 잡을 수 있을지 고민하고 있습니다.  
					<br />
				</p>
				<Button className="navigate-btn">
					<span>Read more</span>
					<span>➡️</span>
				</Button>
			</div>
			<div className="about-container">
				<Title border="right">
					<h2>About</h2>
					<ul>
						<li className="about--item">
							<h3>👩🏻‍🦰 이름</h3>
							<h4>김영은</h4>
						</li>
						<li className="about--item">
							<h3>🎂 나이</h3>
							<h4>만 25세(98년생)</h4>
						</li>
						<li className="about--item">
							<h3>🏠 주소지</h3>
							<h4>서울특별시 용산구 이촌동</h4>
						</li>
						<li className="about--item">
							<h3>📞 연락처</h3>
							<h4>010-7475-2318</h4>
						</li>
						<li className="about--item">
							<h3>✉️ 이메일</h3>
							<h4>inmein@naver.com</h4>
						</li>
					</ul>
				</Title>
				<Slider array={[image0, image1, image2, image3, image4, image5, image6]} />
			</div>
		</Section>
	);
}
