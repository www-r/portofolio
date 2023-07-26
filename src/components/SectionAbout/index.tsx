'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import './SectionAbout.styles.scss';
import Section from '@/components/common/Section';
import Title from '../common/Title';
import Button from '../common/Button/Button';
import Slider from '../common/Slider';
import { tree, ocean, image0, image1, image2, image3, image4, image5, image6 } from '../../../public/images.js';

export default function SectionSelfIntro() {
	const [isHidden, setIsHidden] = useState(true);
	const coverImageRef = useRef(null);
	const introductionRef = useRef<HTMLParagraphElement>(null);
	const introBtnClickHandler = () => {
		setIsHidden(false);
	};

	useEffect(() => {
		onscroll = () => {
			//About 이벤트
			if (scrollY > 190 && introductionRef && introductionRef.current) {
				introductionRef.current.className = 'introduction';
			}
			if (scrollY < 180 && introductionRef && introductionRef.current) {
				introductionRef.current.className = 'introduction hidden'; //hidden 추가해야함
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
					최근에는 TypeScript를 공부하면서 이전에 JavaScript로 작업했던 프로젝트들을 마이그레이션 및 리팩토링을 하고
					있습니다.
					<br />
					그리고 Next.js를 통해 CSR, SSR 및 다른 웹 페이지 렌더링 방식들에 대해 알게 되었고,
					<br />
					어떻게 하면 컴포넌트를 팀원들이 이해하고 사용하기 쉽게 짜면서도, 렌더링 방식에 맞게 효율적으로 구조를 잡을 수
					있을지 고민하고 있습니다.
					<br />
					컴포넌트에 대해 고민하다 보니 자연스럽게 아토믹 컴포넌트 디자인에 관심이 가고, Storybook을 잘 활용하고 싶다는
					생각도 같이 들었습니다.
					{!isHidden && (
						<>
							<br />
							<br />
							협업을 진행하면서 상황이 항상 좋게만 흘러가진 않았는데, 팀원 간에 의견 충돌로 인한 불화가 있었을 때,
							잠깐동안 팀 대표를 대신해서 팀을 이끌었던 기억이 있습니다.
							<br />
							상황이 좋든 나쁘든 평정심을 유지하고, 안 좋은 상황에서도 배울 점을 찾으려는 태도가 도움이 되었던 것
							같습니다. 그리고 이전에 일했던 경험들 또한 현재 저에게 문제를 해결해 나갈 때도, 협업을 진행할 때도 도움이
							되고 있다고 생각합니다.
							<br />
							바리스타로 일을 하면서 어떤 경우라도 손님께 결과물을 바로 내줘야 하는 상황을 매번 마주하며 아무리 미숙하고
							힘들어도 맡은 일에 대해 책임감을 느끼고 끝을 맺는 능력을 길렀습니다.
							<br />
							그리고 매번 팀원들과 손님들과 즉각적인 피드백을 주고받는 관계에 있으면서, 갈등 상황에서의 순간 대처 능력도
							기르게 됐습니다. <br />
							한 곳에서만 3년 정도 일하면서, 후임도 많이 들어왔는데, 그때 서로를 존중하면서도 후임과 선임의 균형감을
							지키는 태도에 대해서 많이 고민했던 기억이 있습니다.
							<br />
							배움에 있어 겸손한 태도를 유지하고 상대방을 존중하면서도 선임으로서의 책임감과 든든함은 갖춘, 그 밸런스를
							잡는 태도에 신경을 많이 썼던 기억이 있습니다.
							<br />
							<br />
							분야는 달랐지만, 이때의 경험들이 새로운 일을 시작하는 저에게 있어서 큰 도움이 된다고 믿고 있고,
							<br />
							지금의 경험들 또한 이후의 저에게 좋은 영향을 미칠 것이라고 믿고 있습니다.
						</>
					)}
				</p>
				{isHidden && (
					<Button className="navigate-btn" onClick={introBtnClickHandler}>
						<span>Read more</span>
						<span>➡️</span>
					</Button>
				)}
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
